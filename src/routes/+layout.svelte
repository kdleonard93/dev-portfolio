<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

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
			class="ml-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 sm:px-5 py-4 sm:py-5 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-110 transition-all duration-300 cursor-pointer aspect-square grid place-items-center group"
		>
			<i class="fa-solid fa-arrow-up group-hover:-translate-y-1 transition-transform duration-300" />
		</button>
	</div>
	<Header {y} />
	<slot />
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
