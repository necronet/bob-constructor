<script lang="ts">
	import type { ComponentOptionItem } from '$lib/components/types';

	type Props = {
		selectedItem: ComponentOptionItem | null;
	};

	let { selectedItem }: Props = $props();
</script>

<div class="rounded-md border border-builder-primary/20 bg-builder-primary/5 p-4">
	{#if selectedItem}
		<p class="text-sm font-medium text-builder-black">{selectedItem.id}</p>
	{:else}
		<p class="text-sm font-medium text-builder-primary">No component selected</p>
	{/if}
</div>
