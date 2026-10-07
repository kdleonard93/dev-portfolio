<script lang="ts">
	import { Menu, X, ArrowRight } from 'lucide-svelte';
	import Container from '../ui/Container.svelte';
	import Button from '../ui/Button.svelte';
	import ThemeToggle from '../ui/ThemeToggle.svelte';
	import { nav, site } from '$lib/data/portfolio';

	let y = 0;
	let open = false;

	$: scrolled = y > 8;

	function close() {
		open = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') open = false;
	}
</script>

<svelte:window bind:scrollY={y} on:keydown={onKeydown} />

<header
	class="sticky top-0 z-50 transition-all duration-300 {scrolled
		? 'border-b border-border bg-canvas/85 backdrop-blur-md'
		: 'border-b border-transparent'}"
>
	<Container className="flex h-16 items-center justify-between gap-4">
		<a href="#top" class="flex items-center gap-2.5" on:click={close}>
			<span class="text-base font-semibold tracking-tight">
				-_-
			</span>
		</a>

		<nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
			{#each nav as link}
				<a
					href={link.href}
					target={link.external ? '_blank' : undefined}
					rel={link.external ? 'noopener noreferrer' : undefined}
					class="link-underline text-sm font-medium text-muted transition-colors hover:text-ink"
				>
					{link.name}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-2.5 md:flex">
			<ThemeToggle />
			<Button href={site.linkedin} external size="sm">
				Reach out!
				<ArrowRight class="h-4 w-4" />
			</Button>
		</div>

		<div class="flex items-center gap-2 md:hidden">
			<ThemeToggle />
			<button
				on:click={() => (open = !open)}
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				aria-controls="mobile-menu"
				class="grid h-10 w-10 place-items-center rounded-full border border-border text-ink"
			>
				{#if open}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</Container>

	{#if open}
		<div id="mobile-menu" class="border-t border-border bg-canvas md:hidden">
			<Container className="flex flex-col gap-1 py-4">
				{#each nav as link}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						class="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-surface"
						on:click={close}
					>
						{link.name}
					</a>
				{/each}
				<Button href={site.linkedin} external className="mt-2 w-full">
					Reach out!
					<ArrowRight class="h-4 w-4" />
				</Button>
			</Container>
		</div>
	{/if}
</header>
