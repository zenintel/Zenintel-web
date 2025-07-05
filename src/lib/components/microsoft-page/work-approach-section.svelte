<script lang="ts">
  import Collaborator from "$lib/icons/microsoft/collaborator.svelte";
  import Customization from "$lib/icons/microsoft/customization.svelte";
  import Seamless from "$lib/icons/microsoft/seamless.svelte";
  import Supporting from "$lib/icons/microsoft/supporting.svelte";
  import type { Component } from "svelte";

  type PropsType = {
    icon: Component;
    title: string;
    description: string;
  };
  const steps: PropsType[] = [
    {
      title: "Collaborative Partnership",
      description:
        "We work closely with your team to understand your unique challenges and goals, ensuring that our solutions align perfectly with your business needs.",
      icon: Collaborator,
    },
    {
      title: "Customized Solutions",
      description:
        "We design and implement Microsoft solutions that are tailored to fit your specific business processes, optimizing efficiency and performance.",
      icon: Customization,
    },
    {
      title: "Seamless Integration",
      description:
        "Our team ensures a smooth and hassle-free integration of Microsoft technologies, minimizing disruption and maximizing productivity from day one.",
      icon: Seamless,
    },
    {
      title: "Ongoing Support & Optimization",
      description:
        "We provide continuous support and regular updates to keep your systems running at peak performance, adapting to your evolving business requirements.",
      icon: Supporting,
    },
  ];
</script>

<section class="px-4 md:px-12 lg:px-24 py-12 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto">
    <p class="text-sm text-blue-600 font-semibold uppercase tracking-widest">
      Our Work Approach
    </p>
    <h2 class="text-2xl md:text-4xl font-bold mb-10 mt-2 max-w-3xl">
      Empowering businesses with scalable, automated, & data-driven solutions using Microsoft Power Platform
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
