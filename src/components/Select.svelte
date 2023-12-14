<script lang="ts">
	import { onMount } from 'svelte';

	// Declare and initialize selected value
	let selectedValue = '';

	export let required = false;
	export let items: { key: string; label: string }[] = [{ key: '', label: '' }];
	export let placeholder = 'Select...';
	export let height = 'auto';
	export let width = 'auto';

	/**
	 * @type {HTMLSelectElement}
	 */
	let selectElement: HTMLSelectElement;

	onMount(() => {
		selectElement.value = selectedValue;
	});

	const handleChange = (event: any) => {
		selectedValue = event.target.value;
	};
</script>

<div class="container">
	{#if required}
		<p>Must be filled!</p>
	{/if}
	<select
		bind:this={selectElement}
		bind:value={selectedValue}
		class="select-field"
		on:change={handleChange}
		style={`height:${height === 'auto' ? 'auto' : height + 'px'}; width:${
			width === 'auto' ? 'auto' : width + 'px'
		}`}
	>
		<option disabled>{placeholder}</option>
		{#each items as item (item.key)}
			<option value={item.key}>{item.label}</option>
		{/each}
	</select>
</div>

<style>
	.container {
		width: 100%;
		text-align: left;
	}

	.select-field {
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

	.select-field:focus {
		border: 1px solid #808080;
	}
</style>
