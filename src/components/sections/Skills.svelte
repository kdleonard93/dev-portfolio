<script lang="ts">
	import Container from '../ui/Container.svelte';
	import Section from '../ui/Section.svelte';
	import Card from '../ui/Card.svelte';
	import Badge from '../ui/Badge.svelte';
	import { skills, skillGroups } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';

	interface Segment {
		label: string;
		color: string;
		percent: number;
		start: number;
		end: number;
	}

	function buildSegments(): Segment[] {
		const total = skills.reduce((sum, skill) => sum + skill.weight, 0);
		let cursor = 0;
		return skills.map((skill) => {
			const percent = (skill.weight / total) * 100;
			const start = cursor;
			cursor += percent;
			return { label: skill.label, color: skill.color, percent, start, end: cursor };
		});
	}

	const segments = buildSegments();

	$: gradient = `conic-gradient(${segments
		.map((segment) => `${segment.color} ${segment.start}% ${segment.end}%`)
		.join(', ')})`;
</script>

<Section className="pt-0">
	<Container>
		<div use:reveal>
			<Card className="grid items-center gap-10 sm:grid-cols-[minmax(0,240px)_1fr] sm:p-10">
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
						Where most of my day-to-day work lives. The ring is a rough emphasis breakdown, not a
						proficiency score.
					</p>
					<ul class="mt-6 grid gap-3">
						{#each segments as segment}
							<li class="flex items-center gap-2.5">
								<span
									class="h-3 w-3 shrink-0 rounded-full border border-border"
									style="background-color: {segment.color}"
								></span>
								<span class="text-sm text-ink">{segment.label}</span>
								<span class="ml-auto font-mono text-xs text-muted"
									>{Math.round(segment.percent)}%</span
								>
							</li>
						{/each}
					</ul>
				</div>
			</Card>
		</div>

		<div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" use:reveal>
			{#each skillGroups as group}
				<div>
					<h4 class="font-mono text-xs uppercase tracking-[0.2em] text-muted">{group.label}</h4>
					<ul class="mt-4 flex flex-wrap gap-2">
						{#each group.skills as skill}
							<li><Badge>{skill}</Badge></li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</Container>
</Section>
