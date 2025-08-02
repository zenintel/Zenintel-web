
<script lang="ts">
	import Arrows from "$lib/icons/arrows.svelte";
    import BoxCircle from "$lib/icons/box-circle.svelte";
	import Packman from "$lib/icons/packman.svelte";
interface EngagementModel {
    title: string;
    description: string;
    icon?: typeof Arrows; 
  }
  const models:EngagementModel[] = [
    {
      title: "Extended Team Model (ETM)",
      description: 'Maximize your project\'s success with our Extended Team Model (ETM). We integrate seamlessly with your in-house team, providing skilled experts to extend your capabilities, drive efficiency, and accelerate delivery, all while maintaining flexibility and cost-effectiveness.',
      icon: Arrows  
    },
    {
      title: "Fixed Bid Model",
      description: "Achieve clear, predictable outcomes with our Fixed Bid Model. We provide defined project scopes, timelines, and budgets, ensuring transparency and on-time delivery without unexpected costs, tailored to meet your specific business needs.",
     icon:BoxCircle 
    },
    {
      title: "Time and Material Model",
      description: "Gain flexibility and control with our Time and Material model. Pay for the actual work done, allowing for scalable and adaptable solutions that evolve with your project's needs, ensuring high-quality results and efficient resource use.",
     icon:Packman
    }
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9F9]">
  <div class="max-w-6xl mx-auto">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-primary mb-4 text-xs font-bold ">ENGAGEMENT MODEL</h1>
      <p class="mx-auto max-w-4xl text-2xl md:text-4xl font-bold">
        Flexible partnerships, maximum impact. Choose the right model to scale your success
      </p>
    </div>

    <!-- Models Grid -->
    <div class="grid grid-cols-1  md:grid-cols-3 gap-8">
      {#each models as model}
        <div class="bg-white p-4 rounded-2xl lg:p-8  hover:shadow-lg transition-all duration-300">
          <div class="text-4xl mb-4"> <svelte:component this={model.icon} /></div>
          <div class="h-[1px] w-full bg-[#E5E7EB] my-6"></div>
          <h3 class="text-sm font-semibold text-gray-800 mb-4">{model.title}</h3>
          <p class=" mb-6">{@html model.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

