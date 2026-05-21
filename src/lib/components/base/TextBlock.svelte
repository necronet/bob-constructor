<script module lang="ts">
	import type { ComponentOptionItem } from '$lib/components/types';

	export { renderInEditor };
</script>

<script lang="ts">
	import ComponentOption from '$lib/components/editor/ComponentOption.svelte';
</script>

<ComponentOption>Text block</ComponentOption>

{#snippet renderInEditor(item: ComponentOptionItem)}
	<p class="text-sm leading-6 text-builder-black">
		{item.type === 'textBlock' ? item.attributes.value : ''}
	</p>
{/snippet}
