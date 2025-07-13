<script>
  import saleLogo from "$lib/images/sales-page/sales-force.png";
  import saleHero from "$lib/images/sales-page/sales-hero.png";
  import RightArrow from "$lib/icons/microsoft/right-arrow.svelte";
</script>

<section class="bg-[#CCEFFF] flex  justify-center">
  <div class="px-6 max-w-7xl mt-7 lg:mt-0 w-full">
    <div class="flex flex-col lg:flex-row lg:items-center lg:gap-12">
      <div class="lg:w-1/2 flex flex-col justify-center lg:order-1">
        <div
          class="flex items-center justify-center lg:justify-start bg-transparent gap-2 rounded-[50px] border border-gray-300 py-1.5 px-4 w-fit mx-auto lg:mx-0"
        >
          <div class="w-6 h-6">
            <img
              src={saleLogo}
              alt="sale logo"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-[#666] text-xs font-bold uppercase tracking-wider">
            SALESFORCE
          </p>
        </div>

        <!-- Main content -->
        <h2
          class="text-center lg:text-left text-2xl md:text-5xl font-bold text-[#333] mt-4"
        >
          Unleash the Full Potential of Salesforce with Our Expertise
        </h2>

        <p
          class="text-center leading-snug lg:text-left font-light lg:text-lg mt-4 md:mt-6"
        >
        We offer end-to-end Salesforce services, including setup, customization, and integration, tailored to your business needs. Our team ensures smooth migrations, real-time data insights, and ongoing support to help you get the most out of Salesforce. Let us simplify your processes and enhance customer experiences.
        </p>

        <div class="flex justify-center lg:justify-start mt-10">
          <button
            class="bg-primary flex gap-2 py-3 px-6 text-white rounded-xl hover:bg-opacity-90 transition-colors"
          >
            Explore now
            <RightArrow />
          </button>
        </div>
      </div>

      <div class="md:block mt-6 lg:w-1/2 h-full lg:order-2">
        <img src={saleHero} alt="sale hero" class="w-full h-auto" />
      </div>
    </div>
  </div>
</section>