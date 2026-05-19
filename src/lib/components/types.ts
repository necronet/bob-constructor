import type { Component } from 'svelte';

export type ComponentType = 'textBlock' | 'image' | 'button';

/* Identify the component to be display in the left side of the builder */
export type ComponentOptionItem = {
	id: string;
	type: ComponentType;
	label: string;
	component: Component;
};
