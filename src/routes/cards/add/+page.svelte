
<script>
  import CardForm from "$lib/components/CardForm.svelte";
  let { form } = $props();
</script>

<CardForm {form} />

{#if form?.success}
  <p class="text-success text-center mt-4">✅ Karte erfolgreich gespeichert!</p>
{:else if form?.error}
  <p class="text-danger text-center mt-4">{form.error}</p>
{/if}
