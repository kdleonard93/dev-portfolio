<script lang="ts">
	export let id: string | undefined = undefined;
	export let className = '';
</script>

<section {id} class="py-16 sm:py-24 {className}">
	<slot />
</section>
