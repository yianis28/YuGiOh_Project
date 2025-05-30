<script>
  let { data } = $props();
  import CardDetail from "$lib/components/CardDetail.svelte";
</script>

<a href="/cards" class="btn-back">Zurück</a>

<h1 class="page-title">Card Details</h1>

<CardDetail card={data.card} />

<style>
  a {
    color: white;
  }
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
      position:relative;
  }

  .btn-back:hover {
  background-color: #444;
  border-color: #777;
}


</style>
