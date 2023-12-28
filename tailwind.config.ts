import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { Wet } from './src/Wet'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors: {
				'hashnode-blue': '#2463EB',
			}
		},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				preset: [
					{
						name: 'modern',
						enhancements: true,
					},
					{
						name: 'wintry',
						enhancements: true,
					},
					{
						name: 'crimson',
						enhancements: true,
					},
					{
						name: 'skeleton',
						enhancements: true,
					},
				],
				custom: [
					Wet,
				],
			},
		}),
	],
} satisfies Config;
