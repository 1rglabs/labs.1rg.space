<script>
	import Logo from '$lib/components/Logo.svelte';
	import HamburgerButton from '$lib/components/HamburgerButton.svelte';
	import Menu from './Menu.svelte';

	let menuOpen = false;
</script>

<header class="flex h-20 bg-mediumorchid">
	<a class="text-white hover:text-darkseagreen" href="/">
		<Logo class="justify-center h-20 lg:ml-24" />
	</a>
	<div class="flex items-center justify-end w-full">
		<div
			class="text-white mr-2 md:mr-8 flex items-center text-lg md:text-xl font-bold uppercase space-x-2"
		>
			<a class="hover:text-darkseagreen" href="https://words.1rg.space/">Words</a>
			<a class="hover:text-darkseagreen" href="https://1rg.space/">Space</a>
			<a class="hover:text-darkseagreen" href="https://incubator.1rg.space/">Incubator</a>
		</div>
		<HamburgerButton on:click={() => (menuOpen = true)} />
	</div>
</header>
<Menu bind:open={menuOpen} />
