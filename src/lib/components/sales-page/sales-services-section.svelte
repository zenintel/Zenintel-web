<script lang="ts">
  
  import Rectangle from "$lib/icons/sale-force/rectangle.svelte"
  import Integration from "$lib/icons/sale-force/integration.svelte";
  import Star from "$lib/icons/sale-force/star.svelte";
  import Coin from "$lib/icons/sale-force/coin.svelte";
  import Gear from "$lib/icons/sale-force/gear.svelte";
  import Supporting from "$lib/icons/sale-force/support.svelte";
  import type { Component } from "svelte";
 

  type PropsType = {
    icon: Component;
    title: string;
    description: string;
  };

  const services: PropsType[] = [
    {
      icon: Rectangle,
      title: "Salesforce Development & Customization",
      description:
        "We design and develop customized Salesforce solutions tailored to your business processes. From workflow automation to UI enhancements, we ensure seamless functionality. Our solutions drive efficiency, improve user experience, and optimize operations.",
    },
    {
      icon: Integration,
      title: "Salesforce Integration",
      description:
        "We connect Salesforce with ERP, third-party applications, and enterprise systems to create a unified platform. Our integration services enhance data flow, automation, and collaboration. This ensures a seamless and efficient business ecosystem.",
    },
    {
      icon: Star,
      title: "Salesforce Lightning Migration",
      description:
        "We help businesses transition from Salesforce Classic to Lightning for a modern, faster, and more intuitive experience. Our migration process ensures minimal disruption and enhanced user adoption. With improved UI and productivity features, we unlock the full potential of Salesforce Lightning.",
    },
    {
      icon: Coin,
      title: "Salesforce AppExchange Development",
      description:
        "We build secure, scalable, and AppExchange-ready applications to extend Salesforce capabilities. Our experts ensure compliance with Salesforce standards for smooth deployment. These solutions help businesses enhance CRM functionalities and maximize Salesforce investments.",
    },
    {
      icon: Gear,
      title: "Configure-Price-Quote (CPQ) Solutions",
      description:
        "We streamline sales processes with Salesforce CPQ, automating pricing, quoting, and approval workflows. Our CPQ solutions enhance accuracy, reduce manual errors, and speed up deal closures. This enables businesses to manage complex pricing and quoting structures efficiently.",
    },
    {
      icon: Supporting,
      title: "Salesforce Support & Maintenance",
      description:
        "Our dedicated support team ensures Salesforce remains optimized, secure, and up-to-date. We provide ongoing system monitoring, performance tuning, and troubleshooting. With proactive maintenance, we help businesses maximize Salesforce performance and reliability.",
    },
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <!-- Header section -->
    <div class=" text-center lg:text-left mb-12 lg:mb-16">
      <h2 class="text-sm font-bold text-primary mb-4">WHAT WE DO?</h2>
      <h3 class="text-2xl  lg:text-4xl font-semibold mb-6">
        Empowering Growth with Salesforce Solutions.
      </h3>
      <p class="hidden lg:block max-w-3xl text-left lg:text-lg ">
        We specialize in Salesforce implementation, customization, and integration to streamline your business processes.   
      </p>
    </div>

    <!-- Services grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service}
        <div
          class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
        >
          <div class="flex flex-col gap-6">
            <service.icon />
            <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
              {service.title}
            </h3>
          </div>

          <p class="text-gray-600 mb-6 flex-grow">{service.description}</p>

        </div>
      {/each}
    </div>

    <!-- View all button -->
    <!-- <div class="text-center mt-12">
      <button class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
        View all
        <ArrowRight size={18} class="ml-2" />
      </button>
    </div> -->
  </div>
</section>
