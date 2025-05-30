<script>
  let { sets = [] } = $props();
</script>

<div class="cardset-grid">
  {#each sets as set}
    <a class="cardset-box" href={`/cardsets/${set._id}`}>
      <p class="cardset-title">{set.set_name}</p>
    </a>
  {/each}
</div>

<style>
  .cardset-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 2rem;
    margin: 1rem auto; 
    max-width: 2500px; 
    padding: 1rem; 
  }

  .cardset-box {
    background: #1a1a1a;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    text-decoration: none;
    color: white;
    transition:
      transform 0.2s ease,
      background 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    text-align: center;
  }

  .cardset-box:hover {
    background: #2a2a2a;
    transform: scale(1.03);
  }

  .cardset-title {
    font-weight: bold;
    font-size: 0.95rem;
  }
</style>
