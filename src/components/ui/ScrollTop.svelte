<script lang="ts">
	import { ArrowUp } from 'lucide-svelte';

	let y = 0;

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY={y} />

<button
	on:click={toTop}
	aria-label="Scroll to top"
	class="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-ink shadow-card-hover transition-all duration-300 hover:bg-accent hover:text-accent-contrast {y >
	400
		? 'translate-y-0 opacity-100'
		: 'pointer-events-none translate-y-4 opacity-0'}"
>
	<ArrowUp class="h-5 w-5" />
</button>
