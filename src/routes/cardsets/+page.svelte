<script>
  import CardSetList from "$lib/components/CardSetList.svelte";
  let { data } = $props();
</script>

<h1 class="page-title">Card Sets</h1>
<CardSetList sets={data.sets} />
