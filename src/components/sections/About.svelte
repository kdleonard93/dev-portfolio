<script lang="ts">
	import Container from '../ui/Container.svelte';
	import Section from '../ui/Section.svelte';
	import { aboutHeader, aboutBlocks, type RichText } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';

	function parts(value: string | RichText): RichText {
		return typeof value === 'string' ? [value] : value;
	}
</script>

<Section id="about" className="border-t border-border">
	<Container>
		<div use:reveal>
			<p class="text-xs font-medium uppercase tracking-[0.2em] text-muted">{aboutHeader.kicker}</p>
			<h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{aboutHeader.title}</h2>
		</div>

		<p class="mt-10 font-mono text-sm text-accent">// {aboutHeader.lead}</p>

		<div class="mt-6 flex max-w-3xl flex-col gap-12">
			{#each aboutBlocks as block, i}
				<div class="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-8" use:reveal={{ delay: i * 80 }}>
					<span class="font-mono text-2xl font-semibold text-accent sm:text-3xl">0{i + 1}</span>
					<div>
						<h3 class="text-xl font-semibold tracking-tight sm:text-2xl">{block.name}</h3>
						<p class="mt-3 leading-relaxed text-muted">
							{#each parts(block.description) as part}{#if typeof part === 'string'}{part}{:else}<strong
										class="font-semibold text-ink">{part.strong}</strong
									>{/if}{/each}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>
