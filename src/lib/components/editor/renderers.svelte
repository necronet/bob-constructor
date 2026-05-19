<script module lang="ts">
	import type { Snippet } from 'svelte';
	import type { ComponentType } from '$lib/components/types';
	import { renderInEditor as renderButtonInEditor } from '$lib/components/base/Button.svelte';
	import { renderInEditor as renderImageInEditor } from '$lib/components/base/Image.svelte';
	import { renderInEditor as renderTextBlockInEditor } from '$lib/components/base/TextBlock.svelte';

	/* Convinient function to transform a name to a component */
	export const editorRenderers: Record<ComponentType, Snippet> = {
		textBlock: renderTextBlockInEditor,
		image: renderImageInEditor,
		button: renderButtonInEditor
	};
</script>
