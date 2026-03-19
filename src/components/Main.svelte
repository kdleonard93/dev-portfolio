<script lang="ts">
	import { onMount } from 'svelte';

	interface SkillStop {
		label: string;
		color: string;
		start: number;
		end: number;
	}

	interface Project {
		id: string;
		name: string;
		icon: string;
		description: string;
		note?: string;
		url?: string;
	}

	let isVisible = {
		intro: false,
		projects: false,
		about: false
	};

	function handleComplete() {
		window.open('https://github.com/kdleonard93?tab=repositories');
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.id;
						if (id === 'introPage') isVisible.intro = true;
						if (id === 'projects') isVisible.projects = true;
						if (id === 'about') isVisible.about = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		const sections = document.querySelectorAll('#introPage, #projects, #about');
		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	})

	const steps: Project[] = [
		{
			id: '1',
			name: 'Creatures of Habit',
			icon: 'fa-solid fa-paw',
			description: 'RPG style habit tracking app that aims to gamify the way you build new healthy habits.',
			note: 'Might need to click link twice if you get a bad gateway error.',
			url: 'https://creatures-of-habit-production.up.railway.app/'
		},
		{
			id: '2',
			name: 'Leo Ledger',
			icon: 'fa-solid fa-sack-dollar',
			description:
				"Whether it's regular budget tracking, setting financial goals, forecasting expenses, or identifying savings opportunities, this tool aims to cover it all.",
			url: 'https://github.com/kdleonard93/Leo_Ledger'
		},
		{
			id: '3',
			name: 'Automated Email Sender',
			icon: 'fa-solid fa-envelope',
			description:
				'Automated Email Sender is a Python-based application designed to automate the process of sending multiple emails. The application is ideal for sending batch emails, newsletters, and alerts.',
			url: 'https://github.com/kdleonard93/automated_email_sender'
		},
		{
			id: '4',
			name: 'Film Fan',
			icon: 'fa-solid fa-film',
			description:
				'Film Fan is sleek web application built using Svelte and Django, designed for movie enthusiasts. This app allows users to create personalized accounts, build, and manage their film lists with comprehensive CRUD (Create, Read, Update, Delete) functionalities.(new features to come)',
			url: 'https://github.com/kdleonard93/film-fan'
		},
		{
			id: '5',
			name: 'Pong Game',
			icon: 'fa-solid fa-table-tennis-paddle-ball',
			description: 'Try and get a high score in this all time classic!',
			url: 'https://github.com/kdleonard93/100-Days-Of-Code_Python/tree/main/day-22'
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
				'As a developer at Cars Commerce, my work primarily involves PHP, JavaScript, HTML/CSS, and WordPress, at times, complemented by features using Vue components. I am adept at managing tasks through Jira and using a variety of tools including Docker, AWS, and Postman.'
		},
		{
			name: 'an excellent communicator and constant learner',
			description:
				'I place great emphasis on transparent and effective communication, which I believe is crucial for building strong team relationships and enhancing productivity. I am committed to continual learning and staying updated with the latest technologies, with a keen interest in finance technology and exploring new frameworks like SvelteKit and languages like TypeScript.'
		}
	];
	const conicStops: SkillStop[] = [
		{ label: 'Javascript', color: '#F7DF1C', start: 0, end: 15 },
		{ label: 'Svelte', color: '#FF3E00', start: 15, end: 30 },
		{ label: 'PHP', color: '#7A86B8', start: 30, end: 60 },
		{ label: 'Python', color: '#306998', start: 60, end: 100 }
	];

	$: conicGradientStyle = `conic-gradient(${conicStops.map(s => `${s.color} ${s.start}% ${s.end}%`).join(', ')})`;

	let hoveredProject: string | null = null

	export const Main = null;
</script>

