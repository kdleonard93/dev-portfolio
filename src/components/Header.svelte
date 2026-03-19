<script>
	export let y = 0;
	let tabs = [
		{ name: 'Projects', link: 'https://github.com/kdleonard93?tab=repositories' },
		{ name: 'About', link: '#about' },
		{ name: 'Blog', link: 'https://blacknerd.dev/' }
	];
</script>

<header
	class={'sticky z-[10] w-full top-0 duration-300 px-6 flex items-center justify-between transition-all ' +
		(y > 0
			? 'py-4 bg-surface-900/80 backdrop-blur-xl border-b border-primary-500/20 shadow-lg shadow-primary-500/10'
			: 'py-6 bg-transparent border-transparent')}
>
	<h1 class="font-medium text-lg">
		<b class="font-bold poppins bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Kyle</b> <span class="text-white">Leonard</span>
	</h1>
	<div class="sm:flex items-center gap-6 hidden">
		{#each tabs as tab, index}
			{#if tab.name === 'Blog'}
				<a href={tab.link} target="_blank" class="relative group duration-300 hover:text-primary-400 font-medium">
					<p>{tab.name}</p>
					<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300"></span>
				</a>
			{:else}
				<a href={tab.link} class="relative group duration-300 hover:text-primary-400 font-medium">
					<p>{tab.name}</p>
					<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-full transition-all duration-300"></span>
				</a>
			{/if}
		{/each}
	</div>
	<a
		href="https://www.linkedin.com/in/kyle-leonard93/"
		target="_blank"
		class="relative overflow-hidden px-6 py-2.5 group rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 font-semibold"
	>
		<div
			class="absolute inset-0 bg-gradient-to-r from-secondary-500 to-tertiary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
		></div>
		<h4 class="relative z-9 flex items-center gap-2">
			Reach out!
			<i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform duration-300 text-sm"></i>
		</h4>
	</a>
</header>
