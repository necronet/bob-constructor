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
		class="mb-3 flex w-full items-center justify-between text-left text-xs font-semibold tracking-wide text-builder-primary uppercase transition hover:text-builder-secondary"
		type="button"
		aria-expanded={!isCollapsed}
		onclick={() => (isCollapsed = !isCollapsed)}
	>
		<span>{name}</span>
		<span class="text-sm leading-none text-builder-secondary">{isCollapsed ? '+' : '-'}</span>
	</button>

	{#if !isCollapsed}
		<div class="space-y-3">
			{@render children()}
		</div>
	{/if}
</section>
