<script lang="ts">
	import Button from '$lib/components/base/Button.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import TextBlock from '$lib/components/base/TextBlock.svelte';
	import PagesComponent from '$lib/components/PagesComponent.svelte';
	import Section from '$lib/components/Section.svelte';
	import SettingsComponent from '$lib/components/SettingsComponent.svelte';
</script>

<svelte:head>
	<title>Bob Constructor</title>
</svelte:head>

<main class="min-h-screen bg-neutral-100 text-neutral-950">
	<div class="grid min-h-screen grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
		<section class="border-b border-neutral-200 bg-white p-5 lg:border-r lg:border-b-0">
			<div class="mb-5">
				<p class="text-sm font-medium text-neutral-500">Builder</p>
				<h1 class="text-2xl font-semibold">Components</h1>
			</div>

			<div class="space-y-6">
				<Section name="Global">
					<PagesComponent />
					<SettingsComponent />
				</Section>

				<Section name="Components">
					<TextBlock />
					<Image />
					<Button />
				</Section>
			</div>
		</section>

		<section class="p-5">
			<div class="mb-5 flex items-center justify-between gap-4">
				<div>
					<p class="text-sm font-medium text-neutral-500">Preview</p>
					<h2 class="text-2xl font-semibold">Rendered page</h2>
				</div>
			</div>

			<div
				class="min-h-[calc(100vh-8.5rem)] rounded-md border border-neutral-200 bg-white p-8 shadow-sm"
			>
				<div
					class="flex min-h-[360px] items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 text-sm font-medium text-neutral-500"
				>
					Page result will render here
				</div>
			</div>
		</section>
	</div>
</main>
