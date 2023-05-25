<script lang="ts">
	import walking from '$lib/images/1rg/047A6102.jpg';
	import space1 from '$lib/images/1rg/047A6149.jpg';
	import space2 from '$lib/images/1rg/047A6197.jpg';
	import space3 from '$lib/images/1rg/047A6548.jpg';
	import meeting from '$lib/images/1rg/047A6732.jpg';
	let images = [walking, space1, space2, space3, meeting];

	$: style = `
  #animated-logo {
    animation: ${1.5 * images.length}s infinite shuffle-backgrounds steps(2, jump-none);
  }
  @keyframes shuffle-backgrounds {
    from { background-color: white;	}
    to { background-color: white; }
    ${keyframes(images)}
  }`;

	function keyframes(images: string[]): string {
		const step = 100 / (images.length + 1);
		return images
			.map((path, i) => `${step * (i + 1)}% { background-image: url('${path}'); }`)
			.join('\n');
	}
</script>

<svelte:element this="style">{style}</svelte:element>

<div class="relative w-full bg-black ">
	<div class="text-xl font-black tracking-wider md:text-4xl xl:text-7xl">
		<div class="absolute top-0 right-8 md:right-10 xl:right-20">1RG</div>
		<div class="absolute top-0 right-2 xl:right-4">•</div>
		<div
			class="absolute origin-left rotate-90 top-4 md:top-6 md:-right-32 xl:top-10 -right-18 xl:-right-56"
		>
			SPACE
		</div>
		<div class="absolute bottom-0 rotate-180 left-8 md:left-12 xl:left-20">1RG</div>
		<div class="absolute bottom-0 left-2 md:left-4">•</div>
		<div
			class="absolute origin-left -rotate-90 bottom-4 md:bottom-6 left-4 md:left-6 xl:left-9 xl:bottom-10"
		>
			SPACE
		</div>
	</div>
	<div class="w-full bg-center bg-no-repeat bg-cover" id="animated-logo">
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 2202.72 1070.42"
			xml:space="preserve"
		>
			<rect x="-7.64" y="-7.79" width="2211" height="1079" mask="url(#logo)" />
			<mask id="logo">
				<rect x="-7.64" y="-7.79" width="2211" height="1079" fill="white" />
				<g fill="black">
					<path
						d="M798.35,107.55l3.74,3.74v634.12l-3.74,3.74H484.09l-3.75-3.74V429.29H162.36v-1.87
      c211.06-213.25,318.3-319.87,321.74-319.87H798.35z"
					/>
					<path
						d="M894.76,107.55h314.26l108.49,106.62h102.88l3.75,3.74V320.8l104.75,106.62v1.87h-314.26l316.12,318
      l-1.87,1.87H894.76l-3.74-3.74V111.29L894.76,107.55z M1265.14,268.42v104.75h104.75V268.42H1265.14z"
					/>
					<path
						d="M1615.74,321.27h420.88l3.74,3.74v634.13l-3.74,3.74h-207.64l-3.74-3.74l209.5-209.51h-419.01l-3.75-3.74V325
      L1615.74,321.27z"
					/>
				</g>
				<g fill="black">
					<path
						d="M800.98,110.18l3.74,3.74v634.12l-3.74,3.74H486.73l-3.75-3.74V431.92H164.99v-1.87
          c211.06-213.25,318.3-319.87,321.74-319.87H800.98z"
					/>
					<path
						d="M897.39,110.18h314.26l108.49,106.62h102.88l3.75,3.74v102.88l104.75,106.62v1.87h-314.26l316.12,318
          l-1.87,1.87H897.39l-3.74-3.74V113.93L897.39,110.18z M1267.77,271.05v104.75h104.75V271.05H1267.77z"
					/>
					<path
						d="M1618.37,323.9h420.88l3.74,3.74v634.13l-3.74,3.74h-207.64l-3.74-3.74l209.5-209.51h-419.01l-3.75-3.74
          V327.64L1618.37,323.9z"
					/>
				</g>
			</mask>
		</svg>
	</div>
</div>
