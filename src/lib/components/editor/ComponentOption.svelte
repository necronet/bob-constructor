<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<button
	class="flex w-full items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm font-medium transition hover:border-neutral-300 hover:bg-white"
	type="button"
>
	<span>
		{@render children()}
	</span>
	<span class="text-neutral-400">+</span>
</button>
