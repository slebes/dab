export { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";
export { postgres };
const sql = postgres({}); // injecting config from env


export { sql };

const handleGetRoot = async (request) => {
    return new Response("Hello world at root!");
};

const handleGetTodos = async (request) => {
    const items = await sql`SELECT * FROM todos`;
    console.error("sdf");
    return Response.json(items)
}
const handleGetTodo = async (request, urlPatternResult) => {
    const id = urlPatternResult.pathname.groups.id;
    const todos = await sql`SELECT * FROM todos WHERE id = ${id}`;
  
    if (!todos[0]) {
      return new Response("Not found", { status: 404 });
    }
    // assuming that there's always an item that matches the id
    return Response.json(todos[0]);
};

const handlePostTodo = async (request) => {
    // assuming that the request has a json object and that
    // the json object has a property name
  
    try {
      const todo = await request.json();
      if(!todo.item) return new Response("Todo item value missing or empty", { status: 400 });
      await sql`INSERT INTO todos (item) VALUES (${todo.item})`;
      return new Response("OK", { status: 200 });
    } catch (e) {
      return new Response("Input not JSON", { status: 400})
    }
  };
const urlMapping = [
    {
      method: "GET",
      pattern: new URLPattern({ pathname: "/" }),
      fn: handleGetRoot,
    },
    {
      method: "GET",
      pattern: new URLPattern({ pathname: "/todos" }),
      fn: handleGetTodos,
    },
    {
      method: "GET",
      pattern: new URLPattern({ pathname: "/todos/:id" }),
      fn: handleGetTodo,
    },
    {
      method: "POST",
      pattern: new URLPattern({ pathname: "/todos" }),
      fn: handlePostTodo,
    },
];

const handleRequest = async (request) => {
    const mapping = urlMapping.find(
      (um) => um.method === request.method && um.pattern.test(request.url)
    );
    
    const matchingResult = mapping.pattern.exec(request.url)
    return await mapping.fn(request, matchingResult);
  };
  
  Deno.serve({ hostname: "0.0.0.0", port: 7777 }, handleRequest);
  
