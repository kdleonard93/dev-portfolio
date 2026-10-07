<script lang="ts">
	export let className = '';
</script>

<div class="rounded-2xl border border-border bg-surface p-6 shadow-card {className}">
	<slot />
</div>
