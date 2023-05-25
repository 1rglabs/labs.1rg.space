
<script>
  export let sectionTitle;
  export let isReversed = false;
  let order = isReversed ? "order-1" : "order-1 lg:order-3";
</script>

<section class="flex flex-col lg:flex-row justify-center items-stretch">
	<div class="w-full lg:w-1/2 order-1 block lg:flex {order}">
		<div class="p-12 text-white bg-mediumorchid md:flex items-center justify-center w-full">
			<p class="text-lg leading-loose w-full md:text-xl lg:text-4xl xl:text-6xl md:leading-[4.5rem] xl:leading-none xl:tracking-widest font-semibold tracking-[.3em] text-center uppercase">
				{sectionTitle}
			</p>
		</div>
	</div>

	<div class="w-full lg:w-1/2 order-2 p-12 lg:p-20">
		<slot/>
	</div>
</section>
