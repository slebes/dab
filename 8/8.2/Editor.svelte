<script>
    export let addText;
    let text = "";
    const textTyped = () => {
        addText(text);
        text = "";
    }
</script>

<input type="text" bind:value={text}/><button on:click={textTyped}>Add text</button>
