import { postgres } from "./deps.js";
const sql = postgres({}); // injecting config from env

export { sql };


const SERVER_ID = crypto.randomUUID();

const handleGetRoot = async (request) => {
  return new Response(`Hello from ${ SERVER_ID }`);
};

const handleGetTodos = async (request) => {
    const items = await sql`SELECT * FROM todos`;
    return Response.json(items)
}
const handleGetTodo = async (request, urlPatternResult) => {
    const id = urlPatternResult.pathname.groups.id;
    const todos = await sql`SELECT * FROM todos WHERE id = ${id}`;
    console.log(todos);
  
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
      console.log(e);
      return new Response("Input not JSON", { status: 400})
    }
  };


const handleDeleteTodo = async (request, urlPatternResult) => {
  // assuming that the request has a json object and that
  // the json object has a property name

  const id = urlPatternResult.pathname.groups.id;
  try {
    const query = await sql`DELETE FROM todos WHERE id = ${id} RETURNING *`;
    if(query.length === 0) {
      return new Response("Not found", { status: 404 })
    }
    return new Response("OK", { status: 200 });
  } catch (e) {
    console.log(e)
    return new Response("Bad request", { status: 400 })
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
    {
      method: "DELETE",
      pattern: new URLPattern({ pathname: "/todos/:id" }),
      fn: handleDeleteTodo,
    },
];

const handleRequest = async (request) => {
    const mapping = urlMapping.find(
      (um) => um.method === request.method && um.pattern.test(request.url)
    );

    if(!mapping) {
      return new Response("Not found", { status: 404 });
    }
    
    const matchingResult = mapping.pattern.exec(request.url)
    try {
      return await mapping.fn(request, matchingResult);
    } catch (e) {
      console.log(e);
      return new Response(e.stack, { status: 500 })
    }
  };
  
  Deno.serve({ hostname: "0.0.0.0", port: 7777 }, handleRequest);
  
