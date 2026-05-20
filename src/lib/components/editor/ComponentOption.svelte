<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<button
	class="flex w-full cursor-grab items-center justify-between rounded-md border border-builder-primary/20 bg-builder-primary/5 px-4 py-3 text-left text-sm font-medium transition active:cursor-grabbing hover:border-builder-primary/40 hover:bg-white"
	type="button"
>
	<span>
		{@render children()}
	</span>
</button>
