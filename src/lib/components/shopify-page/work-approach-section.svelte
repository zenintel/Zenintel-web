<script lang="ts">
  import Design from "$lib/icons/shopify/design.svelte";
  import Optimization from "$lib/icons/shopify/optimization.svelte";
  import Planning from "$lib/icons/shopify/planning.svelte";
  import Testing from "$lib/icons/shopify/testing.svelte";
  import type { Component } from "svelte";

  type PropsType = {
    icon: Component;
    title: string;
    description: string;
  };
  const steps: PropsType[] = [
    {
      title: "Strategy & Planning",
      description:
        "We begin by understanding your business goals, target audience, and eCommerce needs. Our team develops a customized roadmap to ensure a smooth and successful project execution.",
      icon: Planning,
    },
    {
      title: "Design & Development",
      description:
        "With a focus on user experience, we design and build tailored Shopify stores that reflect your brand’s unique identity. Our development process ensures high performance, scalability, and responsiveness.",
      icon: Design,
    },
    {
      title: "Integration & Optimization",
      description:
        "We integrate your store with essential third-party tools and optimize for maximum speed and performance. Every integration is carefully planned to streamline operations and boost conversions.",
      icon: Optimization,
    },
    {
      title: "Testing & Launch",
      description:
        "Before going live, we rigorously test every aspect of your store to ensure everything functions flawlessly. From security to user experience, we ensure your Shopify store is ready for a successful launch.",
      icon: Testing,
    },
  ];
</script>

<section class="px-4 md:px-12 lg:px-24 py-12 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto">
    <p class="text-sm text-blue-600 font-semibold uppercase tracking-widest">
      Our Work Approach
    </p>
    <h2 class="text-2xl md:text-4xl font-bold mb-10 mt-2 max-w-3xl">
      A Strategy-First Approach to Shopify Success
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each steps.slice(0, 3) as step}
        <div
          class="bg-white rounded-xl flex flex-col gap-12 border border-gray-200 p-6 hover:shadow-lg transition-all"
        >
          <div class="text-4xl mb-4"><step.icon /></div>
          <div>
            <h3 class="text-lg font-semibold mb-2">{step.title}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <div
      class="bg-blue-50 flex-col items-start lg:flex-row-reverse mt-6 justify-between lg:items-center rounded-xl p-6 flex gap-4 border border-blue-200"
    >
      <div class="text-4xl"><svelte:component this={steps[3].icon} /></div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{steps[3].title}</h3>
        <p class="text-sm text-gray-700 leading-relaxed max-w-2xl">
          {steps[3].description}
        </p>
      </div>
    </div>
  </div>
</section>
