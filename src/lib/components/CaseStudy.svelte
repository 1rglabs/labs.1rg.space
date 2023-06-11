<script>
    import {  Icon, ChevronDoubleLeft } from "svelte-hero-icons";

	export let data;
</script>

<main>
	<section
		class="flex flex-col justify-center items-center p-10 bg-black md:p-20 text-center text-white"
	>
		<p class="max-w-6xl text-5xl xl:text-8xl font-bold leading-normal flex items-center">
			<a class="text-mediumorchid hover:text-darkseagreen" href="/who-we-work-with"><Icon src={ChevronDoubleLeft} solid class="h-10 w-10 xl:h-18 xl:w-18"/></a> {data.title}
		</p>
	</section>

	<!-- Who -->
	<section class="p-12 max-w-4xl m-auto flex items-start case-study-page">
		<div
			class="text-xl font-bold  mb-8 tracking-wider bg-black text-white p-2 inline-block mr-8 w-1/4"
		>
			Who
		</div>
		<div class="w-3/4">{@html data.who}</div>
	</section>

	<hr />

	<!-- Challenges -->
	<section class="p-12 max-w-4xl m-auto flex items-start case-study-page">
		<div
			class="text-xl font-bold  mb-8 tracking-wider bg-black text-white p-2 inline-block mr-8 w-1/4"
		>
			Challenges
		</div>
		<div class="flex flex-col w-3/4">
			{#each data.challenges as challenge}
				<div>{@html challenge.content}</div>
			{/each}
		</div>
	</section>

	<hr />

	<!-- Impact -->
	<section class="p-12 max-w-4xl m-auto flex items-start case-study-page">
		<div
			class="text-xl font-bold  mb-8 tracking-wider bg-black text-white p-2 inline-block mr-8 w-1/4"
		>
			Impact
		</div>
		<div class="flex flex-col w-3/4">
			{#each data.impact as impact}
				{#if impact.type == 'text'}
					<div class="mb-8">{@html impact.content}</div>
				{/if}
			{/each}
		</div>
	</section>

	<section class="max-w-4xl m-auto mb-32">
		{#each data.images as img} <img alt="case-study" src={img} /> {/each}
	</section>
</main>
