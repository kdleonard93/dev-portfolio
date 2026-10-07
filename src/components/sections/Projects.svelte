<script lang="ts">
	import { ArrowUpRight, ArrowRight } from 'lucide-svelte';
	import Container from '../ui/Container.svelte';
	import Section from '../ui/Section.svelte';
	import Button from '../ui/Button.svelte';
	import { projectsHeader } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';
	import ProjectCards from './ProjectCards.svelte';
</script>

<Section id="projects" className="pt-4 sm:pt-8">
	<Container>
		<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
			<div class="max-w-2xl" use:reveal>
				<p class="text-xs font-medium uppercase tracking-[0.2em] text-muted">
					{projectsHeader.kicker}
				</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
					{projectsHeader.title}
				</h2>
				<p class="mt-3 text-muted">{projectsHeader.sub}</p>
			</div>
			<Button href={projectsHeader.littlelink.href} external variant="secondary" className="w-fit">
				{projectsHeader.littlelink.label}
				<ArrowUpRight class="h-4 w-4" />
			</Button>
		</div>

		<ProjectCards />

		<div class="mt-10 flex justify-center" use:reveal>
			<Button href={projectsHeader.viewAll.href} external size="lg">
				{projectsHeader.viewAll.label}
				<ArrowRight class="h-4 w-4" />
			</Button>
		</div>
	</Container>
</Section>
