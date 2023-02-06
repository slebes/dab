import { postgres } from "../deps.js";

const sql = postgres({}); // injecting config from env

const getTodos = async () => {
    const todos = await sql`SELECT * FROM todos`
    return todos 
}

const getTodo = async (id) => {
    const result = await sql`SELECT * FROM todos WHERE id = ${id}`;
    return result[0];
}

const addTodo = async (todo) => {
    await sql`INSERT INTO todos (item) VALUES (${todo.item})`;
};

const deleteTodo = async (id) => {
    const result = await sql`DELETE FROM todos WHERE id = ${id} RETURNING *`;
    return result;
};

export { getTodos, getTodo, addTodo, deleteTodo }