export type ProjectIcon = 'bot' | 'paw' | 'ledger' | 'mail' | 'film' | 'game';

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

export interface SkillStop {
	label: string;
	color: string;
	start: number;
	end: number;
}

export interface AboutBlock {
	name: string;
	description: string;
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
	{ name: 'About', href: '#about' },
	{ name: 'Blog', href: 'https://blacknerd.dev/', external: true }
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
				prompt: 'ls ~/stack',
				output: 'typescript  sveltekit  node\npython  php  sql  docker  kubernetes'
			}
		]
	}
};

export const projectsHeader = {
	kicker: "I've been documenting my journey through Hashnode and more recently Substack",
	title: 'Curious to 👀 my articles?',
	sub: 'For the link to my Substack and all other profiles',
	littlelink: { label: 'Checkout my LittleLink!', href: 'https://kdleonard93.github.io/littlelink/' },
	viewAll: {
		label: 'View All Projects',
		href: 'https://github.com/kdleonard93?tab=repositories'
	}
};

export const projects: Project[] = [
	{
		id: '1',
		name: 'RAG Starter Kit',
		icon: 'bot',
		description:
			'A minimal, local-first RAG (Retrieval-Augmented Generation) starter kit in TypeScript. Point it at documents, and get a chat app with grounded, cited answers running entirely on your machine.',
		url: 'https://github.com/kdleonard93/rag-starter-kit'
	},
	{
		id: '2',
		name: 'Creatures of Habit',
		icon: 'paw',
		description:
			'RPG style habit tracking app that aims to gamify the way you build new healthy habits.',
		note: 'Might need to click link twice if you get a bad gateway error.',
		url: 'https://creatures-of-habit-production.up.railway.app/'
	},
	{
		id: '3',
		name: 'Leo Ledger',
		icon: 'ledger',
		description:
			"Whether it's regular budget tracking, setting financial goals, forecasting expenses, or identifying savings opportunities, this tool aims to cover it all.",
		url: 'https://github.com/kdleonard93/Leo_Ledger'
	},
	{
		id: '4',
		name: 'Automated Email Sender',
		icon: 'mail',
		description:
			'Automated Email Sender is a Python-based application designed to automate the process of sending multiple emails. The application is ideal for sending batch emails, newsletters, and alerts.',
		url: 'https://github.com/kdleonard93/automated_email_sender'
	},
	{
		id: '5',
		name: 'Film Fan',
		icon: 'film',
		description:
			'Film Fan is sleek web application built using Svelte and Django, designed for movie enthusiasts. This app allows users to create personalized accounts, build, and manage their film lists with comprehensive CRUD (Create, Read, Update, Delete) functionalities.(new features to come)',
		url: 'https://github.com/kdleonard93/film-fan'
	},
	{
		id: '6',
		name: 'Pong Game',
		icon: 'game',
		description: 'Try and get a high score in this all time classic!',
		url: 'https://github.com/kdleonard93/100-Days-Of-Code_Python/tree/main/day-22'
	}
];

export const skills: SkillStop[] = [
	{ label: 'Javascript', color: '#F7DF1C', start: 0, end: 15 },
	{ label: 'Svelte', color: '#FF3E00', start: 15, end: 30 },
	{ label: 'PHP', color: '#7A86B8', start: 30, end: 60 },
	{ label: 'Python', color: '#306998', start: 60, end: 100 }
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
