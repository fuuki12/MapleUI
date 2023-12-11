<script>
	let size = 50;
	let color = '#000000';
</script>

<div
	class="circle-spinner"
	style="
      width: {size}px;
      height: {size}px;
      border: 2px solid {color};
      border-top-color: transparent;
  "
/>

<style>
	.circle-spinner {
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
