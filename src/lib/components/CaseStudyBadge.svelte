<script>
  export let data;
</script>

<a href="/case-studies/{data.slug}">
  <div class="my-4 font-semibold text-lg md:text-xl">{data.title}</div>
  <img class="h-auto md:h-48 xl:h-96" src={data.logo} alt="{data.title} Logo">
</a>
