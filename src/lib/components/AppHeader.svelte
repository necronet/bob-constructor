<script lang="ts">
	import type { ComponentOptionItem, ComponentType } from '$lib/components/types';

	type Props = {
		title: string;
		renderedItems: ComponentOptionItem[];
	};

	type SavedComponent = {
		component: string;
		value: ComponentType;
	};

	type SavedPage = {
		components: SavedComponent[];
	};

	const componentNames: Record<ComponentType, string> = {
		textBlock: 'TextBlock',
		image: 'Image',
		button: 'Button'
	};

	let { title, renderedItems }: Props = $props();

	function createSavePayload(): SavedPage {
		return {
			components: renderedItems.map((item) => ({
				component: componentNames[item.type],
				value: item.type
			}))
		};
	}

	function onSave() {
		const payload = createSavePayload();
		console.log(JSON.stringify(payload, null, 2));
	}
</script>

<header>
	<nav
		class="border-b border-builder-primary/20 bg-builder-black px-4 py-2.5 text-builder-white lg:px-6"
	>
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
			<a href="https://flowbite.com" class="flex items-center">
				<span class="self-center text-xl font-semibold whitespace-nowrap">{title}</span>
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
