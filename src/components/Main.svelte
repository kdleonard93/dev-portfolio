<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';

	function handleComplete() {
		window.open('https://github.com/kdleonard93?tab=repositories');
	}

	const steps = [
		{
			name: 'Frogger',
			icon: 'fa-solid fa-frog',
			description:
				'Take a shot at crossing the busy highways of Frogville in this classic, written in Python'
		},
		{
			name: 'Utlimate Todos',
			icon: 'fa-solid fa-list-check',
			description:
				'Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.'
		},
		{
			name: 'Leo Ledger',
			icon: 'fa-solid fa-sack-dollar',
			description:
				"Whether it's regular budget tracking, setting financial goals, forecasting expenses, or identifying savings opportunities, this tool aims to cover it all. (coming soon)."
		}
	];

	const benefits = [
		{
			metric: '10x',
			name: 'a self taught developer',
			description:
				'I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.'
		},
		{
			name: 'a product design & UX fanatic',
			description:
				'Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.'
		},
		{
			name: 'an excellent communicator',
			description:
				"Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
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
				+ Sveltekit, Bun or Node.js, Python + Flask, PHP, Wordpress, TailwindCSS + SkeletonUI, & MongoDB
				or Fauna.
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
						<i class={step.icon} />
						<h3>{step.name}</h3>
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
