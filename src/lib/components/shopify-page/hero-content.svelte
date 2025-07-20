<script>
  import ShopifyLogo from "$lib/images/shopify/shopify-logo.png";
  import Modal from "../modal/modal.svelte";
  import Calendar from "$lib/icons/calendar.svelte";


  let open =$state(false)
</script>

<section class="bg-[#F2FFDC] flex justify-center min-h-[94dvh] ">
  <div class="px-6 max-w-7xl mt-7 lg:mt-24 w-full">
    <div class="flex flex-col lg:flex-row lg:items-center lg:gap-12">
      <div class="lg:w-1/2 flex flex-col justify-center lg:order-1">
        <div
          class="flex items-center justify-center lg:justify-start bg-transparent gap-2 rounded-[50px] border border-gray-300 py-1.5 px-4 w-fit mx-auto lg:mx-0"
        >
          <div class="w-6 h-6">
            <img
              src={ShopifyLogo}
              alt="sale logo"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-[#666] text-xs font-bold uppercase tracking-wider">
            SHOPIFY BUSINESS PARTNERS
          </p>
        </div>

        <!-- Main content -->
        <h2
          class="text-center lg:text-left text-2xl md:text-5xl font-bold text-[#333] mt-4"
        >
         Power Your E-Commerce Growth with a Trusted Shopify Partner
        </h2>

        <p
          class="text-center leading-snug lg:text-left font-light lg:text-lg mt-4 md:mt-6"
        >
          We specialize in creating seamless, customized Shopify stores that drive sales and enhance customer experiences. From store setup to theme design and app integrations, we help you build an online presence that stands out. Our team ensures your Shopify store is optimized for performance, scalability, and user engagement, empowering your business to thrive in the competitive eCommerce landscape.
        </p>

        <div class="flex justify-center lg:justify-start mt-10">
          <button
            class="bg-primary flex items-center justify-center gap-2 py-3 px-6 text-white rounded-xl hover:bg-opacity-90 transition-colors"
            onclick={()=>{open=!open}}
          >
           <Calendar />
            Book a free call
           
          </button>
          <Modal bind:open/>
        </div>
      </div>

      <div class="md:block mt-6 lg:w-1/2 h-full lg:order-2">
        <img src='https://i.ibb.co/PZsT93dB/shopify.png' alt="sale hero" class="w-full h-auto" />
      </div>
    </div>
  </div>
</section>
