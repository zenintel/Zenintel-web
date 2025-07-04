<script>
  import GearLogo from "$lib/images/product/gear-logo.png";
  import Product from "$lib/images/product/product.png";
  import RightArrow from "$lib/icons/microsoft/right-arrow.svelte";
</script>

<section class="bg-[#E5F6FF] flex justify-center min-h-[94dvh] ">
  <div class="px-6 max-w-7xl mt-7 lg:mt-24 w-full">
    <div class="flex flex-col lg:flex-row lg:items-center lg:gap-12">
      <div class="lg:w-1/2 flex flex-col justify-center lg:order-1">
        <div
          class="flex items-center justify-center lg:justify-start bg-transparent gap-2 rounded-[50px] border border-gray-300 py-1.5 px-4 w-fit mx-auto lg:mx-0"
        >
          <div class="w-6 h-6">
            <img
              src={GearLogo}
              alt="sale logo"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-[#666] text-xs font-bold uppercase tracking-wider">
            PRODUCT ENGINEERING
          </p>
        </div>

        <!-- Main content -->
        <h2
          class="text-center lg:text-left text-2xl md:text-5xl font-bold text-[#333] mt-4"
        >
         Product Engineering Services and Solutions
        </h2>

        <p
          class="text-center leading-snug lg:text-left font-light lg:text-lg mt-4 md:mt-6"
        >
          Our Product Engineering Services are designed to bring your ideas to life, from concept to deployment. We specialize in developing scalable, high-performance solutions tailored to your business needs, leveraging cutting-edge technologies and agile methodologies. Partner with us to accelerate innovation, enhance user experiences, and achieve a faster time to market.
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
        <img src={Product} alt="sale hero" class="w-full h-auto" />
      </div>
    </div>
  </div>
</section>
