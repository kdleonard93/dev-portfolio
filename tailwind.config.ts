import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
				surface: {
					DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
					alt: 'rgb(var(--color-surface-alt) / <alpha-value>)'
				},
				ink: 'rgb(var(--color-ink) / <alpha-value>)',
				muted: 'rgb(var(--color-muted) / <alpha-value>)',
				border: 'rgb(var(--color-border) / <alpha-value>)',
				accent: {
					DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
					contrast: 'rgb(var(--color-accent-contrast) / <alpha-value>)'
				},
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
				success: 'rgb(var(--color-success) / <alpha-value>)',
				error: 'rgb(var(--color-error) / <alpha-value>)'
			},
			fontFamily: {
				sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
			},
			maxWidth: {
				content: '72rem'
			},
			boxShadow: {
				card: '0 1px 2px rgb(var(--color-ink) / 0.05)',
				'card-hover': '0 18px 40px -24px rgb(var(--color-ink) / 0.45)',
				sketch: '4px 4px 0 0 rgb(var(--color-border))'
			},
			keyframes: {
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(16px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			animation: {
				'fade-up': 'fade-up 0.7s ease forwards',
				blink: 'blink 1.1s step-end infinite'
			}
		}
	},
	plugins: [forms]
} satisfies Config;
