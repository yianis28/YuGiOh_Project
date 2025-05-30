<script>
  let { data } = $props();
  import { onMount } from 'svelte';
</script>


<h1 class="page-title">🃏 Mein Deck</h1>
{#if data.cards?.length > 0}
  <div class="card-grid">
    {#each data.cards as card}
      <div class="card-box">
        <img src={card.image_url} alt={card.Card_name} class="card-image" />

        <div class="card-info">
          <h3>{card.Card_name}</h3>
          <p>Typ: {card.card_type}</p>
          <p>Seltenheit: {card.Rarity}</p>
        </div>

        <form method="POST" action="?/remove">
          <input type="hidden" name="cardId" value={card._id} />
          <button type="submit" class="remove-button">🗑️</button>
        </form>
      </div>
    {/each}
  </div>
{:else}
  <p>Dein Deck ist leer.</p>
{/if}

<style>
  .page-title {
     text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  }
 
  .card-grid {
     display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 2rem;
    padding: 2rem;
    justify-items: center;
  }

  .card-box {
  width: 220px;
  height: 520px;
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  position: relative; 
  }

  .card-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .card-info {
    padding: 0.5rem;
    color: white;
  }

  .remove-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #dc3545;
  color: white;
  font-size: 1.0rem;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  }

  .remove-button:hover {
    background-color: #a71d2a;
  }
</style>


