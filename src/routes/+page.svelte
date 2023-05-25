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
        1RG Labs exists to provide NGOs, non-profits, and socially impactful organizations with the kind of software & data expertise that's normally reserved for Big Tech.
      </p>
    </section>
  </div>
</div>

<!-- Our Framework -->
<SectionHeading sectionTitle="Our Framework" >
  <p class="mb-12 xl:mt:16">
    1RG Labs operates differently than a typical consultancy or design studio. Our core belief is that technology is an amplifier that allows organizations to maximize their impact, but deciding how to use technology requires trusted expertise and data-driven decision making.
  </p>
  <p class="mb-12">
    Our experience has been that there is a disconnect between the intuitions of consumers and producers of technology - on the one hand, things that appear to be difficult and expensive to a client are known to be easy and cheap to a technologist. On the other hand, technologists tend to overemphasize technical solutions to social problems.
  </p>
  <p class="mb-12">
    We seek to bridge this gap by embedding with organizations that don’t have internal expertise to be their fractional tech team. Our focus is on long-term relationships, providing data insights and expertise to support decision making, and using our close and ongoing relationship with clients to find and implement low-effort/high-impact solutions.
  </p>
</SectionHeading>


<!-- Three Pillars -->
<SectionHeading sectionTitle="Three Pillars" isReversed={true}>
  <p>The 1RG Labs framework is centered around three pillars:</p>
  <p class="mb-12 mt-8">
    Domain knowledge: our team is embedded in the organization, with regular check-ins serving as a primary touch point to gain deep understanding of the mission, priorities, and pain points of the organization as it operates day to day.
  </p>

  <p class="mb-12">
    Technical excellence: our team collectively has two decades of experience with experience both in data science and software development, with a track record for building products and leveraging technology to help organizations achieve their missions.
  </p>
  <p class="mb-12">
    Prioritization under constraints: mastery of technology and tooling, paired with a deep understanding of the organizations we work with, allow our team to identify the areas where these can be most effective, given the priorities of the organization and the resource constraints.
  </p>

  <p>
    The core of this embedding is a biweekly check-in with the client which structures the rest of our work. The goal is to learn what’s going on in the organization, provide advice, and find ways that we can apply our skills to help that the client might not have anticipated.
  </p>
</SectionHeading>


<section class="flex flex-col text-white bg-black xl:items-stretch xl:flex-row pb-24">
  <div class="p-12 space-y-5 text-md xl:text-lg xl:w-1/2 ">
    <p>
      1RG Labs was founded by <a class="underline hover:text-mediumorchid" href="https://max.computer" >Max Veytsman</a > and <a href="https://words.serenaperuzzo.com/" class="underline hover:text-mediumorchid" >Serena Peruzzo</a>.
    </p>
    <p>
      Max has over a decade of experience in tech, having worked as a professional hacker, a startup CEO and a software engineer. Most recently he was a Senior Engineer at GitHub, and the Founding Engineer at Bike Brigade where he developed their dispatching platform. Serena and Max share a passion for using their technical skills to help organizations that serve their communities.
    </p>
    <p>
      Serena has worked both in academia as a machine learning researcher and in the industry as a data science consultant on the Australian, British and Canadian markets. Most recently she was a Senior Data Scientist at Shopify where she built data products to influence platform improvement and program decisions. She has a passion for travel, photography, and public speaking.
    </p>
  </div>
  <div class="flex justify-center p-12 xl:p-20 -mt-20 xl:w-1/2 xl:mt-0">
    <img class="object-cover object-center h-full xl:w-full" src={portrait} alt="Max & Serena"/>
  </div>
</section>
