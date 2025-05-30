<script>
  import CardList from "$lib/components/CardList.svelte";
  let { data } = $props();
</script>

<a href="/cardsets" class="btn-back">← zurück zu den Sets</a>

<h1>{data.set.set_name}</h1>

{#if data.cards.length > 0}
  <CardList cards={data.cards} />
{:else}
  <p>Keine Karten in diesem Set.</p>
{/if}

<style>
  .btn-back {
    background-color: #2e2e2e; 
    color: #f5f5f5; 
    padding: 10px 20px;
    border: 1px solid #555; 
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition:
      background-color 0.3s,
      border 0.3s;
  }

  .btn-back:hover {
    background-color: #444;
    border-color: #777;
  }
  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
</style>
