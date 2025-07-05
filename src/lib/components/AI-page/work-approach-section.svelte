<script lang="ts">
  import Bento from "$lib/icons/AI/bento.svelte";
  import Dots from "$lib/icons/AI/dots.svelte";
  import Gear from "$lib/icons/AI/gear.svelte";
  import Refresh from "$lib/icons/AI/refresh.svelte";
  import Upward from "$lib/icons/AI/upward.svelte";


  import type { Component } from "svelte";

  type PropsType = {
    icon: Component;
    title: string;
    description: string;
  };
  const steps: PropsType[] = [
    {
      title: "Understanding Your Business Needs",
      description:
        "We work closely with you to deeply understand your unique challenges and goals, ensuring our AI solutions are aligned with your business vision.",
      icon: Upward,
    },
    {
      title: "Customized Solution Design",
      description:
        "Our experts design tailored NLP and Computer Vision models, using cuttingedge technology to solve your specific problems with precision and efficiency.",
      icon: Bento,
    },
    {
      title: "Agile Development",
      description:
        "We adopt an agile approach, ensuring flexibility and adaptability with iterative feedback, quick adjustments, and timely delivery of your AI solution.",
      icon: Dots,
    },
    {
      title: "Seamless Integration",
      description:
        "Our solutions integrate smoothly into your existing systems, enhancing scalability and efficiency without disrupting your current workflows.",
      icon: Refresh,
    },
       {
      title: "Ongoing Support",
      description:
        "We provide continuous monitoring, updates, and optimizations, ensuring your solutions perform optimally and stay ahead of evolving business needs.",
      icon: Gear,
    },
  ];
</script>

<section class="px-4 md:px-12 lg:px-24  py-12 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto">
    <p class="text-sm text-blue-600 font-semibold uppercase tracking-widest">
      Our Work Approach
    </p>
    <h2 class="text-2xl md:text-4xl font-bold mb-10 mt-2 max-w-3xl">
      Find the way forward for your business
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
<div class="flex flex-col lg:flex-row gap-6">
 <div
      class="bg-white flex-col items-start lg:flex-row-reverse mt-6 justify-between lg:items-center rounded-xl p-6 flex gap-4  border border-gray-200"
    >
      <div class="text-4xl"><svelte:component this={steps[3].icon} /></div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{steps[3].title}</h3>
        <p class="text-sm text-gray-700 leading-relaxed max-w-2xl">
          {steps[3].description}
        </p>
      </div>
    </div>
        <div
      class="bg-white flex-col items-start lg:flex-row-reverse mt-6 justify-between lg:items-center rounded-xl p-6 flex gap-4 border border-gray-200"
    >
      <div class="text-4xl"><svelte:component this={steps[4].icon} /></div>
      <div>
        <h3 class="text-lg font-semibold mb-2">{steps[4].title}</h3>
        <p class="text-sm text-gray-700 leading-relaxed max-w-2xl">
          {steps[3].description}
        </p>
      </div>
    </div>
</div>
   
  </div>
</section>
