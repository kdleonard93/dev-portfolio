<script lang="ts">
	import Container from '../ui/Container.svelte';
	import BrandIcon from '../ui/BrandIcon.svelte';
	import { footer, site, socials } from '$lib/data/portfolio';

	$: year = new Date().getFullYear();
</script>

<footer class="border-t border-border bg-surface">
	<Container className="grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
		<div>
			<a href="#top" class="flex items-center gap-2.5">
				<img
					src="/images/DD_Icon.jpg"
					alt=""
					class="h-8 w-8 rounded-lg border border-border object-cover"
				/>
				<span class="text-base font-semibold tracking-tight">
					Kyle <span class="text-muted">Leonard</span>
				</span>
			</a>
			<p class="mt-4 max-w-xs text-sm text-muted">{footer.tagline}</p>
			<a
				href="#top"
				class="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition hover:border-ink"
			>
				{footer.connectLabel}
			</a>
		</div>

		<div>
			<h3 class="font-mono text-xs uppercase tracking-[0.2em] text-muted">Get in touch</h3>
			<a
				href="mailto:{site.email}"
				class="mt-4 inline-block font-medium text-ink transition-colors hover:text-accent"
			>
				{site.email}
			</a>
		</div>

		<div>
			<h3 class="font-mono text-xs uppercase tracking-[0.2em] text-muted">Elsewhere</h3>
			<ul class="mt-4 flex flex-wrap gap-2">
				{#each socials as social}
					<li>
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.name}
							title={social.name}
							class="grid h-11 w-11 place-items-center rounded-full border border-border text-ink transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
						>
							<BrandIcon name={social.icon} />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</Container>

	<Container
		className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
	>
		<p>© {year} Kyle Leonard</p>
		<p class="font-mono">Built with SvelteKit + Tailwind</p>
	</Container>
</footer>
