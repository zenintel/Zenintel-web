<script>
  import MicroSoftAutomate from "$lib/images/microsoft-page/microsoft-automate.png";
  import MicroSoftPowerPoint from "$lib/images/microsoft-page/microsoft-share-point.png";
  import ShoppingCart from "$lib/images/microsoft-page/shopping-cart.png";
  import MimeCast from "$lib/images/microsoft-page/mimecast.png";
  import  jira from "$lib/images/microsoft-page/jira.png"
  import automation from "$lib/images/microsoft-page/automation.png"

  const projects = [
    {
      img: MicroSoftAutomate,
      alt: "mobile",
      title:
        "Microsoft Power Automate in the Real Estate Domain incentives",
      link: "#",
    },
    {
      img: MicroSoftPowerPoint,
      alt: "bottle",
      title:
        "Microsoft SharePoint for Document Management and Collaborationincentives",
      link: "#",
    },
    {
      img: ShoppingCart,
      alt: "Swimming",
      title:
        "Microsoft Teams for a Small E-commerce Business",
      link: "#",
    },
    {
      img: MimeCast,
      alt: "Shopping cart",
      title:
        "Mimecast Integration with Service Now",
      link: "#",
    },
     {
      img: jira,
      alt: "Shopping cart",
      title:
        "SharePoint-Jira Integration Using Power Automate",
      link: "#",
    },
     {
      img: automation,
      alt: "Shopping cart",
      title:
        "Automating Finance Application Reports",
      link: "#",
    },
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-xl lg:text-4xl font-bold text-gray-900 mb-2">
      Our developers work
    </h2>
    <p class="max-w-4xl mb-6 text-base leading-relaxed">
    Our developers excel in creating innovative, scalable, and efficient solutions tailored to your business needs. With expertise in Microsoft PowerApps, Azure, and SharePoint, they bring your vision to life by delivering seamless integrations, custom applications, and optimized workflows.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-[#F8F9FA] flex flex-col justify-between rounded-lg shadow overflow-hidden">
          <img
            src={project.img}
            alt={project.alt}
            class="w-full h-40 object-cover"
          />
          <div class=" lg:p-6 p-4">
            <h4 class="lg:text-2xl font-medium text-gray-900 mb-2">
              {project.title}
            </h4>
           
          </div>
          <div class="lg:px-6 lg:pb-4 p-4">
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
