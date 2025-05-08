<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<!-- TODO padding after font? -->
<footer class="flex flex-col mb-2 text-black md:flex-row min-h-40 ">
	<div class="flex flex-col w-full lg:flex-row md:pl-0 md:pt-0 bg-darkseagreen p-7">
		<div class="font-black uppercase text-8xl xl:text-9xl lg:w-1/2"></div>
		<div class="flex flex-col justify-end flex-1 space-y-5"></div>
	</div>

	<div class="flex items-center p-10 bg-stone-50">
		<ul class="text-lg font-bold leading-8 tracking-wider uppercase whitespace-nowrap ">
			<li><a class="hover:text-mediumorchid" href="/about-us">About us</a></li>
			<li><a class="hover:text-mediumorchid" href="/who-we-work-with">Who we work with</a></li>
			<li><a class="hover:text-mediumorchid" href="/contact">Contact</a></li>
		</ul>
	</div>
</footer>
