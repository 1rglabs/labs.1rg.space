<script>

  import CaseStudyBadge from '$lib/components/CaseStudyBadge.svelte';
  import bike_brigade from '$lib/case-studies/bike_brigade.json';
  import nfftt from '$lib/case-studies/not_far_from_the_tree.json';

  const pages = [
    bike_brigade,
    nfftt
  ];
</script>

<section class="flex flex-col justify-center items-center p-10 bg-black md:p-20 text-center text-white">
  <p class="max-w-6xl text-5xl xl:text-8xl font-bold leading-normal">Case Studies</p>
</section>

<section class="blurred-banner" >
  <p class="max-w-6xl text-center text-md md:text-lg lg:text-xl xl:text-2xl font-bold leading-normal filter:brightness(100%)">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ac diam eget pretium. Proin est enim, venenatis id aliquam vel, dignissim id odio. Integer fringilla mauris sagittis mauris ultricies gravida.
  </p>

  <div class="text-4xl lg:text-6xl my-8 lg:my-8">*</div>

  <p class="max-w-2xl">
    Aliquam non ipsum eu urna consectetur finibus. Quisque tempor tellus ligula, nec blandit ex accumsan sed. Sed nec est eu orci gravida fringilla. Sed rutrum blandit luctus. Mauris est arcu, ultricies in odio vel, hendrerit placerat lorem. Vestibulum suscipit scelerisque blandit. Fusce commodo arcu a magna sagittis posuere. Vestibulum tempus quam ut nulla volutpat, nec viverra nisl varius.
  </p>
</section>

<section class="bg-white p-12 flex flex-col md:flex-row">
  {#each pages as page}
    <div class="w-full md:w-1/2 p-4">
      <CaseStudyBadge data={page}/>
    </div>
  {/each}
</section>
