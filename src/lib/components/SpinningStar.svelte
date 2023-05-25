<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	import type { TransitionConfig, EasingFunction } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface RotateInParams {
		delay?: number;
		duration?: number;
		easing?: EasingFunction;
	}

	function rotateIn(
		_node: Element,
		{ delay = 0, duration = 400, easing = cubicOut }: RotateInParams = {}
	): TransitionConfig {
		return {
			delay,
			duration,
			easing,
			css: (t, u) => `
      transform-origin: center;
      transform: rotate3d(0,0,1,${t * 180}deg);
			opacity: ${1 - u}
      `
		};
	}

	let ready = false;

	onMount(() => (ready = true));

	let isInView: boolean;
</script>

<div
	class={$$props.class}
	use:inview={{ unobserveOnEnter: true }}
	on:enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
>
	{#if isInView}
		<svg
			in:rotateIn={{ duration: 2000, delay: 200 }}

			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 151 146"
		>
			<polygon
				points="151 51.008 132.865 20.699 92.154 45.094 92.895 0 58.105 0 58.475 45.094 17.765 20.699 0 51.008 40.341 73.185 0 94.992 17.765 125.301 58.475 100.906 58.105 146 92.895 146 92.154 101.276 132.865 125.301 151 94.992 110.659 73.185 151 51.008"
			/>
		</svg>
	{/if}
</div>
