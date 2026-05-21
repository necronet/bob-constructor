<script lang="ts">
	import type { ComponentOptionItem } from '$lib/components/types';
	import { serializeAsJson, toPageObject } from '$lib/builder/serializers';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		renderedItems: ComponentOptionItem[];
	};

	let { children, renderedItems }: Props = $props();

	function onSave() {
		const pageObject = toPageObject(renderedItems);
		const output = serializeAsJson(pageObject);

		console.log(output);
	}
</script>

<header>
	<nav
		class="border-b border-builder-primary/20 bg-builder-black px-4 py-2.5 text-builder-white lg:px-6"
	>
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
			<a href="https://flowbite.com" class="flex items-center">
				{@render children()}
			</a>
			<div class="flex items-center lg:order-2">
				<button
					class="rounded-md bg-builder-primary px-4 py-2 text-sm font-semibold text-builder-white transition hover:bg-builder-secondary"
					type="button"
					onclick={onSave}
				>
					Save
				</button>
			</div>
		</div>
	</nav>
</header>
