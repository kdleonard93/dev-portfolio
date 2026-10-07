<script lang="ts">
	import '../app.css';
	import Header from '../components/sections/Header.svelte';
	import Footer from '../components/sections/Footer.svelte';
	import ScrollTop from '../components/ui/ScrollTop.svelte';
</script>

<svelte:head>
	<title>Kyle Leonard | Software Engineer</title>
	<meta
		name="description"
		content="Kyle Leonard, Software Engineer. Projects, writing, and the tools I build with."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>

<ScrollTop />
