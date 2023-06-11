<script>
  import portrait from '$lib/images/portraits/047A5808.jpg';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte'

  let runFade = false;
  let showArrow = false;
  setTimeout(() => {runFade = true}, 2000)
  setTimeout(() => {runFade = false}, 8000)
  onMount(() => {
    showArrow = document.getElementById("hero").offsetHeight > 700
  })

</script>

<svelte:head>
  <title>1RG Labs</title>
</svelte:head>

<div id="hero" class="flex flex-col bg-black ">
  <div class="w-full flex flex-col justify-center items-center bg-black  md:h-screen relative">
    <div class="text-white mt-16 md:mt-0 text-4xl lg:text-6xl xl:text-10xl font-bold mb-12">1RG Labs</div>
    <section class="flex justify-center bg-black pb-24">
      <p class="max-w-4xl text-md md:text-lg xl:text-2xl font-light leading-normal text-center text-gray-300 px-12">
        1RG Labs helps community minded organizations achieve their missions with technology.
      </p>
    </section>
  </div>
</div>

<!-- Our Framework -->
<SectionHeading sectionTitle="A technology partner for mission driven organizations">
  <p class="mb-8 xl:mt:16">
    We provide socially impactful organizations with the kind of software & data expertise that's normally reserved for Big Tech.
  </p>
  <p class="mb-3">
    At the core of our method are regular check-ins which structure the rest of our work. Our team works across three pillars:
  </p>
    <ul class="list-disc ml-8 mb-8">
      <li>Engineering</li>
      <li>Data Science</li>
      <li>Product</li>
    </ul>
  <p>
    We scale our involvement over time based on our client's needs.
  </p>
</SectionHeading>
