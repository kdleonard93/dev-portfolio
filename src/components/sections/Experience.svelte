<script lang="ts">
	import Container from '../ui/Container.svelte';
	import Section from '../ui/Section.svelte';
	import { experience } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';
</script>

<Section id="experience" className="border-t border-border">
	<Container>
		<div use:reveal>
			<p class="text-xs font-medium uppercase tracking-[0.2em] text-muted">Where I've worked</p>
			<h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
		</div>

		<ol class="mt-12 flex flex-col">
			{#each experience as job, i}
				<li
					class="grid gap-4 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[200px_1fr] sm:gap-10"
					use:reveal={{ delay: i * 60 }}
				>
					<div
						class="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:flex-col sm:items-start sm:gap-1"
					>
						<span class="font-mono text-xs text-muted">{job.period}</span>
						<span class="text-sm font-medium text-ink">{job.company}</span>
						<span class="text-xs text-muted">{job.location}</span>
					</div>

					<div>
						<h3 class="text-lg font-semibold tracking-tight sm:text-xl">{job.role}</h3>
						<ul class="mt-4 flex flex-col gap-3">
							{#each job.highlights as highlight}
								<li class="flex gap-3 text-sm leading-relaxed text-muted">
									<span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
									<span>{highlight}</span>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ol>
	</Container>
</Section>
