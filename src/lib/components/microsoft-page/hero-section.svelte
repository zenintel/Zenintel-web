<script>
  import MicroSoftLogo from "$lib/images/microsoft-page/microsoft-logo.png";
  import Calendar from "$lib/icons/calendar.svelte";
  import Modal from "../modal/modal.svelte";

  let open = $state(false);
</script>

<section class="bg-[#FFF0ED] flex justify-center min-h-[94dvh] py-12">
  <div class="px-6 max-w-7xl mx-auto w-full lg:mt-24">
    <!-- Flex container for content and image -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:gap-12">
      <!-- Left content -->
      <div class="lg:w-1/2 flex flex-col justify-center">
        <!-- Logo badge -->
        <div
          class="flex items-center justify-center lg:justify-start bg-transparent gap-2 rounded-[50px] border border-gray-300 py-1.5 px-4 w-fit mx-auto lg:mx-0"
        >
          <div class="w-6 h-6">
            <img
              src={MicroSoftLogo}
              alt="microsoft logo"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-[#666] text-xs font-bold uppercase tracking-wider">
            MICROSOFT SERVICE
          </p>
        </div>

        <!-- Main content -->
        <h2
          class="text-center lg:text-left text-2xl md:text-5xl font-bold text-[#333] mt-4"
        >
          Microsoft 365 service provider
        </h2>

        <p
          class="text-center leading-snug lg:text-left font-light lg:text-lg mt-4 md:mt-6"
        >
          We specialize in creating seamless, customized Shopify stores that
          drive sales and enhance customer experiences. From store setup to
          theme design and app integrations, we help you build an online
          presence that stands out. Our team ensures your Shopify store is
          optimized for performance, scalability, and user engagement,
          empowering your business to thrive in the competitive eCommerce
          landscape.
        </p>

        <!-- Button -->
        <div class="flex justify-center lg:justify-start mt-10">
          <button
            class="bg-primary flex justify-center items-center gap-2 py-3 px-6 text-white rounded-xl hover:bg-opacity-90 transition-colors"
            onclick={() => (open = !open)}
          >
            <Calendar />
            Book a free call
          </button>
          <Modal bind:open />
        </div>
      </div>

      <div class="md:block mt-6 lg:w-2/3 h-full">
        <img
          src="https://i.postimg.cc/kX7H3N69/mircosoft-image.png"
          alt="Microsoft services"
        />
      </div>
    </div>
  </div>
</section>
