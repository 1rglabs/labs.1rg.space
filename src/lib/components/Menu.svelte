<script lang="ts">
	import { browser } from '$app/environment';
	import XButton from '$lib/components/XButton.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { fly, fade } from 'svelte/transition';

	import { page } from '$app/stores';

	import IconMastadon from '~icons/fa6-brands/mastodon';
	import IconInstagram from '~icons/fa6-brands/instagram';
	import IconBluesky from '~icons/fa6-brands/bluesky';

	let innerWidth: number;

	let menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Who we work with', href: '/who-we-work-with' },
		{ name: 'Contact', href: '/contact' }
	];

	export let open = false;

	// Make the page not scroll if the menu is open
	$: if (browser) document.body.classList.toggle('overflow-hidden', open);
</script>

<svelte:window bind:innerWidth />

{#if open}
	<div
		class="fixed top-0 left-0 z-10 flex w-screen h-screen overflow-hidden bg-mediumorchid"
		transition:fly={{ opacity: 100, x: innerWidth, duration: 800 }}
	>
		<XButton on:click={() => (open = false)} class="absolute top-0 right-0" />

		<div class="flex items-center w-1/2 h-full">
			<ul
				class="flex flex-col justify-center px-5 py-12 text-3xl font-black tracking-wider uppercase lg:text-5xl h-3/4 lg:h-full xl:text-7xl"
			>
				{#each menuItems as menuItem}
					<div class="mb-8">
						<li class={$page.url.pathname === menuItem.href ? 'text-darkseagreen' : 'text-white'}>
							<a
								on:click={() => (open = false)}
								href={menuItem.href}
								class="hover:text-darkseagreen ">{menuItem.name}</a
							>
						</li>
					</div>
				{/each}
					<li class="flex space-x-2 text-white">
						<a
							class="hover:text-darkseagreen"
							href="https://bsky.app/profile/1rg.space"
							rel="me"
							target="_blank"
							title="Follow 1RG on Bluesky"
						>
							<IconBluesky />
						</a>
						<a
							class="	hover:text-darkseagreen"
							href="https://cosocial.ca/@1rg"
							rel="me"
							target="_blank"
							title="Follow 1RG on Mastadon"
						>
							<IconMastadon />
						</a>
						<a
							class="hover:text-darkseagreen"
							href="https://instagram.com/1rg.space"
							rel="me"
							target="_blank"
							title="Follow 1RG on Instagram"
						>
							<IconInstagram />
						</a>
					</li>
			</ul>
		</div>

		<div class="flex-col items-center justify-center hidden w-1/2 xl:flex">
			<Logo class="justify-center text-white h-96" />
			<div
				class="w-full p-5 text-2xl font-bold tracking-wider text-center uppercase bg-darkseagreen"
				transition:fade={{ duration: 1000 }}
			>
				Strategy ✱ Process ✱ Implementaton
			</div>
		</div>
	</div>
{/if}
