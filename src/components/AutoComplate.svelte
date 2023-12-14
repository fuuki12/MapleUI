<script lang="ts">
	import CircleSpinner from './CircleSpinner.svelte';
	let suggestions: any[] = [];
	let search = '';

	export let loading = false;
	export let status = '';
	export let color = 'default' || 'primary';
	export let height = 'auto'; // default value for height
	export let width = 'auto'; // default value for width
	export let placeholder = 'Search here...';
	export let items: any[] = []; // autocomplete items

	const selectItem = (item: string) => {
		search = item;
		suggestions = [];
	};
</script>

<div class={`autocomplete ${color}`}>
	<input
		bind:value={search}
		on:input={() => (suggestions = items.filter((item) => item.includes(search)))}
		disabled={loading}
		{placeholder}
		style={`height:${height === 'auto' ? 'auto' : height + 'px'}; width:${
			width === 'auto' ? 'auto' : width + 'px'
		}`}
	/>
	<ul>
		{#each suggestions as item (item)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li on:click={() => selectItem(item)}>
				{item}
			</li>
		{/each}
	</ul>
	<div class={loading ? 'inner fade' : 'inner normal'}>
		{#if loading}
			<CircleSpinner />
		{:else if status}
			<div class="status">
				{#each status.split('\n') as line, i}
					{i !== 0 ? '<br />' : ''}{line}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.autocomplete {
		position: relative;
	}

	input {
		width: 100%;
		box-sizing: border-box;
		padding: 0.5em;
	}

	ul {
		position: absolute;
		background-color: white;
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
		z-index: 1;
	}

	li {
		padding: 0.5em;
		cursor: pointer;

		&:hover {
			background-color: #ddd;
		}
	}
	.autocomplete.default {
		background-color: #f2f2f2; // light gray
		color: #000000; // black

		input {
			border-color: #f2f2f2; // light gray
		}

		li:hover {
			background-color: #ddd; // darker light gray
		}
	}
	.autocomplete.primary {
		background-color: #007bff; // primary color
		color: #000000; // text color

		input {
			border-color: #007bff; // primary color
		}

		li:hover {
			background-color: #0069d9; // darker primary color
		}
	}
</style>
