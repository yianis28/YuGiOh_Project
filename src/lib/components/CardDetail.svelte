<script>
  let { card } = $props();
  let showAddButton = $state(false);
  let showRemoveButton = $state(false);
</script>

<div class="card-detail">
  <img src={card.image_url} alt={card.Card_name} class="card-image" />
  <div class="card-info">
    <h2>{card.Card_name}</h2>
    <p><strong>Attribut:</strong> {card.Attribute}</p>
    <p><strong>Typ:</strong> {card.card_type}</p>
    <p><strong>Level:</strong> {card.Level}</p>
    <p><strong>ATK / DEF:</strong> {card["ATK / DEF"]}</p>
    <p><strong>Seltenheit:</strong> {card.Rarity}</p>
    <p><strong>Kartennummer:</strong> {card.Card_number}</p>
    <p><strong>Status:</strong> {card.Status}</p>
    <p><strong>Effekte:</strong> {card["Effect types"]}</p>
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
      <button type="submit" class="delete-button">🗑️</button>
    </form>
  {/if}
</div>

<style>
  .card-detail {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }

  .card-image {
    width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
  }

  .card-info {
    color: #222;
    font-size: 1.1rem;
  }

  .card-info p {
    margin: 0.4rem 0;
  }
  .add-button {
    background: #0a0;
    color: white;
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 5px;
    margin-top: 0.5rem;
  }

  .delete-button {
    background: #c00;
    color: white;
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 5px;
    margin-top: 0.5rem;
  }
</style>
