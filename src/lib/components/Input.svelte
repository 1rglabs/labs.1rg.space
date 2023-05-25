<script lang="ts">
	export let name: string | undefined = '';
	export let type: string | undefined = '';
	export let placeholder: string | undefined = '';

	let baseClasses =
		'px-3 py-1 text-base text-black placeholder-gray-600 border-b-[0.5px] border-gray-600 border-b-gray-700 focus:border-[0.5px] bg-darkseagreen focus:outline-none ';

	$: classes = `${baseClasses} ${$$props.class || ''}`;
</script>

<input
	{name}
	{type}
	{placeholder}
	class={classes}
/>
