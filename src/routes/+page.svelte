<script>
	import Main from '../components/Main.svelte';
	// import { superForm } from 'sveltekit-superforms/client';

	// export let data;
	// console.log(data.form); // Add this line for debugging
	// const { form, enhance, errors, constraints } = superForm(data.form, {
	// 	resetForm: true
	// });

	// function handleSubmit() {
	// 	alert(
	// 		'Just a placeholder for now 😁. Using SuperForms for server and client validation and Skeleton for styling. Contact me through LinkedIn or Hashnode instead!'
	// 	);
	// }
</script>

<Main />
<!-- <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-2">Contact Me</h3>
<form method="POST" use:enhance>
	<label class="label">
		<span>Name</span>
		<input
			class="input variant-form-material"
			type="text"
			name="name"
			bind:value={$form.name}
			aria-invalid={$errors.name ? 'true' : undefined}
			{...$constraints.name}
		/>
		{#if $errors.name}<span class="error">{$errors.name}</span>{/if}
	</label>
	<label class="label">
		<span>Email</span>
		<input
			class="input variant-form-material"
			type="email"
			name="email"
			bind:value={$form.email}
			aria-invalid={$errors.email ? 'true' : undefined}
			{...$constraints.email}
		/>
		{#if $errors.email}<span class="error">{$errors.email}</span>{/if}
	</label>
	<label class="label">
		<span>Phone Number</span>
		<input
			class="input variant-form-material"
			type="tel"
			name="phone"
			bind:value={$form.phone}
			aria-invalid={$errors.phone ? 'true' : undefined}
			{...$constraints.phone}
		/>
		{#if $errors.phone}<span class="error">{$errors.phone}</span>{/if}
	</label>
	<label class="label">
		<span>Textarea</span>
		<textarea
			class="textarea variant-form-material"
			rows="4"
			name="message"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			bind:value={$form.message}
			aria-invalid={$errors.message ? 'true' : undefined}
			{...$constraints.message}
		></textarea>
		{#if $errors.message}<span class="error">{$errors.message}</span>{/if}
	</label>
	<button
		class="variant-filled-primary mx-auto lg:mr-auto text-base sm:text-large md:text-xl poppins relative overflow-hidden px-6 py-3 m-2 group rounded-full cursor-pointer"
		type="submit"
		on:click={handleSubmit}>Submit</button
	>
</form> -->
