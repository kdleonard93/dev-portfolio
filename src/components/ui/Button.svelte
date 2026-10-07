<script lang="ts">
	export let href: string | undefined = undefined;
	export let external = false;
	export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let className = '';
	export let ariaLabel: string | undefined = undefined;
	export let type: 'button' | 'submit' = 'button';

	const base =
		'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200';

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-5 py-2.5 text-sm sm:text-base',
		lg: 'px-6 py-3 text-base'
	};

	const variants = {
		primary: 'bg-accent text-accent-contrast hover:brightness-110',
		secondary: 'border border-border text-ink hover:border-ink hover:bg-surface',
		ghost: 'text-ink hover:text-accent'
	};

	$: classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
</script>

{#if href}
	<a
		{href}
		class={classes}
		aria-label={ariaLabel}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		<slot />
	</a>
{:else}
	<button {type} class={classes} aria-label={ariaLabel}>
		<slot />
	</button>
{/if}
