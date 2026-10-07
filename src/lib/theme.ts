export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

export function getStoredTheme(): Theme | null {
	if (typeof localStorage === 'undefined') return null;
	const value = localStorage.getItem(STORAGE_KEY);
	return value === 'light' || value === 'dark' ? value : null;
}

export function getCurrentTheme(): Theme {
	if (typeof document === 'undefined') return 'light';
	return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
	if (typeof document === 'undefined') return;
	document.documentElement.classList.toggle('dark', theme === 'dark');
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// storage can be unavailable (private mode, disabled cookies)
	}
}

export function toggleTheme(): Theme {
	const next: Theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
	applyTheme(next);
	return next;
}
