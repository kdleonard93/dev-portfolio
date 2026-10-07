<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Container from '../ui/Container.svelte';
	import Button from '../ui/Button.svelte';
	import Badge from '../ui/Badge.svelte';
	import { hero, site } from '$lib/data/portfolio';
</script>

<section id="top" class="relative overflow-hidden pb-8 pt-12 sm:pb-16 sm:pt-20">
	<div
		class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
	></div>

	<Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="flex flex-col items-start gap-6">
			<Badge className="w-fit">
				<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
				{site.role}
			</Badge>

			<h1 class="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
				Kyle
				<span class="text-gradient-brand">Leonard</span>
			</h1>

			<!-- <p class="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
				{hero.introBefore}<span class="font-semibold text-ink">{hero.introHighlight}</span
				>{hero.introAfter}
			</p> -->

			<div class="flex flex-wrap gap-3">
				<Button href={site.linkedin} external size="lg">
					Reach out
					<ArrowRight class="h-4 w-4" />
				</Button>
				<Button href="#projects" variant="secondary" size="lg">View projects</Button>
			</div>
		</div>

		<div class="overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-card">
			<div class="flex items-center gap-1.5 border-b border-border px-4 py-3">
				<span class="h-3 w-3 rounded-full border border-border"></span>
				<span class="h-3 w-3 rounded-full border border-border"></span>
				<span class="h-3 w-3 rounded-full border border-border"></span>
				<span class="ml-3 font-mono text-xs text-muted">{hero.terminal.title}</span>
			</div>
			<div class="space-y-3 p-5 font-mono text-sm leading-relaxed">
				{#each hero.terminal.lines as line}
					<div>
						<p class="text-muted"><span class="text-tertiary">$</span> {line.prompt}</p>
						<p class="whitespace-pre-line text-ink">{line.output}</p>
					</div>
				{/each}
				<p class="text-muted">
					<span class="text-tertiary">$</span> <span class="animate-blink">&#9647;</span>
				</p>
			</div>
		</div>
	</Container>
</section>
