<script module lang="ts">
	export { renderInEditor };
</script>

<script lang="ts">
	import ComponentOption from '$lib/components/editor/ComponentOption.svelte';
</script>

<ComponentOption>Button</ComponentOption>

{#snippet renderInEditor()}
	<button class="rounded-md bg-neutral-950 px-4 py-2 text-sm font-medium text-white" type="button">
		Button
	</button>
{/snippet}
