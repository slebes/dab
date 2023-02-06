import * as todoService from "./services/todoService.js"
import { cacheMethodCalls } from "./util/cacheUtil.js";

const cachedTodoService = todoService;

const SERVER_ID = crypto.randomUUID();

const handleGetRoot = async (request) => {
  return new Response(`Hello from ${ SERVER_ID }`);
};

const handleGetTodos = async (request) => {
    const todos = await cachedTodoService.getTodos();
    return Response.json(todos);
}
const handleGetTodo = async (request, urlPatternResult) => {
  const id = urlPatternResult.pathname.groups.id;
  const todo = await cachedTodoService.getTodo(id)
  if (!todo) {
    return new Response("Not found", { status: 404 });
  }
  return Response.json(todo);
};

const handlePostTodo = async (request) => {
    try {
      const todo = await request.json();
      if(!todo.item) return new Response("Todo item value missing or empty", { status: 400 });
      await cachedTodoService.addTodo(todo);
      return new Response("OK", { status: 200 });
    } catch (e) {
      console.log(e);
      return new Response("Input not JSON", { status: 400})
    }
};


const handleDeleteTodo = async (request, urlPatternResult) => {
  const id = urlPatternResult.pathname.groups.id;
  try {
    const result = await cachedTodoService.deleteTodo(id);
    if(result.length === 0) {
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
  
