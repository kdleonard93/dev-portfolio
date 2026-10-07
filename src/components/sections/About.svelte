<script lang="ts">
	import { Check, X } from 'lucide-svelte';
	import Container from '../ui/Container.svelte';
	import Section from '../ui/Section.svelte';
	import { aboutHeader, aboutBlocks, comparison } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';

	$: meIndex = comparison.columns.length - 1;
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
						<p class="mt-3 leading-relaxed text-muted">{block.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16" use:reveal>
			<h3 class="text-2xl font-semibold tracking-tight">{aboutHeader.tableTitle}</h3>
			<div class="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface shadow-card">
				<table class="w-full min-w-[540px] border-collapse text-sm">
					<thead>
						<tr class="border-b border-border">
							<th class="sticky left-0 z-10 bg-surface p-4"></th>
							{#each comparison.columns as column, i}
								<th
									class="whitespace-nowrap p-4 text-center font-semibold {i === meIndex
										? 'bg-accent/10 text-ink'
										: 'text-muted'}">{column}</th
								>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each comparison.rows as row}
							<tr class="border-b border-border last:border-0">
								<th
									scope="row"
									class="sticky left-0 z-10 whitespace-nowrap bg-surface p-4 text-left font-medium text-ink"
								>
									{row.label}
								</th>
								{#each row.values as value, i}
									<td class="p-4 text-center {i === meIndex ? 'bg-accent/10' : ''}">
										{#if value}
											<Check class="mx-auto h-5 w-5 text-success" aria-label="Yes" />
										{:else}
											<X class="mx-auto h-5 w-5 text-error" aria-label="No" />
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<p class="mt-3 text-xs italic text-muted sm:hidden">Scroll to see more &rarr;</p>
		</div>
	</Container>
</Section>
