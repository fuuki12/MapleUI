<script>
	import CircleSpinner from './CircleSpinner.svelte';

	export let loading = false;
	export let status = '';
	export let color = 'default' || 'primary';
	export let onClick = () => {};
	export let height = 'auto'; // default value for height
	export let width = 'auto'; // default value for width
</script>

<button
	class={`button ${color}`}
	on:click={onClick}
	disabled={loading}
	style={`height:${height}px; width:${width}px`}
>
	<div class={loading ? 'inner fade' : 'inner normal'}>
		{#if !loading}
			<slot />
		{:else}
			<CircleSpinner />
		{/if}
	</div>
	{#if loading && status}
		<div class="status">
			{#each status.split('\n') as line, i}
				{i !== 0 ? '<br />' : ''}{line}
			{/each}
		</div>
	{/if}
</button>

<style lang="scss">
	.button {
		/* common button styles */
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		/* hover styles */
		&:hover {
			transform: translateY(-3px);
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
		}
	}
	.button.default {
		background-color: #f2f2f2; /* light gray */
		color: #000000; /* black */
	}
	.button.primary {
		background-color: #007bff; /* light blue */
		color: #ffffff; /* white */
	}
	.inner.fade {
		color: #bbbbbb; /* light gray */
	}
	.inner.normal {
		color: #000000; /* black */
	}
	/* Other styles */
</style>
