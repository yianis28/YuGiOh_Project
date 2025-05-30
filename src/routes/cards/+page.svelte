<script>
	import CardItem from "$lib/components/CardItem.svelte";
	import { onMount } from "svelte";

	let { data } = $props();
	let cards = data.cards;
	let mydeckIds = data.mydeckIds;
	let filteredCards = $state([]);
	let showFavoritesOnly = $state(false);

	function getFavorites() {
		return JSON.parse(localStorage.getItem("favorites") || "[]");
	}

	function filterCards() {
		const favs = getFavorites();
		filteredCards = showFavoritesOnly
			? cards.filter((c) => favs.includes(c._id))
			: cards;
	}

	onMount(() => {
		filterCards();
	});

	$effect(() => {
		filterCards();
	});
</script>

<h1 class="page-title">Database</h1>

<div class="top-bar">
	<form method="GET" class="search-form">
		<input
			type="text"
			name="search"
			value={data.search}
			placeholder="Suche nach Kartenname…"
			class="search-input"
		/>
		<button type="submit" class="search-button">🔍</button>
	</form>

	<button
		class="filter-button"
		onclick={() => (showFavoritesOnly = !showFavoritesOnly)}
	>
		{showFavoritesOnly
			? "🔁 Alle Karten anzeigen"
			: "⭐ Nur Favoriten anzeigen"}
	</button>
</div>

{#if filteredCards.length > 0}
	<div class="card-grid">
		{#each filteredCards as card}
			<CardItem {card} showAddButton={!mydeckIds.includes(card._id)} />
		{/each}
	</div>
{:else}
	<p>Keine Karten gefunden.</p>
{/if}

<style>
	.page-title {
		text-align: center;
		font-size: 2rem;
		margin-top: 2rem;
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		padding: 0 2rem;
		margin-top: 2rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.search-form {
		display: flex;
		align-items: center;
		background-color: #222;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
	}

	.search-input {
		padding: 0.5rem 1rem;
		border: none;
		background: transparent;
		color: #eee;
		font-size: 1rem;
		width: 240px;
	}
	.search-input::placeholder {
		color: #999;
	}

	.search-button {
		background-color: #4b0082;
		border: none;
		padding: 0.5rem 1rem;
		color: white;
		cursor: pointer;
		font-size: 1.1rem;
		transition: background-color 0.2s;
	}
	.search-button:hover {
		background-color: #6a0dad;
	}

	.filter-button {
		background-color: black;
		color: gold;
		border: 2px solid gold;
		border-radius: 8px;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.filter-button:hover {
		background-color: gold;
		color: black;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 2rem;
		padding: 2rem;
		justify-items: center;
	}
</style>
