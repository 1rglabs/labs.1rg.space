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

<!-- <SectionHeading sectionTitle="Why we exist" isReversed={true}>
  
</SectionHeading> -->

<!-- Our Framework -->
<SectionHeading sectionTitle="How we work">
  <p class="mb-8 xl:mt:16">
    1RG Labs provides socially impactful organizations with the kind of software & data expertise that's normally reserved for Big Tech.
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

<section class="flex flex-col text-white bg-black xl:items-stretch xl:flex-row pb-24">
  <div class="p-12 space-y-5 text-md xl:text-lg xl:w-1/2 ">
    <p>
      1RG Labs was founded by <a class="underline hover:text-mediumorchid" href="https://max.computer" >Max Veytsman</a > and <a href="https://words.serenaperuzzo.com/" class="underline hover:text-mediumorchid" >Serena Peruzzo</a>.
    </p>
    <p>
      Max has over a decade of experience in tech, having worked as a cybersecurity consultant, a startup CEO and a software engineer. Most recently he was a Senior Engineer at GitHub, and the Founding Engineer at Bike Brigade where he developed their dispatching platform. Serena and Max share a passion for using their technical skills to help organizations that serve their communities.
    </p>
    <p>
      Serena has worked both in academia as a machine learning researcher and in the industry as a data science consultant on the Australian, British and Canadian markets. Most recently she was a Senior Data Scientist at Shopify where she built data products to influence platform improvement and program decisions. She has a passion for travel, photography, and public speaking.
    </p>
  </div>
  <div class="flex justify-center p-12 xl:p-20 -mt-20 xl:w-1/2 xl:mt-0">
    <img class="object-cover object-center h-full xl:w-full" src={portrait} alt="Max & Serena"/>
  </div>
</section>
