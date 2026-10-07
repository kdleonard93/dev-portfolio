<script lang="ts">
	export let className = '';
</script>

<span
	class="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted transition-colors duration-200 {className}"
>
	<slot />
</span>
