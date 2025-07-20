<script lang="ts">

const projects = [
    {
      img: "https://i.ibb.co/bpGBYyf/product-computer.png",
      alt: "stock",
      title:
        "We integrate with the best in e-commerce",
      link: "product-engineering/blog/forex-trading-solution",
    },
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8  bg-[#FFFFFF]">
     <div class="max-w-6xl mx-auto">
        <h2 class="text-xl lg:text-4xl font-bold text-gray-900 mb-2">Our developers work</h2>
    <p class="max-w-4xl mb-6 text-base leading-relaxed">
      Our developers work with a focus on innovation, quality, and efficiency, crafting solutions that meet your business goals. With expertise in the latest technologies, they ensure seamless functionality and scalable growth for your products.
    </p>
        <div class="bg-[#F8F9FA] rounded-lg overflow-hidden shadow mb-6 md:flex-row flex-col lg:flex ">
      <img
        src={projects[0].img}
        alt={projects[0].alt}
        class="lg:w-2/3 w-full h-52 object-cover"
      />
      <div class="p-8 lg:w-2/3">
        <h3 class="lg:text-3xl text-xl  font-medium  mb-2">
          {projects[0].title}
        </h3>
        <p class="mb-2">Connecting your online business to Numeral is 100% secure. We only act as a bridge between platforms and your sales tax.</p>
        <a
          href={projects[0].link}
          class="text-blue-600 text-sm font-medium hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
     </div>
</section>