<main class="flex flex-col flex-1 p-4">
	<section 
		id="introPage" 
		class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 transition-all duration-1000 {isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
	>
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 animate-fade-in">
			<h2 class="font-semi-bold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-primary-400 via-secondary-400 to-tertiary-400 bg-clip-text text-transparent animate-gradient leading-tight pb-2">
				<span class="poppins">Kyle</span> Leonard
				<br />Software Engineer
			</h2>
			<p class="text-base sm:text-lg md:text-xl text-slate-300">
				My <span class="text-primary-400 font-semibold">tech arsenal</span> includes Javascript/Typescript, Svelte
				+ Sveltekit, Node.js, Python, PHP, Wordpress, SQLite/PostgreSQL, Docker, and Kubernetes
			</p>
		</div>
		<div class="relative grid place-items-center group">
			<div class="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="/images/profile-img.png"
				alt="Profile Image"
				class="object-cover z-[2] max-h-[70vh] transform transition-transform duration-500 hover:scale-105"
			/>
		</div>
	</section>
	<section 
		class="py-20 lg:py-32 flex flex-col gap-24 transition-all duration-1000 {isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}" 
		id="projects"
	>
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-large sm:text-xl md:text-2xl text-slate-300">
				I've been documenting my journey through <span class="font-semibold text-hashnode-blue">Hashnode</span> and more recently <span class="font-semibold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Substack</span>
			</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Curious to</span> 👀 <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">my articles?</span></h3>
		</div>
		<div class="flex flex-col gap-2 text-center"><h6 class="text-medium sm:text-xl md:text-2xl text-slate-300">For the link to my <span class="font-semibold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Substack</span> and all other profiles</h6></div>
		<a
			href="https://linktr.ee/digital_dopamine"
			target="_blank"
			class="mx-auto px-6 py-3 rounded-full border-2 border-solid border-primary-500 bg-primary-500/10 flex items-center gap-2 mb-4 sm:-mb-0 -mt-10 hover:bg-primary-500 hover:scale-105 transition-all duration-300 group"
		>
			<i class="fa-brands fa-linktree group-hover:rotate-12 transition-transform duration-300"></i>
			<p class="font-semibold">Checkout my Linktree!</p>
		</a>
		<div class="project-container flex justify-evenly flex-row max-[820px]:flex-col gap-8">
			<div class="w-full max-w-prose space-y-6">
				{#each steps as step, index}
					<div 
						role="article"
						class="group relative bg-slate-700/60 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-6 transition-all duration-300 hover:border-primary-400/70 hover:shadow-lg hover:shadow-primary-400/25 hover:-translate-y-1"
						on:mouseenter={() => hoveredProject = step.id}
						on:mouseleave={() => hoveredProject = null}
						style="animation-delay: {index * 100}ms"
					>
						<div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-tertiary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div class="relative flex items-start gap-4">
							<div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
								{#if step.icon === 'fa-solid fa-sack-dollar'}
									<i class={step.icon} />
								{:else if step.icon === 'fa-solid fa-table-tennis-paddle-ball'}
									<i class={step.icon} />
								{:else if step.icon === 'fa-solid fa-film'}
									<i class={step.icon} />
								{:else}
									<i class={step.icon} />
								{/if}
							</div>
							<div class="flex-1">
								<div class="flex items-center justify-between mb-2">
									{#if step.url}
										<a href={step.url} target="_blank" class="group/link">
											<h3 class="text-xl font-bold text-white group-hover/link:text-primary-400 transition-colors duration-200 flex items-center gap-2 underline-offset-2 underline">
												{step.name}
												<i class="fa-solid fa-arrow-up-right-from-square text-sm opacity-0 group-hover/link:opacity-100 transition-opacity duration-200"></i>
											</h3>
										</a>
									{:else}
										<h3 class="text-xl font-bold text-white">{step.name}</h3>
									{/if}
									<span class="text-xs font-semibold text-primary-400 bg-primary-500/20 px-3 py-1 rounded-full">Project #{step.id}</span>
								</div>
								<p class="text-slate-300 leading-relaxed">{step.description}</p>
								{#if step.note}
									<p class="text-xs text-slate-400 italic mt-2">{step.note}</p>
								{/if}
							</div>
						</div>
					</div>
				{/each}
				<a 
					href="https://github.com/kdleonard93?tab=repositories"
					target="_blank"
					class="block w-full text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
				>
					<span class="flex items-center justify-center gap-2">
						View All Projects
						<i class="fa-solid fa-arrow-right"></i>
					</span>
				</a>
			</div>
			<div class="relative group">
				<div class="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
				<div class="relative bg-slate-700/60 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-6">
					<h3 class="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Skills Overview</h3>
					<div class="flex flex-col items-center gap-6 transform transition-transform duration-500 group-hover:scale-105">
						<div
							class="w-48 h-48 sm:w-56 sm:h-56 rounded-full shadow-lg shadow-primary-500/20"
							style="background: {conicGradientStyle};"
						></div>
						<ul class="flex flex-wrap justify-center gap-4">
							{#each conicStops as stop}
								<li class="flex items-center gap-2 text-sm">
									<span class="w-3 h-3 rounded-full inline-block" style="background-color: {stop.color};"></span>
									<span class="text-slate-300">{stop.label} ({stop.end - stop.start}%)</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative transition-all duration-1000 {isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
	>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-gradient-to-r before:from-primary-500 before:to-secondary-500 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-gradient-to-r after:from-secondary-500 after:to-tertiary-500 py-4"
		>
			<h6 class="text-large sm:text-xl md:text-2xl text-slate-300">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">about</span> me.
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-primary-400 via-secondary-400 to-tertiary-400 bg-clip-text text-transparent">I am . . .</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8 group hover:translate-x-2 transition-transform duration-300">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl bg-gradient-to-br from-primary-400 to-secondary-400 bg-clip-text text-transparent font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl group-hover:text-primary-400 transition-colors duration-300">
							{benefit.name}
						</h3>
						<p class="text-slate-300 leading-relaxed">{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<h5 class={' text-2xl sm:text-3xl font-semibold text-center poppins '}>
			The <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Complete</span> Package
		</h5>
		<div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
			<table class="bg-slate-700/70 backdrop-blur-sm text-slate-100 rounded-2xl text-center border border-primary-500/30 overflow-hidden shadow-lg shadow-primary-500/15">
				<thead class={'border-b border-solid border-primary-500/30'}>
					<tr class="bg-slate-600/50">
						<th />
						<th class="whitespace-nowrap p-3 px-4 text-slate-300">Candidate #1</th>
						<th class="whitespace-nowrap p-3 px-4 text-slate-300">Candidate #2</th>
						<th class="whitespace-nowrap p-3 px-4 text-slate-300">Candidate #3</th>
						<th class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white whitespace-nowrap p-4 px-8 font-bold">Me</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-solid border-primary-500/20 hover:bg-slate-600/40 transition-colors duration-200">
						<td class="border-r border-solid border-primary-500/20 pl-4 pr-8 py-4 font-semibold text-sm text-left"
							>Dedication</td
						>
						<td><i class="fa-solid fa-xmark text-error-500" /></td>
						<td><i class="fa-solid fa-check text-slate-400" /></td>
						<td><i class="fa-solid fa-xmark text-error-500" /></td>
						<td><i class="fa-solid fa-check text-success-500 text-lg" /></td>
					</tr>
					<tr class="border-b border-solid border-primary-500/20 hover:bg-slate-600/40 transition-colors duration-200">
						<td class="border-r border-solid border-primary-500/20 pl-4 pr-8 py-4 font-semibold text-sm text-left"
							>Critical Thought</td
						>
						<td><i class="fa-solid fa-xmark text-error-500" /></td>
						<td><i class="fa-solid fa-check text-slate-400" /></td>
						<td><i class="fa-solid fa-check text-slate-400" /></td>
						<td><i class="fa-solid fa-check text-success-500 text-lg" /></td>
					</tr>
					<tr class="border-b border-solid border-primary-500/20 hover:bg-slate-600/40 transition-colors duration-200">
						<td class="border-r border-solid border-primary-500/20 pl-4 pr-8 py-4 font-semibold text-sm text-left"
							>Interpersonal Skills</td
						>
						<td><i class="fa-solid fa-check text-slate-400" /></td>
						<td><i class="fa-solid fa-check text-slate-400" /></td>
						<td><i class="fa-solid fa-xmark text-error-500" /></td>
						<td><i class="fa-solid fa-check text-success-500 text-lg" /></td>
					</tr>
					<tr class="hover:bg-slate-600/40 transition-colors duration-200">
						<td class="border-r border-solid border-primary-500/20 pl-4 pr-8 py-4 font-semibold text-sm text-left"
							>Programming Ability</td
						>
						<td><i class="fa-solid fa-check text-slate-400" /></td>
						<td><i class="fa-solid fa-xmark text-error-500" /></td>
						<td><i class="fa-solid fa-check text-slate-400" /></td>
						<td><i class="fa-solid fa-check text-success-500 text-lg" /></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mx-auto -mt-12 italic sm:hidden opacity-50">
			<p>Scroll to see more &rarr;</p>
		</div>
	</section>
</main>
