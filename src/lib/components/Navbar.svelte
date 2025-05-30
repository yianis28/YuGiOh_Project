<script>
  let a = $state(null);
</script>

<div class="container">
  <nav class="navbar navbar-expand-lg bg-dark fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link custom-link" aria-current="page" href="/">Home</a>
          <a class="nav-link custom-link" href="/cards">Database</a>
          <a class="nav-link custom-link" href="/cardsets">Card Sets</a>
          <a class="nav-link custom-link" href="/cards/add">Add a card</a>
          <a class="nav-link custom-link" href="/mydeck">My Deck</a>
        </div>
      </div>
    </div>
  </nav>
</div>

<style>
  nav {
    background-color: #111;
    padding: 10px;
    display: flex;
    width: 100%;
    gap: 15px;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  nav a:hover {
    color: goldenrod;
  }

  .container {
    padding: 100px;
  }
</style>
