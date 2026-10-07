<script lang="ts">
	import Hero from '../components/sections/Hero.svelte';
	import Projects from '../components/sections/Projects.svelte';
	import Skills from '../components/sections/Skills.svelte';
	import About from '../components/sections/About.svelte';

	// The contact form and its superforms + nodemailer server action in
	// +page.server.ts are intentionally left disabled, matching the previous site.
</script>

<Hero />
<Projects />
<Skills />
<About />
