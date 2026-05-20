<script lang="ts">
	import type { DndEvent } from 'svelte-dnd-action';
	import type { ComponentOptionItem } from '$lib/components/types';
	import { dndzone } from 'svelte-dnd-action';
	import Button from '$lib/components/base/Button.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import TextBlock from '$lib/components/base/TextBlock.svelte';
	import PagesComponent from '$lib/components/PagesComponent.svelte';
	import Section from '$lib/components/Section.svelte';
	import SettingsComponent from '$lib/components/SettingsComponent.svelte';
	import RenderView from '$lib/components/editor/RenderView.svelte';
	import PropertyView from '$lib/components/editor/PropertyView.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppSectionTitle from '$lib/components/AppSectionTitle.svelte';

	const defaultComponents: ComponentOptionItem[] = [
		{
			id: 'component-option-text-block',
			type: 'textBlock',
			label: 'Text block',
			component: TextBlock
		},
		{ id: 'component-option-image', type: 'image', label: 'Image', component: Image },
		{ id: 'component-option-button', type: 'button', label: 'Button', component: Button }
	];

	let paletteItems = $state<ComponentOptionItem[]>(defaultComponents);
	let renderedItems = $state<ComponentOptionItem[]>([]);
	let selectedItem = $state<ComponentOptionItem | null>(null);

	function handlePaletteConsider(event: CustomEvent<DndEvent<ComponentOptionItem>>) {
		paletteItems = event.detail.items;
	}

	function handlePaletteFinalize() {
		// Making the pallete items to be render the defaultComponents
		paletteItems = defaultComponents;
	}
</script>

<svelte:head>
	<title>Bob Constructor</title>
</svelte:head>

<AppHeader title="Bob - Website Builder" {renderedItems} />

<main class="min-h-screen bg-builder-primary/5 text-builder-black">
	<div class="grid min-h-screen grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)_320px]">
		<section class="border-b border-builder-primary/20 bg-white p-5 lg:border-r lg:border-b-0">
			<div class="mb-5">
				<AppSectionTitle title="Builder" subtitle="Components" />
			</div>

			<div class="space-y-6">
				<Section name="Global">
					<PagesComponent />
					<SettingsComponent />
				</Section>

				<Section name="Components">
					<div
						class="space-y-3"
						use:dndzone={{
							items: paletteItems,
							type: 'component-option',
							flipDurationMs: 150,
							dropFromOthersDisabled: true
						}}
						onconsider={handlePaletteConsider}
						onfinalize={handlePaletteFinalize}
					>
						{#each paletteItems as item (item.id)}
							{@const ComponentOption = item.component}
							<ComponentOption />
						{/each}
					</div>
				</Section>
			</div>
		</section>

		<section class="p-5">
			<div class="mb-5 flex items-center justify-between gap-4">
				<AppSectionTitle title="Preview" subtitle="Rendered page" />
			</div>

			<RenderView bind:renderedItems bind:selectedItem />
		</section>

		<section class="border-t border-builder-primary/20 bg-white p-5 lg:border-t-0 lg:border-l">
			<div class="mb-5">
				<AppSectionTitle title="Editor" subtitle="Properties" />
			</div>

			<PropertyView {selectedItem} />
		</section>
	</div>
</main>
