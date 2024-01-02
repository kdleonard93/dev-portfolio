<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';

	function handleComplete() {
		window.open('https://github.com/kdleonard93?tab=repositories');
	}

	const steps = [
		{
			name: 'Pong Game',
			icon: 'fa-solid fa-table-tennis-paddle-ball',
			description: 'Try and get a high score in this all time classic!',
			url: 'https://github.com/kdleonard93/100-Days-Of-Code_Python/tree/main/day-22'
		},
		{
			name: 'Mail Merger',
			icon: 'fa-solid fa-envelope',
			description:
				'Mail Merger is a Python-based tool for bulk email customization, making personalized communication simple and efficient.',
			url: 'https://github.com/kdleonard93/100-Days-Of-Code_Python/tree/main/day-24'
		},
		{
			name: 'Leo Ledger',
			icon: 'fa-solid fa-sack-dollar',
			description:
				"Whether it's regular budget tracking, setting financial goals, forecasting expenses, or identifying savings opportunities, this tool aims to cover it all. (coming soon).",
			url: ''
		}
	];

	const benefits = [
		{
			metric: '10x',
			name: 'a music lover turned dev',
			description:
				"I got into development out of my love for music, when the tides started to turn during my journey as a Producer and Mix Engineer. I found it easier to work with the technical things of the post work and when it came to artists, it was hard to depend on the consistency of work. That led me to looking into making VSTs for music production but that soon turned into going down a rabbit hole with web development. That led me to online tutorials and projects before attending Lambda School (now Bloom Institute of Technology). From there, i entered my professional career and haven't looked back since."
		},
		{
			name: 'a developer for Cars Commerce',
			description:
				'As a developer at Cars Commerce, my work primarily involves PHP, JavaScript, HTML/CSS, and WordPress, complemented by projects using Svelte and Vue components. I am adept at managing tasks through Jira and using a variety of tools including Docker, AWS, and Postman.'
		},
		{
			name: 'an excellent communicator and constant learner',
			description:
				'I place great emphasis on transparent and effective communication, which I believe is crucial for building strong team relationships and enhancing productivity. I am committed to continual learning and staying updated with the latest technologies, with a keen interest in finance technology and exploring new frameworks like SvelteKit and languages like TypeScript.'
		}
	];
	export const Main = null;
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semi-bold text-4xl sm:text-5xl md:text-6xl">
				Hey! I'm <span class="poppins text-primary-400">Kyle</span> Leonard,
				<br />Software<span class="poppins text-primary-400">Engineer</span>.
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-primary-400">tech arsenal</span> includes Javascript/Typescript, Svelte
				+ Sveltekit, Node.js, Python + Flask, PHP, Wordpress, TailwindCSS + SkeletonUI, & MongoDB or
				CockroachDB (PostgreSQL)
			</p>
			<a
				href="https://www.linkedin.com/in/kyle-leonard93/"
				target="_blank"
				class="mx-auto lg:mr-auto text-base sm:text-large md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-primary-500 cursor-pointer"
			>
				<div
					class="absolute top-0 right-full w-full h-full bg-primary-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
				></div>
				<h4 class="relative z-9">Reach out! &rarr;</h4>
			</a>
		</div>
		<div class="relative grid place-items-center">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="https://link.storjshare.io/raw/jwt36t75mpohzjdhvwuuvoxyo2ca/portfolio-images%2Fprofile-img.png"
				alt="Profile Image"
				class="object-cover z-[2] max-h-[70vh]"
			/>
		</div>
	</section>
	<section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-large sm:text-xl md:text-2xl">
				I've been documenting my journey through <span class="font-semibold text-hashnode-blue"
					>Hashnode</span
				>
			</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to 👀 my articles?</h3>
		</div>
		<a
			href="https://blacknerd.dev/"
			target="_blank"
			class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 mb-4 sm:-mb-0 -mt-10 hover:border-primary-700 duration-200"
		>
			<i class="fa-solid fa-blog" />
			<p>Check out my blog!</p>
		</a>

		<Stepper buttonCompleteLabel="All Projects" on:complete={handleComplete} target="_blank">
			{#each steps as step}
				<Step>
					<svelte:fragment slot="header">
						{#if step.icon === 'fa-solid fa-sack-dollar'}
							<i class={`${step.icon} text-cali-gold`} />
						{:else if step.icon === 'fa-solid fa-table-tennis-paddle-ball'}
							<i class={`${step.icon} text-paddle-tan`} />
						{:else}
							<i class={`${step.icon} text-secondary-300`} />
						{/if}
						{#if step.url}
							<a href={step.url} target="_blank">
								<h3 class="hover:underline decoration-wavy duration-200">
									{step.name}
								</h3>
							</a>
						{:else}
							<h3 class="hover:underline decoration-wavy duration-200">
								{step.name}
							</h3>
						{/if}
					</svelte:fragment>
					<p>{step.description}</p>
				</Step>
			{/each}
		</Stepper>
	</section>
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-primary-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-primary-700 py-4"
		>
			<h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-primary-400">about</span> me.
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl text-white-300 font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{benefit.name}
						</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<h5 class={' text-2xl sm:text-3xl font-semibold text-center poppins '}>
			The <span class="text-primary-400">Complete</span> Package
		</h5>
		<div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
			<table class="bg-white text-slate-700 rounded text-center">
				<thead class={'border-b border-solid border-slate-200  '}>
					<tr class="">
						<th />
						<th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
						<th class="bg-primary-700 text-white whitespace-nowrap p-4 px-8">Me</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-solid border-slate-200">
						<td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Dedication</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Critical Thought</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr>
						<td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Interpersonal Skills</td
						>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-t border-solid border-slate-200">
						<td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Programming Ability</td
						>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mx-auto -mt-12 italic sm:hidden opacity-50">
			<p>Scroll to see more &rarr;</p>
		</div>
	</section>
</main>
