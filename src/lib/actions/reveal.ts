interface RevealOptions {
	threshold?: number;
	delay?: number;
}

/**
 * Adds the `.reveal` class on mount and reveals the node once it scrolls
 * into view. Because the hidden styles are only applied from JS, content
 * stays visible when JavaScript is unavailable.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	if (
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches
	) {
		return { destroy() {} };
	}

	node.classList.add('reveal');
	if (options.delay) node.style.transitionDelay = `${options.delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			});
		},
		{ threshold: options.threshold ?? 0.15 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
