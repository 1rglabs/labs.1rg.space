<script>

  import CaseStudyBadge from '$lib/components/CaseStudyBadge.svelte';
  import bike_brigade from '$lib/who-we-work-with/bike_brigade.json';
  import nfftt from '$lib/who-we-work-with/not_far_from_the_tree.json';

  const pages = [
    bike_brigade,
    nfftt
  ];
</script>

<section class="flex flex-col justify-center items-center p-10 bg-black md:p-20 text-center text-white">
  <p class="max-w-6xl text-5xl xl:text-8xl font-bold leading-normal">Who we work with</p>
</section>

<section class="blurred-banner" >
  <p class="max-w-6xl text-center text-md md:text-lg lg:text-xl xl:text-2xl font-medium leading-normal filter:brightness(100%)">
    We take pride in our diverse client portfolio, working with organizations that are making a meaningful difference.
  </p>

  <div class="text-2xl lg:text-3xl my-8">✱</div>

  <p class="max-w-2xl">
    We have collaborated with a wide range of non-profits, social impact organizations, and businesses. Through our strategic partnerships, we have helped our clients overcome challenges, streamline their operations, and maximize their impact on the communities they serve.
  </p>
  <p class="mt-2">
    Explore our case studies below to see the transformative work we have accomplished together.
  </p>
</section>

<section class="bg-white p-12 flex flex-col md:flex-row">
  {#each pages as page}
    <div class="w-full md:w-1/2 p-4">
      <CaseStudyBadge data={page}/>
    </div>
  {/each}
</section>
