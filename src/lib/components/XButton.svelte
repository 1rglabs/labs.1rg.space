<script lang="ts">
	let baseClasses = 'flex items-center justify-center w-20 h-20 bg-darkseagreen hover:bg-white';

	$: classes = `${baseClasses} ${$$props.class || ''}`;
</script>

<button type="button" class={classes} on:click>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-16 h-16"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />ˇ
	</svg>
</button>
