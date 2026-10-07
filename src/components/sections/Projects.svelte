<script lang="ts">
	import type { ComponentType } from 'svelte';
	import {
		ArrowUpRight,
		ArrowRight,
		Bot,
		PawPrint,
		CircleDollarSign,
		Mail,
		Clapperboard,
		Gamepad2,
		Frame
	} from 'lucide-svelte';
	import Container from '../ui/Container.svelte';
	import Section from '../ui/Section.svelte';
	import Button from '../ui/Button.svelte';
	import { projects, projectsHeader, type ProjectIcon } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';

	const icons: Record<ProjectIcon, ComponentType> = {
		art: Frame,
		bot: Bot,
		paw: PawPrint,
		ledger: CircleDollarSign,
		mail: Mail,
		film: Clapperboard,
		game: Gamepad2
	};
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

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				{@const Icon = icons[project.icon]}
				<a
					href={project.url}
					target={project.url ? '_blank' : undefined}
					rel={project.url ? 'noopener noreferrer' : undefined}
					class="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-card-hover"
					use:reveal={{ delay: i * 60 }}
				>
					<div class="flex items-start justify-between">
						<span
							class="grid h-11 w-11 place-items-center rounded-xl border border-border bg-canvas text-ink transition-colors duration-300 group-hover:border-accent group-hover:text-accent"
						>
							<Icon class="h-5 w-5" />
						</span>
						<span class="font-mono text-xs text-muted">#{project.id}</span>
					</div>
					<h3 class="text-lg font-semibold tracking-tight">{project.name}</h3>
					<p class="text-sm leading-relaxed text-muted">{project.description}</p>
					{#if project.note}
						<p class="text-xs italic text-muted/80">{project.note}</p>
					{/if}
					<span
						class="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-ink transition-colors group-hover:text-accent"
					>
						Visit
						<ArrowUpRight
							class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</span>
				</a>
			{/each}
		</div>

		<div class="mt-10 flex justify-center" use:reveal>
			<Button href={projectsHeader.viewAll.href} external size="lg">
				{projectsHeader.viewAll.label}
				<ArrowRight class="h-4 w-4" />
			</Button>
		</div>
	</Container>
</Section>
