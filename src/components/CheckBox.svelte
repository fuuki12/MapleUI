<script lang="ts">
	export let checked = false;
	export let disabled = false;
	export let label = '';
	let onChange = (e: any) => (checked = e.target.checked);
</script>

<label class={`checkbox-container`} on:change={onChange}>
	{label}
	<input type="checkbox" bind:checked {disabled} />
	<span class="checkmark" />
</label>

<style lang="scss">
	.checkbox-container {
		display: inline-block;
		position: relative;
		padding-left: 35px;
		margin-bottom: 12px;
		cursor: pointer;
		font-size: 22px;
		user-select: none;

		input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;
		}

		.checkmark {
			position: absolute;
			top: 0;
			left: 0;
			height: 25px;
			width: 25px;
			background-color: #ccc;
			border-radius: 5px;
		}

		&:hover input ~ .checkmark {
			background-color: #2196f3;
		}

		input:checked ~ .checkmark {
			background-color: #2196f3;
		}

		.checkmark:after {
			content: '';
			position: absolute;
			display: none;
		}

		input:checked ~ .checkmark:after {
			display: block;
		}

		.checkmark:after {
			left: 9px;
			top: 5px;
			width: 5px;
			height: 10px;
			border: solid white;
			border-width: 0 3px 3px 0;
			transform: rotate(45deg);
		}
	}
</style>
