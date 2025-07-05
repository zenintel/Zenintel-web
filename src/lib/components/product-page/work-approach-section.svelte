<script lang="ts">
  import Person from "$lib/icons/microsoft/collaborator.svelte";
  import Tailoring from "$lib/icons/sale-force/tailoring.svelte";
  import Seamless from "$lib/icons/microsoft/seamless.svelte";
  import Supporting from "$lib/icons/microsoft/supporting.svelte";
  import Verified from "$lib/icons/sale-force/verified.svelte";
    import Testing from "$lib/icons/shopify/testing.svelte";
  import type { Component } from "svelte";
  import Bento from "$lib/icons/sale-force/bento.svelte";
  import BarChart from "$lib/icons/sale-force/bar-chart.svelte";

  type PropsType = {
    icon: Component;
    title: string;
    description: string;
  };
  const steps: PropsType[] = [
    {
      title: "User-Centric Design",
      description:
        "We prioritize intuitive, scalable, and engaging user experiences, ensuring products align with business goals and customer needs",
      icon: Bento,
    },
    {
      title: "Agile Development",
      description:
        "Our iterative approach accelerates development cycles, allowing flexibility, continuous improvement, and faster time-to-market.",
      icon: BarChart,
    },
    {
      title: "Scalable Architecture",
      description:
        "We design robust, future-ready architectures that support growth, performance, and seamless integrations across platforms.",
      icon: Testing,
    },
    {
      title: "Quality & Reliability",
      description:
        "We ensure high performance, security, and reliability through rigorous testing, automation, and compliance with industry standards.",
      icon: Verified,
    },
       {
      title: "End-to-End Innovation",
      description:
        "From ideation to deployment, we bring cutting-edge technology, AI-driven insights, and automation to create transformative products.",
      icon: Tailoring,
    },
  ];
</script>

<section class="px-4 md:px-12 lg:px-24  py-12 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto">
    <p class="text-sm text-blue-600 font-semibold uppercase tracking-widest">
      Our Work Approach
    </p>
    <h2 class="text-2xl md:text-4xl font-bold mb-10 mt-2 max-w-3xl">
      Agile, solution-focused, and innovation-driven for Salesforce success.
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
