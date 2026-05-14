<script lang="ts">
	const components = ['Header', 'Text block', 'Image', 'Button'];
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

			<div class="space-y-3">
				{#each components as component}
					<button
						class="flex w-full items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm font-medium transition hover:border-neutral-300 hover:bg-white"
						type="button"
					>
						<span>{component}</span>
						<span class="text-neutral-400">+</span>
					</button>
				{/each}
			</div>
		</section>

		<section class="p-5">
			<div class="mb-5 flex items-center justify-between gap-4">
				<div>
					<p class="text-sm font-medium text-neutral-500">Preview</p>
					<h2 class="text-2xl font-semibold">Rendered page</h2>
				</div>
			</div>

			<div class="min-h-[calc(100vh-8.5rem)] rounded-md border border-neutral-200 bg-white p-8 shadow-sm">
				<div class="flex min-h-[360px] items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 text-sm font-medium text-neutral-500">
					Page result will render here
				</div>
			</div>
		</section>
	</div>
</main>
