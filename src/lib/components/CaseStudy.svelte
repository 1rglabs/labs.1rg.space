<script>
  export let data;
</script>


<section class="flex flex-col justify-center items-center p-10 bg-black md:p-20 text-center text-white">
	<p class="max-w-6xl text-5xl xl:text-8xl font-bold leading-normal">{data.title}</p>
</section>

<!-- Who -->
<section class="p-12 max-w-4xl m-auto flex items-start">
  <div class="text-xl font-bold  mb-8 tracking-wider bg-black text-white p-2 inline-block mr-8 w-1/4">Who</div>
  <div class="w-3/4"> {@html data.who} </div>
</section>

<hr/>

<!-- Challenges -->
<section class="p-12 max-w-4xl m-auto flex items-start">
  <div class="text-xl font-bold  mb-8 tracking-wider bg-black text-white p-2 inline-block mr-8 w-1/4">Challenges</div>
  <div class="flex flex-col w-3/4">
  {#each data.challenges as challenge}
    <div>{@html challenge.content}</div>
  {/each}
  </div>
</section>

<hr/>

<!-- Impact -->
<section class="p-12 max-w-4xl m-auto flex items-start">
  <div class="text-xl font-bold  mb-8 tracking-wider bg-black text-white p-2 inline-block mr-8 w-1/4">Impact</div>
  <div class="flex flex-col w-3/4">
  {#each data.impact as impact}
    {#if impact.type == "text"}
    <div class="mb-8">{@html impact.content}</div>
    {/if}

    {#if impact.type == "image"}
    <img alt="case-study" src={impact.content}/>
    {/if}
  {/each}
  </div>


</section>
