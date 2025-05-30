<script>
  import CardItem from './CardItem.svelte';
  let { cards = [] } = $props();
</script>

<div class="card-grid">
  {#each cards as card}
    <CardItem {card} />
  {/each}
</div>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
    justify-items: center;
    max-width: 2500px;
    margin: 1rem auto;
  }
</style>
