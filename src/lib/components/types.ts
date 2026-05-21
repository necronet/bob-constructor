import type { Component } from 'svelte';

export type ComponentType = 'textBlock' | 'image' | 'button';

export type ComponentAttributesByType = {
	textBlock: {
		value: string;
	};
	image: {
		src: string;
	};
	button: Record<string, never>;
};

export type ComponentAttributes = ComponentAttributesByType[ComponentType];

type ComponentOptionItemBase<TType extends ComponentType> = {
	id: string;
	type: TType;
	label: string;
	component: Component;
};

export type TextBlockComponentOptionItem = ComponentOptionItemBase<'textBlock'> & {
	attributes: ComponentAttributesByType['textBlock'];
};

export type ImageComponentOptionItem = ComponentOptionItemBase<'image'> & {
	attributes: ComponentAttributesByType['image'];
};

export type ButtonComponentOptionItem = ComponentOptionItemBase<'button'> & {
	attributes: ComponentAttributesByType['button'];
};

/* Identify the component to be display in the left side of the builder */
export type ComponentOptionItem =
	| TextBlockComponentOptionItem
	| ImageComponentOptionItem
	| ButtonComponentOptionItem;
