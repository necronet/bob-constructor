<script module lang="ts">
	export { renderInEditor };
</script>

<script lang="ts">
	import ComponentOption from '$lib/components/editor/ComponentOption.svelte';
</script>

<ComponentOption>Image</ComponentOption>

{#snippet renderInEditor()}
	<div class="flex items-center gap-2 rounded-md border bg-white p-2">
		<div
			class="flex h-32 w-full shrink-0 items-center justify-center rounded bg-neutral-200 font-medium text-neutral-500"
		>
			Img
		</div>
	</div>
{/snippet}
