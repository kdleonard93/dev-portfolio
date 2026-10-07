<script lang="ts">
	import Container from '../ui/Container.svelte';
	import Section from '../ui/Section.svelte';
	import Card from '../ui/Card.svelte';
	import { skills } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';

	$: gradient = `conic-gradient(${skills
		.map((skill) => `${skill.color} ${skill.start}% ${skill.end}%`)
		.join(', ')})`;
</script>

<Section className="pt-0">
	<Container>
		<div use:reveal>
			<Card className="grid items-center gap-10 sm:grid-cols-[minmax(0,220px)_1fr] sm:p-10">
				<div
					class="relative mx-auto grid h-52 w-52 place-items-center rounded-full"
					style="background: {gradient}"
				>
					<div
						class="grid h-32 w-32 place-items-center rounded-full border border-border bg-canvas"
					>
						<span class="text-center font-mono text-xs leading-tight text-muted"
							>tech<br />stack</span
						>
					</div>
				</div>

				<div>
					<h3 class="text-xl font-semibold tracking-tight sm:text-2xl">Skills Overview</h3>
					<p class="mt-2 max-w-md text-sm text-muted">
						A rough breakdown of where most of my day-to-day work lives.
					</p>
					<ul class="mt-6 grid gap-3 sm:grid-cols-2">
						{#each skills as stop}
							<li class="flex items-center gap-2.5">
								<span
									class="h-3 w-3 shrink-0 rounded-full border border-border"
									style="background-color: {stop.color}"
								></span>
								<span class="text-sm text-ink">{stop.label}</span>
								<span class="ml-auto font-mono text-xs text-muted">{stop.end - stop.start}%</span>
							</li>
						{/each}
					</ul>
				</div>
			</Card>
		</div>
	</Container>
</Section>
