<script lang="ts">
	import type { ComponentOptionItem } from '$lib/components/types';

	type Props = {
		selectedItem: ComponentOptionItem | null;
	};

	let { selectedItem = $bindable(null) }: Props = $props();
</script>

<div class="space-y-4 rounded-md border border-builder-primary/20 bg-builder-primary/5 p-4">
	{#if selectedItem}
		<div>
			<p class="text-xs font-semibold tracking-wide text-builder-primary uppercase">Selected</p>
			<p class="mt-1 text-sm font-medium break-all text-builder-black">{selectedItem.id}</p>
		</div>

		{#if selectedItem.type === 'textBlock'}
			<label class="block">
				<span class="text-sm font-medium text-builder-black">Value</span>
				<textarea
					class="mt-2 w-full rounded-md border-builder-primary/20 text-sm"
					rows="4"
					bind:value={selectedItem.attributes.value}
				></textarea>
			</label>
		{:else if selectedItem.type === 'image'}
			<label class="block">
				<span class="text-sm font-medium text-builder-black">Src</span>
				<input
					class="mt-2 w-full rounded-md border-builder-primary/20 text-sm"
					type="text"
					bind:value={selectedItem.attributes.src}
				/>
			</label>
		{:else if selectedItem.type === 'button'}
			<p class="text-sm font-medium text-builder-primary">No properties available</p>
		{/if}
	{:else}
		<p class="text-sm font-medium text-builder-primary">No component selected</p>
	{/if}
</div>
