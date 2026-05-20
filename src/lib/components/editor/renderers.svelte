<script module lang="ts">
	import type { Snippet } from 'svelte';
	import type { ComponentType } from '$lib/components/types';
	import { blocks } from '$lib/builder/blocks';

	/* Convenient function to transform a component type to an editor renderer. */
	export const editorRenderers = Object.fromEntries(
		Object.entries(blocks).map(([type, definition]) => [type, definition.renderInEditor])
	) as Record<ComponentType, Snippet>;
</script>
