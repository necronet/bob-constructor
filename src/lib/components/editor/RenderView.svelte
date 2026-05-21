<script lang="ts">
	import { editorRenderers } from '$lib/components/editor/renderers.svelte';
	import type { DndEvent } from 'svelte-dnd-action';
	import type { ComponentOptionItem, ComponentType } from '$lib/components/types';
	import { dndzone } from 'svelte-dnd-action';
	import { SvelteMap } from 'svelte/reactivity';

	type Props = {
		renderedItems: ComponentOptionItem[];
		selectedItem: ComponentOptionItem | null;
	};

	let { renderedItems = $bindable([]), selectedItem = $bindable(null) }: Props = $props();
	let nextInstanceId = 1;
	let pendingInstanceIds = new SvelteMap<string, string>();

	function getInstanceId(sourceId: string) {
		const pendingId = pendingInstanceIds.get(sourceId);

		if (pendingId) {
			return pendingId;
		}

		const nextId = `render-item-${nextInstanceId++}`;
		pendingInstanceIds.set(sourceId, nextId);

		return nextId;
	}

	function normalizeItems(items: ComponentOptionItem[]) {
		return items.map((item): ComponentOptionItem => {
			if (!item.id.startsWith('component-option-')) {
				return {
					...item
				};
			}

			if (item.type === 'textBlock') {
				return {
					...item,
					id: getInstanceId(item.id),
					attributes: {
						value: item.attributes.value
					}
				};
			}

			if (item.type === 'image') {
				return {
					...item,
					id: getInstanceId(item.id),
					attributes: {
						src: item.attributes.src
					}
				};
			}

			return {
				...item,
				id: getInstanceId(item.id),
				attributes: {}
			};
		});
	}

	function handleConsider(event: CustomEvent<DndEvent<ComponentOptionItem>>) {
		renderedItems = normalizeItems(event.detail.items);
	}

	function handleFinalize(event: CustomEvent<DndEvent<ComponentOptionItem>>) {
		renderedItems = normalizeItems(event.detail.items);
		selectedItem = renderedItems.find((item) => item.id === selectedItem?.id) ?? null;
		pendingInstanceIds = new SvelteMap();
	}

	function renderInEditor(type: ComponentType) {
		return editorRenderers[type];
	}

	function selectItem(item: ComponentOptionItem) {
		selectedItem = item;
	}
</script>

<div
	class="min-h-[calc(100vh-8.5rem)] rounded-md border border-builder-primary/20 bg-white p-8 shadow-sm"
>
	<div
		class="relative min-h-90 rounded-md border border-dashed border-builder-primary/30 bg-builder-primary/5 p-4"
	>
		<div
			class="min-h-82 space-y-3"
			use:dndzone={{
				items: renderedItems,
				type: 'component-option',
				flipDurationMs: 150,
				dropTargetClasses: ['bg-white']
			}}
			onconsider={handleConsider}
			onfinalize={handleFinalize}
		>
			{#each renderedItems as item (item.id)}
				{@const editorRenderer = renderInEditor(item.type)}
				<button
					class={[
						'w-full cursor-pointer rounded-md border bg-white p-4 text-left shadow-sm transition active:cursor-grabbing',
						selectedItem?.id === item.id
							? 'border-builder-primary ring-2 ring-builder-primary/20'
							: 'border-builder-primary/20 hover:border-builder-primary/40'
					]}
					type="button"
					onclick={() => selectItem(item)}
				>
					{@render editorRenderer(item)}
				</button>
			{/each}
		</div>

		{#if renderedItems.length === 0}
			<p
				class="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium text-builder-primary"
			>
				Drop components here
			</p>
		{/if}
	</div>
</div>
