<script>
    let fact = {};
    const fetchFact = () => {
      fetch('https://dog-api.kinduff.com/api/facts')
        .then((response) => response.json())
        .then((jsonData) => {
          fact = jsonData;
        });
    };
  </script>
  
  <button on:click={fetchFact}>Fetch a fact</button>
  
  {#if fact.success}
  <p>{fact.facts[0]}</p>
  {/if}