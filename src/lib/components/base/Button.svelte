<script module lang="ts">
	import type { ComponentOptionItem } from '$lib/components/types';

	export { renderInEditor };
</script>

<script lang="ts">
	import ComponentOption from '$lib/components/editor/ComponentOption.svelte';
</script>

<ComponentOption>Button</ComponentOption>

{#snippet renderInEditor(item: ComponentOptionItem)}
	<button class="rounded-md bg-builder-primary px-4 py-2 text-sm font-medium text-builder-white" type="button">
		Button
	</button>
{/snippet}
