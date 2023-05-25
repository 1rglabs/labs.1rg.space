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
	<div class="flex items-center  w-full">
		<ul class="text-white ml-8 flex items-center text-xl font-bold uppercase">
			<a href="/case-studies"><li class=""> Case Studies </li></a>
		  <li class="mx-4">|</li>
		  <a href="https://1rg.space/"><li class=""> 1RG.Space</li></a>
	  </ul>
	</div>
</header>
<Menu bind:open={menuOpen} />
