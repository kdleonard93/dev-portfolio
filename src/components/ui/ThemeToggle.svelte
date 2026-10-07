<script lang="ts">
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';
	import { getCurrentTheme, toggleTheme, type Theme } from '$lib/theme';

	let theme: Theme = 'light';

	onMount(() => {
		theme = getCurrentTheme();
	});

	function handleClick() {
		theme = toggleTheme();
	}
</script>

<button
	on:click={handleClick}
	aria-label="Toggle color theme"
	class="grid h-10 w-10 place-items-center rounded-full border border-border text-ink transition duration-200 hover:border-ink hover:bg-surface"
>
	{#if theme === 'dark'}
		<Sun class="h-5 w-5" />
	{:else}
		<Moon class="h-5 w-5" />
	{/if}
</button>
