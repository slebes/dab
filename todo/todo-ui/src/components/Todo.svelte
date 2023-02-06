<script>
    let todo = "";
    const fetchTodos = async () => {
        const response = await fetch('/api/todos')
        const data = await response.json()
        return data;
    };
    const addTodo = async () => {
        await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify({ item: todo })
        })
        todo = "";
        todoPromise = fetchTodos();
    }
    
    const deleteTodo = async (id) => {
        await fetch(`/api/todos/${id}`, {
            method: 'DELETE',
        })
        todoPromise = fetchTodos()
    }

    let todoPromise = fetchTodos();

</script>

<h1>TODOS!</h1>

<input type="text" bind:value={todo}/>
<button on:click={addTodo}>Add todo</button>


{#await todoPromise}
  <p>Loading todos</p>
{:then todos}
  {#if todos.length == 0}
    <p>No items available</p>
  {:else}
    <ul>
      {#each todos as todo}
        <li>{todo.item}</li>
        <button on:click={() => deleteTodo(todo.id)}>Delete</button>
      {/each}
    </ul>
  {/if}
{/await}