<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<!-- TODO padding after font? -->
<footer class="flex flex-col mb-2 text-black md:flex-row min-h-40 ">
	<div class="flex flex-col w-full lg:flex-row md:pl-0 md:pt-0 bg-darkseagreen p-7">
		<div class="font-black uppercase text-8xl xl:text-9xl lg:w-1/2">Join the list</div>
		<div class="flex flex-col justify-end flex-1 space-y-5">
			<div class="text-lg font-bold tracking-widest uppercase">
				<p>subscribe for exclusive</p>
				<p>updates on our events</p>
			</div>
			<div class="flex flex-col flex-1 md:flex-none md:flex-row md:items-end">
				<div class="mt-2">
					<Button href="https://1rg.space/subscribe" class="px-1 mt-5 text-4xl uppercase " hoverColor="white">join the list</Button>
				</div>
			</div>
		</div>
	</div>

	<div class="flex items-center p-10 bg-stone-50">
		<ul class="text-lg font-bold leading-8 tracking-wider uppercase whitespace-nowrap ">
			<li><a class="hover:text-mediumorchid" href="/memberships">Memberships</a></li>
			<li><a class="hover:text-mediumorchid" href="/events">Events</a></li>
			<li><a class="hover:text-mediumorchid" href="/about">About</a></li>
			<li><a class="hover:text-mediumorchid" href="/contact">Contact</a></li>
			<li><a class="hover:text-mediumorchid" href="/contact">Member Space</a></li>
		</ul>
	</div>
</footer>
