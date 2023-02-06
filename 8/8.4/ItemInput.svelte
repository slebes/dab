<script>
    import { items } from "./itemStore.js";
    let item = "";
    const addItem = () => {
        $items = [...$items, item];
        item = "";
    }
</script>

<h2>Add an item</h2>

<input type="text" bind:value={item}/>
<button on:click={addItem}>Add!</button>