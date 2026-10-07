export type ProjectIcon = 'art' | 'bot' | 'paw' | 'ledger' | 'mail' | 'film' | 'game';

export type BrandName =
	| 'substack'
	| 'applepodcasts'
	| 'bluesky'
	| 'mastodon'
	| 'github'
	| 'linkedin'
	| 'discord';

export interface NavLink {
	name: string;
	href: string;
	external?: boolean;
}

export interface Project {
	id: string;
	name: string;
	icon: ProjectIcon;
	description: string;
	note?: string;
	url?: string;
}

export interface SkillCategory {
	label: string;
	color: string;
	/** Relative emphasis. Weights are normalized to 100% when rendered. */
	weight: number;
}

export interface SkillGroup {
	label: string;
	skills: string[];
}

export interface ExperienceItem {
	role: string;
	company: string;
	location: string;
	period: string;
	highlights: string[];
}

export type RichText = Array<string | { strong: string }>;

export interface AboutBlock {
	name: string;
	description: string | RichText;
}

export interface ComparisonRow {
	label: string;
	values: boolean[];
}

export interface Social {
	name: string;
	href: string;
	icon: BrandName;
}

export const site = {
	name: 'Kyle Leonard',
	role: 'Software Engineer',
	email: 'contact@digitaldopamine.dev',
	github: 'https://github.com/kdleonard93',
	linkedin: 'https://www.linkedin.com/in/kyle-leonard93/'
};

export const nav: NavLink[] = [
	{ name: 'Projects', href: 'https://github.com/kdleonard93?tab=repositories', external: true },
	{ name: 'Experience', href: '#experience' },
	{ name: 'About', href: '#about' },
	{ name: 'Blog', href: 'https://digitaldopaminellc.substack.com/', external: true }
];

export const hero = {
	introBefore: 'My ',
	introHighlight: 'tech arsenal',
	introAfter:
		' includes Javascript/Typescript, Svelte + Sveltekit, Node.js, Python, PHP, Wordpress, SQLite/PostgreSQL, Docker, and Kubernetes',
	tags: [
		'TypeScript',
		'SvelteKit',
		'Node.js',
		'Python',
		'PHP',
		'WordPress',
		'SQLite',
		'PostgreSQL',
		'Docker',
		'Kubernetes'
	],
	terminal: {
		title: '~/kyle',
		lines: [
			{ prompt: 'whoami', output: 'kyle_leonard' },
			{ prompt: 'cat role.txt', output: 'software_engineer' },
			{
				prompt: 'cat what_im_doing.txt',
				output:
					'Building AI systems. Built a RAG pipeline + chat UI for my LLC and currently working on an SEC-filings research copilot'
			}
		]
	}
};

export const projectsHeader = {
	kicker: "I've been documenting my journey through Hashnode and more recently Substack",
	title: 'Curious to 👀 my articles?',
	sub: 'For the link to my Substack and all other profiles',
	littlelink: {
		label: 'Checkout my LittleLink!',
		href: 'https://kdleonard93.github.io/littlelink/'
	},
	viewAll: {
		label: 'View All Projects',
		href: 'https://github.com/kdleonard93?tab=repositories'
	}
};

