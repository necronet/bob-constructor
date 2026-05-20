import type { Snippet } from 'svelte';
import type { ComponentOptionItem, ComponentType } from '$lib/components/types';

import { renderInEditor as renderButtonInEditor } from '$lib/components/base/Button.svelte';
import { renderInEditor as renderImageInEditor } from '$lib/components/base/Image.svelte';
import { renderInEditor as renderTextBlockInEditor } from '$lib/components/base/TextBlock.svelte';

export type BuilderBlock = {
	id: string;
	type: ComponentType;
	component: string;
	props: Record<string, unknown>;
};

export type BlockDefinition = {
	component: string;
	renderInEditor: Snippet;
	toObject: (item: ComponentOptionItem) => BuilderBlock;
};

export const blocks: Record<ComponentType, BlockDefinition> = {
	textBlock: {
		component: 'TextBlock',
		renderInEditor: renderTextBlockInEditor,
		toObject: (item) => ({
			id: item.id,
			type: item.type,
			component: 'TextBlock',
			props: {
				text: 'Lorem ipsum dolor sit amet'
			}
		})
	},

	image: {
		component: 'Image',
		renderInEditor: renderImageInEditor,
		toObject: (item) => ({
			id: item.id,
			type: item.type,
			component: 'Image',
			props: {
				src: null,
				alt: ''
			}
		})
	},

	button: {
		component: 'Button',
		renderInEditor: renderButtonInEditor,
		toObject: (item) => ({
			id: item.id,
			type: item.type,
			component: 'Button',
			props: {
				label: 'Button',
				href: '#'
			}
		})
	}
};
