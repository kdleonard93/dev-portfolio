<script lang="ts">
	import type { ComponentType } from 'svelte';
	import {
		ArrowUpRight,
		Bot,
		PawPrint,
		CircleDollarSign,
		Mail,
		Clapperboard,
		Gamepad2,
		Frame
	} from 'lucide-svelte';
	import { projects, type ProjectIcon } from '$lib/data/portfolio';
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

<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
	{#each projects as project, i}
		{@const Icon = icons[project.icon]}
		<svelte:element
			this={project.url ? 'a' : 'div'}
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
			{#if project.url}
				<span
					class="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-ink transition-colors group-hover:text-accent"
				>
					Visit
					<ArrowUpRight
						class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>
				</span>
			{/if}
		</svelte:element>
	{/each}
</div>
