<script lang="ts">
	let baseClasses =
		'flex items-center justify-center text-center w-20 h-20 bg-white hover:bg-darkseagreen';

	$: classes = `${baseClasses} ${$$props.class || ''}`;
</script>

<button type="button" class={classes} on:click>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-16 h-16"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
</button>
