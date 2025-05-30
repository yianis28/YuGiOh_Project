<script>
  let { children } = $props();
  import Navbar from "$lib/components/Navbar.svelte";
</script>

	<Navbar />
	<main class="flex justify-center items-center py-8">
		{@render children()}
	</main>



