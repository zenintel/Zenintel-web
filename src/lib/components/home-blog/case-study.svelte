<script>
  import Salesforce from "$lib/images/blog/sales-force.png";
  import AI from "$lib/images/blog/AI.png";
  import Office from "$lib/images/blog/office-space.png";
  import Lighting from "$lib/icons/blog/lighting.svelte";
  import Rocket from "$lib/icons/blog/rocket.svelte";
  const latestCaseStudy = {
    title:
      "The Importance of Product Engineering, Modernization, and Maintenance in business growth",
    image: "https://i.ibb.co/RXSLCv2/comp.png",
    link: "blog/transforming-sales-smb",
  };

  const trendingCaseStudies = [
    {
      title:
        "The Importance of Microsoft Power Apps, Azure, & SharePoint for Modern Businesses",
      image: "https://i.ibb.co/wqyDsgY/mob.png",
      link: "blog/transforming-sales-smb",
    },
    {
      title:
        "Maximizing Your Business Potential with Shopify: A Complete Guide",
      image: "https://i.ibb.co/4n8gVX7B/mobile.png",
      link: "blog/transforming-sales-smb",
    },
  ];

  const otherCaseStudies = [
    {
      title: "Unlocking Business Success with Salesforce and Agentforce",
      image: "https://i.ibb.co/9HTDccVf/blog-sales.png",
      link: "blog/transforming-sales-smb",
    },
    {
      title:
        "AI-Driven NLP and Computer Vision: Revolutionizing the Future of Technology",
      image: "https://i.ibb.co/dwTzVH6t/blog-ai.png",
      link: "blog/transforming-sales-smb",
    },
    {
      title:
        "The Importance of Outsourcing & Offshore Development Partners in Today’s Business Landscape",
      image: "https://i.ibb.co/WWk7VkmL/blog-listen.png",
      link: "blog/transforming-sales-smb",
    },
  ];
</script>

<div class="p-4 md:p-10 max-w-screen-xl lg:py-32 mx-auto">
  <h1 class="text-2xl  max-w-4xl md:text-4xl font-bold leading-tight mb-16   text-left">
    ZenIntel Case Studies: Exploring Innovation, Efficiency, and Business Impact
  </h1>

  <div class="flex flex-col md:flex-row gap-4 mb-8">
    <div class="flex-1">
      <p class="text-sm font-semibold uppercase mb-2 flex items-center gap-2.5"><span><Lighting/></span> Latest Case Study</p>
      <div class="relative rounded-xl overflow-hidden mt-10">
        <img
          src={latestCaseStudy.image}
          alt="Latest"
          class="w-full h-56 object-cover"
        />
        <div class="absolute inset-0 bg-black/50 flex items-end p-4">
          <div class="text-white font-semibold text-lg md:text-xl">
            {latestCaseStudy.title}
            <div>
              <a href={latestCaseStudy.link} class="underline text-sm"
                >View more →</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:w-1/3 flex flex-col">
      <p class="text-sm font-semibold uppercase mb-2 flex items-center gap-2.5"><span><Rocket/></span>Trending Case Study</p>
      <div class="space-y-12 mt-10">
        {#each trendingCaseStudies as item}
          <div class="flex gap-4">
            <img
              src={item.image}
              alt="Trend"
              class="w-20 h-20 object-cover rounded"
            />
            <div class="text-sm font-medium">
              <p>{item.title}</p>
              <a href={item.link} class="text-blue-600 text-xs">View more →</a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each otherCaseStudies as cases}
      <div class="bg-white flex flex-col justify-between">
        <img
          src={cases.image}
          alt="Case"
          class="w-full h-40 object-cover rounded-md mb-4"
        />
        <p class="font-semibold mb-2">{cases.title}</p>
        <div>
          <a href={cases.link} class="text-blue-600 text-sm">View more →</a>
        </div>
      </div>
    {/each}
    <div></div>
  </div>
</div>

<style>
  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
</style>
