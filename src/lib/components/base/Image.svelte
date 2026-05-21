<script module lang="ts">
	import type { ComponentOptionItem } from '$lib/components/types';

	export { renderInEditor };
</script>

<script lang="ts">
	import ComponentOption from '$lib/components/editor/ComponentOption.svelte';
</script>

<ComponentOption>Image</ComponentOption>

{#snippet renderInEditor(item: ComponentOptionItem)}
	<div class="flex items-center gap-2 rounded-md border border-builder-primary/20 bg-white p-2">
		{#if item.type === 'image' && item.attributes.src}
			<img class="h-32 w-full rounded object-cover" src={item.attributes.src} alt="" />
		{:else}
			<div
				class="flex h-32 w-full shrink-0 items-center justify-center rounded bg-builder-accent/30 font-medium text-builder-black"
			>
				Img
			</div>
		{/if}
	</div>
{/snippet}
