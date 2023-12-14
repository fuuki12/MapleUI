<script lang="ts">
	import { writable } from 'svelte/store';

	let value = '';

	export let required = false;
	export let errorMessage: any = undefined;
	export let isError = false;
	export let placeholder = 'Input here...';
	export let height = 'auto';
	export let width = 'auto';

	let changeStatus = writable(false);

	const handleInput = () => {
		changeStatus.set(true);
		if (errorMessage) changeStatus.set(false);
	};
</script>

<div class="container">
	{#if required}
		<p>Must be filled!</p>
	{/if}
	<input
		type="text"
		bind:value
		on:input={handleInput}
		class="input-field {isError && !changeStatus ? 'input-error' : ''}"
		{placeholder}
		style={`height:${height === 'auto' ? 'auto' : height + 'px'}; width:${
			width === 'auto' ? 'auto' : width + 'px'
		}`}
	/>

	{#if errorMessage && !$changeStatus}
		<div class="error-text">
			{isError && typeof errorMessage === 'string' ? errorMessage : ''}
		</div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		text-align: left;
	}

	.input-field {
		display: inline-block;
		width: 100%;
		box-sizing: border-box;
		padding: 0.5rem;
		border: 1px solid #c0c0c0;
		border-radius: 0.5rem;
		background-color: rgba(0, 0, 0, 0.05);
		color: #000;
		font-size: 1rem;
		outline: none;
	}

	.input-field:focus {
		border: 1px solid #808080;
	}

	.input-error {
		border: 1px solid red;
	}

	.error-text {
		color: red;
	}
</style>
