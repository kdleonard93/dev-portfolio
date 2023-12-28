<script lang="ts">
	import '../app.postcss';
	import '../app.css';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let y: any;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div class="container relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen">
	<div
		class={'fixed bottom-0 w-full duration-200 flex p-10 z-[10] ' +
			(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
	>
		<button
			on:click={goTop}
			class="ml-auto animate-pulse rounded-full bg-slate-900 text-primary-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
		>
			<i class="fa-solid fa-arrow-up" />
		</button>
	</div>
	<Header {y} {innerHeight} />
	<slot />
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
