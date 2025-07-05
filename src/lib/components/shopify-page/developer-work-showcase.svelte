<script lang="ts">
  import Mobile from "$lib/images/shopify/mobile-screen.png";
  import Bottle from "$lib/images/shopify/bottle.png";
  import Swimming from "$lib/images/shopify/swimming.png";
  import Cart from "$lib/images/shopify/cart.png";

  const projects = [
    {
      img: Mobile,
      alt: "mobile",
      title:
        "Elevating eCommerce: How Lift Foils Transformed Their Online Experience with Headless Shopify",
      link: "#",
    },
    {
      img: Bottle,
      alt: "bottle",
      title:
        "Revamping Vintage Bottlers Ltd.: A Modern Approach to Online Shopping",
      link: "#",
    },
    {
      img: Swimming,
      alt: "Swimming",
      title:
        "Optimizing eCommerce: Lift Foils Australia's Seamless Transition to Shopify incentives",
      link: "#",
    },
    {
      img: Cart,
      alt: "Shopping cart",
      title:
        "Optimizing eCommerce: Lift Foils Australia's Seamless Transition to Shopify",
      link: "#",
    },
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8  bg-[#FFFFFF]">
  <div class="max-w-6xl mx-auto">
    <!-- Heading -->
    <h2 class="text-xl lg:text-4xl font-bold text-gray-900 mb-2">Our developers work</h2>
    <p class="max-w-4xl mb-6 text-base leading-relaxed">
      Our developers build custom Shopify stores with a focus on speed,
      security, and scalability. We tailor each store to meet your unique
      business needs, enhancing both functionality and user experience. From
      theme customization to app integration, we ensure a seamless online
      presence.
    </p>

    <!-- Hero Card -->
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
        <a
          href={projects[0].link}
          class="text-blue-600 text-sm font-medium hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each projects.slice(1) as project}
        <div class="bg-[#F8F9FA] rounded-lg  shadow overflow-hidden">
          <img
            src={project.img}
            alt={project.alt}
            class="w-full h-40 object-cover"
          />
          <div class=" lg:p-6 p-4">
            <h4 class="lg:text-2xl font-medium text-gray-900 mb-2">
              {project.title}
            </h4>
            <a
              href={project.link}
              class="text-blue-600 text-sm font-medium hover:underline"
            >
              Read more →
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
