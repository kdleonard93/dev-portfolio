<script>
	export let y = 0;
	let tabs = [
		{ name: 'Projects', link: 'https://github.com/kdleonard93?tab=repositories' },
		{ name: 'About', link: '#about' },
		{ name: 'Blog', link: 'https://blacknerd.dev/' }
	];
</script>

<header
	class={'sticky z-[10] w-full top-0 duration-200 px-6 flex items-center justify-between ' +
		(y > 0
			? 'py-4 bg-secondary-400 border border-slate-900'
			: 'py-6 bg-transparent border-transparent')}
>
	<h1 class="font-medium">
		<b class="font-bold- poppins">Kyle</b> Leonard
	</h1>
	<div class="sm:flex items-center gap-4 hidden">
		{#each tabs as tab, index}
			{#if tab.name === 'Blog'}
				<a href={tab.link} target="_blank" class="duration-200 hover:text-primary-400">
					<p>{tab.name}</p>
				</a>
			{:else}
				<a href={tab.link} class="duration-200 hover:text-primary-400">
					<p>{tab.name}</p>
				</a>
			{/if}
		{/each}
	</div>
	<a
		href="https://www.linkedin.com/in/kyle-leonard93/"
		target="_blank"
		class="relative overflow-hidden px-5 py-2 group rounded-full bg-primary-500"
	>
		<div
			class="absolute top-0 right-full w-full h-full bg-secondary-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
		></div>
		<h4 class="relative z-9">Reach out!</h4>
	</a>
</header>