export const projects: Project[] = [
	{
		id: '1',
		name: 'The Art Vault (in progress)',
		icon: 'art',
		description:
			'A custom WordPress plugin that powers the admin for an art gallery: artwork inventory, prints and limited editions, collections, locations, exhibitions, and PDF inventory and certificate reports, built on top of WooCommerce.',
		note: 'Demo coming soon!'
	},
	{
		id: '2',
		name: 'RAG Starter Kit',
		icon: 'bot',
		description:
			'A minimal, local-first RAG (Retrieval-Augmented Generation) starter kit in TypeScript. Point it at documents, and get a chat app with grounded, cited answers running entirely on your machine.',

		url: 'https://github.com/kdleonard93/rag-starter-kit'
	},
	{
		id: '3',
		name: 'Creatures of Habit',
		icon: 'paw',
		description:
			'RPG style habit tracking app that aims to gamify the way you build new healthy habits.',
		note: 'Might need to click link twice if you get a bad gateway error.',
		url: 'https://creatures-of-habit-production.up.railway.app/'
	},
	{
		id: '4',
		name: 'Leo Ledger',
		icon: 'ledger',
		description:
			"Whether it's regular budget tracking, setting financial goals, forecasting expenses, or identifying savings opportunities, this tool aims to cover it all.",
		url: 'https://github.com/kdleonard93/Leo_Ledger'
	},
	{
		id: '5',
		name: 'Automated Email Sender',
		icon: 'mail',
		description:
			'Automated Email Sender is a Python-based application designed to automate the process of sending multiple emails. The application is ideal for sending batch emails, newsletters, and alerts.',
		url: 'https://github.com/kdleonard93/automated_email_sender'
	},
	{
		id: '6',
		name: 'Film Fan',
		icon: 'film',
		description:
			'Film Fan is sleek web application built using Svelte and Django, designed for movie enthusiasts. This app allows users to create personalized accounts, build, and manage their film lists with comprehensive CRUD (Create, Read, Update, Delete) functionalities.(new features to come)',
		url: 'https://github.com/kdleonard93/film-fan'
	}
];

export const skills: SkillCategory[] = [
	{ label: 'Python + AI / LLM', color: '#0d9488', weight: 28 },
	{ label: 'TypeScript / JavaScript + SvelteKit', color: '#e11d48', weight: 25 },
	{ label: 'SQL / Data modeling', color: '#f59e0b', weight: 15 },
	{ label: 'Backend & APIs', color: '#4f46e5', weight: 14 },
	{ label: 'PHP / legacy web', color: '#7a86b8', weight: 10 },
	{ label: 'Infra / DevOps', color: '#64748b', weight: 8 }
];

export const skillGroups: SkillGroup[] = [
	{
		label: 'Languages',
		skills: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL', 'HTML / CSS']
	},
	{
		label: 'Data',
		skills: [
			'PostgreSQL',
			'MySQL',
			'SQLite',
			'Turso',
			'CockroachDB',
			'Drizzle ORM',
			'schema design'
		]
	},
	{
		label: 'Backend & Infra',
		skills: [
			'Node.js',
			'Django',
			'FastAPI',
			'REST APIs',
			'GitHub Actions',
			'Docker',
			'Kubernetes',
			'Railway',
			'Datadog'
		]
	},
	{
		label: 'Frontend',
		skills: ['SvelteKit', 'Svelte', 'Tailwind', 'HTMX']
	},
	{
		label: 'AI / LLM',
		skills: ['LangChain', 'Chroma', 'Ollama', 'OpenRouter', 'OpenAI', 'Anthropic', 'RAG']
	},
	{
		label: 'Tooling',
		skills: ['Vitest', 'Playwright', 'Biome', 'Tauri', 'PostHog', 'Git']
	}
];

