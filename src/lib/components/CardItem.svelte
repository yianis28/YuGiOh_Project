<script>
  import { onMount } from "svelte";
  let { card, showAddButton = false, showRemoveButton = false } = $props();
  let isFavorite = $state(false);

  onMount(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    isFavorite = favs.includes(card._id);
  });

  function toggleFavorite() {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favs.includes(card._id)) {
      favs = favs.filter((id) => id !== card._id);
      isFavorite = false;
    } else {
      favs.push(card._id);
      isFavorite = true;
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
  }
</script>

<div class="card-box">
  <a href={`/cards/${card._id}`} class="card-link">
    <img src={card.image_url} alt={card.Card_name} class="card-image" />
  </a>

  <button class="fav-button" onclick={toggleFavorite}>
    {isFavorite ? "⭐" : "☆"}
  </button>

  <div class="card-content">
    <div class="card-info">
      <h3 class="card-title">{card.Card_name}</h3>
      <p class="card-sub">Typ: {card.card_type}</p>
      <p class="card-sub">Seltenheit: {card.Rarity}</p>
    </div>

    {#if showAddButton}
      <form method="POST" action="?/add">
        <input type="hidden" name="cardId" value={card._id} />
        <button type="submit" class="add-button">➕</button>
      </form>
    {/if}

    {#if showRemoveButton}
      <form method="POST" action="?/delete">
        <input type="hidden" name="cardId" value={card._id} />
        <button type="submit" class="remove-button">🗑️</button>
      </form>
    {/if}
  </div>
</div>

<style>
  .card-box {
    width: 180px;
    height: 480px;
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
    display: block;
  }

  .card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .card-info {
    padding: 0.5rem;
    color: white;
    text-align: center;
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0.25rem 0;
    color: white;
  }

  .card-sub {
    font-size: 0.85rem;
    margin: 0;
    color: #ccc;
  }

  .add-button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: black;
    color: white;
    font-size: 1.3rem;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .remove-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #dc3545;
    color: white;
    font-size: 1.3rem;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .fav-button {
    position: absolute;
    bottom: 10px;
    right: 10px; 
    background: none;
    border: none;
    font-size: 1.5rem;
    color: gold;
    cursor: pointer;
  }
</style>
