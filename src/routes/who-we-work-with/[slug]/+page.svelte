<script>
    /** @type {import('./$types').PageData} */
    export let data;
  import CaseStudy from '$lib/components/CaseStudy.svelte';
</script>

<svelte:head>
  <title>Case Study - Bike Brigade</title>
</svelte:head>

<CaseStudy data={data}/>