export const experience: ExperienceItem[] = [
	{
		role: 'Software Engineer',
		company: 'Dealer Inspire (Cars Commerce)',
		location: 'Chicago, IL',
		period: 'Nov 2022 - Apr 2026',
		highlights: [
			'Designed and maintained backend services and RESTful APIs in Python, PHP, and SQL, delivering features to thousands of dealer clients at scale.',
			'Built GitHub Actions workflows that automated OEM integration page updates across 1,000+ merchant sites, collapsing hours of manual effort into a one-click run under ten minutes.',
			'Authored deployment scripts and contributed to daily zero-downtime production releases; one of the first engineers on the Kubernetes production deploy team, monitoring stability via Datadog and k9s.',
			'Refactored legacy data pipelines and infrastructure, reducing technical debt by 10-15% and improving uptime; wrote documentation and runbooks so other teams could ramp quickly.'
		]
	},
	{
		role: 'Content Developer',
		company: 'Dealer Inspire',
		location: 'Chicago, IL',
		period: 'Mar 2021 - Nov 2022',
		highlights: [
			'Delivered 7-10 client site launches per week in Agile sprints, owning inventory-feed and API-connected content logic.',
			'First production exposure to high-volume data-aggregation pipelines pulling live inventory from third-party sources.'
		]
	},
	{
		role: 'Solutions Engineer',
		company: 'Dealer Inspire',
		location: 'Chicago, IL',
		period: 'Feb 2020 - Mar 2021',
		highlights: [
			'Served as first point of contact for technical support, diagnosing client platform issues and resolving them directly; reduced ticket escalations by 10%.',
			'Collaborated cross-functionally to deliver technical support and client training, translating real-time product issues into actionable engineering specs.'
		]
	},
	{
		role: 'Catastrophe Logistics Specialist',
		company: 'ALE Solutions',
		location: 'Saint Charles, IL',
		period: 'Oct 2017 - Feb 2020',
		highlights: [
			'Coordinated national-account logistics and stakeholder relationships under tight timelines; managed unique cross-functional projects directed by the VP, including the ALE Cares nonprofit foundation.'
		]
	}
];

export const aboutHeader = {
	kicker: 'Want to know more?',
	title: 'A bit about me.',
	lead: 'I am . . .',
	tableTitle: 'The Complete Package'
};

export const aboutBlocks: AboutBlock[] = [
	{
		name: 'a music lover turned dev',
		description:
			"I got into development out of my love for music, when the tides started to turn during my journey as a Producer and Mix Engineer. I found it easier to work with the technical things of the post work and when it came to artists, it was hard to depend on the consistency of work. That led me to looking into making VSTs for music production but that soon turned into going down a rabbit hole with web development. That led me to online tutorials and projects before attending Lambda School (now Bloom Institute of Technology). From there, I entered my professional career and haven't looked back since."
	},
	{
		name: 'an excellent communicator and constant learner',
		description:
			'I place great emphasis on transparent and effective communication, which I believe is crucial for building strong team relationships and enhancing productivity. I am committed to continual learning and staying updated with the latest technologies and industry trends, now focusing on using my years of professional experience to build reliable and production ready AI systems.'
	},
	{
		name: 'actively contributing back to my community',
		description: [
			"I have been more involved in community outreach, doing a presentation for QCUL's (Quad County Urban League) youth and plan to participate as a panelist for their upcoming event: ",
			{ strong: '"Our Voice, Our Vote: Black Men and the Power of the Vote"' },
			". I'm also part of the Code and Coffee Chicago community where we collaborate on projects and/or share knowledge with each other."
		]
	}
];

export const comparison = {
	columns: ['Candidate #1', 'Candidate #2', 'Candidate #3', 'Me'],
	rows: [
		{ label: 'Dedication', values: [false, true, false, true] },
		{ label: 'Critical Thought', values: [false, true, true, true] },
		{ label: 'Interpersonal Skills', values: [true, true, false, true] },
		{ label: 'Programming Ability', values: [true, false, true, true] }
	] as ComparisonRow[]
};

export const footer = {
	connectLabel: 'Connect with me!',
	tagline: 'Software engineer building things on the web.'
};

export const socials: Social[] = [
	{ name: 'Substack', href: 'https://digitaldopaminellc.substack.com/', icon: 'substack' },
	{
		name: 'Apple Podcasts',
		href: 'https://podcasts.apple.com/us/podcast/digital-dopamine/id1871601886',
		icon: 'applepodcasts'
	},
	{ name: 'Bluesky', href: 'https://bsky.app/profile/digitaldopamine.dev', icon: 'bluesky' },
	{ name: 'Mastodon', href: 'https://mastodon.social/@digitaldopamine', icon: 'mastodon' },
	{ name: 'GitHub', href: 'https://github.com/kdleonard93', icon: 'github' },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/kyle-leonard93/', icon: 'linkedin' },
	{ name: 'Discord', href: 'https://discord.com/users/407639833146818570', icon: 'discord' }
];
