import type { ComponentOptionItem } from '$lib/components/types';
import { blocks, type BuilderBlock } from '$lib/builder/blocks';

export type SavedPage = {
	version: 1;
	components: BuilderBlock[];
};

export function toPageObject(items: ComponentOptionItem[]): SavedPage {
	return {
		version: 1,
		components: items.map((item) => blocks[item.type].toObject(item))
	};
}

export function serializeAsJson(page: SavedPage): string {
	return JSON.stringify(page, null, 2);
}

export function serializeAsCompactJson(page: SavedPage): string {
	return JSON.stringify(page);
}
