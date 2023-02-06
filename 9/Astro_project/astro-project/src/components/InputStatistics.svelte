<script>
    let numbers = [];
    let number;
    let sum = 0;
    let avg = 0;


    const addNumber = () => {
        numbers.push(number)
        numbers = numbers
        sum = sum + number;
        avg = sum / numbers.length;
        number = null;
    }

</script>
  
<h1>Statistics generator</h1>

<input type="number" bind:value={number} />
<button on:click={addNumber}>Add value</button>

<h2>Statistics</h2>

<p>Sum: {sum}</p>
<p>Total numbers: {numbers.length}</p>
<p>Average: {avg}</p>

<h2>Numbers entered so far</h2>

<ul>
    {#each numbers as number}
        <li>{number}</li>
    {/each}
</ul>
  