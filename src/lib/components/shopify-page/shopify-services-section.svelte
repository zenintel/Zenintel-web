<script lang="ts">
  
  import Rectangle from "$lib/icons/shopify/Rectangle.svelte";
  import ShopifyApp from "$lib/icons/shopify/shopify-app.svelte";
  import ShopifyIntegration from "$lib/icons/shopify/shopify-integration.svelte";
  import ShopifyMigration from "$lib/icons/shopify/shopify-migration.svelte";
  import ShopifyStore from "$lib/icons/shopify/shopify-store.svelte";
  import ShopifyTheme from "$lib/icons/shopify/shopify-theme.svelte";
  import type { Component } from "svelte";

  type PropsType = {
    icon: Component;
    title: string;
    description: string;
  };

  const services: PropsType[] = [
    {
      icon: Rectangle,
      title: "Shopify Headless E-commerce",
      description:
        "Unlock the Power of Headless Shopify. Seamlessly integrate and customize your store for a fast, flexible, and unique eCommerce experience. Enhance performance, scalability, and user engagement with a headless architecture tailored to your needs.",
    },
    {
      icon: ShopifyStore,
      title: "Shopify Store Development",
      description:
        "Build Your Dream Shopify Store. Custom-designed stores that perfectly align with your brand and boost sales. Fully optimized for performance, scalability, and exceptional user experiences. Empowering your business with a seamless, mobile-friendly design that converts visitors into loyal customers.",
    },
    {
      icon: ShopifyTheme,
      title: "Shopify Theme Development",
      description:
        "Create a Stunning Shopify Storefront. Tailored themes that capture your brand's essence and enhance customer experience. Responsive, mobile-optimized designs built for seamless navigation and higher conversions. Crafting an engaging shopping experience that drives both user satisfaction and sales growth.",
    },
    {
      icon: ShopifyApp,
      title: "Shopify App Development",
      description:
        "Enhance Your Shopify Store with Custom Apps. Tailored solutions to expand your store's capabilities and optimize operations. From unique features to seamless integrations, we help you deliver a smooth shopping experience. Boost sales, improve customer engagement, and increase efficiency with powerful apps.",
    },
    {
      icon: ShopifyIntegration,
      title: "Shopify Integration Services",
      description:
        "Seamless Shopify Integration for Your Business. Effortlessly connect your store with third-party tools, payment systems, and marketplaces. Our expert integration services enable smooth data flow and optimized operations. Boost efficiency, improve customer experience, and scale your business with powerful integrations.",
    },
    {
      icon: ShopifyMigration,
      title: "Migration to Shopify",
      description:
        "Effortless Migration to Shopify. Seamlessly move your store from any platform to Shopify with minimal downtime. Our team ensures a smooth transition, preserving your data, design, and SEO rankings. Start selling on Shopify quickly and efficiently, with no disruption to your business.",
    },
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div class="max-w-7xl mx-auto">
    <!-- Header section -->
    <div class=" text-center lg:text-left mb-12 lg:mb-16">
      <h2 class="text-sm font-bold text-primary mb-4">WHAT WE DO?</h2>
      <h3 class="text-2xl  lg:text-4xl font-semibold mb-6">
        Transforming Your Shopify Experience
      </h3>
      <p class="hidden lg:block max-w-3xl text-left lg:text-lg ">
        Custom-built stores optimized for performance, scalability, and customer
        engagement. We ensure your eCommerce platform stands out and drives
        success in a competitive market.
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
