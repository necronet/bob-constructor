<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		name: string;
		children: Snippet;
	};

	let { name, children }: Props = $props();
	let isCollapsed = $state(false);
</script>

<section>
	<button
		class="mb-3 flex w-full items-center justify-between text-left text-xs font-semibold tracking-wide text-neutral-500 uppercase transition hover:text-neutral-800"
		type="button"
		aria-expanded={!isCollapsed}
		onclick={() => (isCollapsed = !isCollapsed)}
	>
		<span>{name}</span>
		<span class="text-sm leading-none text-neutral-400">{isCollapsed ? '+' : '-'}</span>
	</button>

	{#if !isCollapsed}
		<div class="space-y-3">
			{@render children()}
		</div>
	{/if}
</section>
