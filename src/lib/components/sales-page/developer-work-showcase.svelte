<script lang="ts">
    import SMB from'$lib/images/sales-page/smb.png'
    import CustomerSupport from '$lib/images/sales-page/customer-support.png'

    const projects = [
    {
      img: SMB,
      alt: "mobile",
      title:
        "Transforming Sales for an SMB",
      link: "sales-force/blog/smb-salesforce-transformation",
    },
    {
      img: CustomerSupport,
      alt: "bottle",
      title:
        "Enhancing Customer Engagement for a Mid-Sized Firm",
      link: "sales-force/blog/professional-services-salesforce-portal",
    },
    
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-xl lg:text-4xl font-bold text-gray-900 mb-2">
      Our developers work
    </h2>
    <p class="max-w-4xl mb-6 text-base leading-relaxed">
      Our developers specialize in creating tailored Salesforce solutions that align with your business goals. Focusing on innovation and precision, they ensure seamless integrations, efficient workflows, and long-term scalability
    </p>
    <div class="grid grid-cols-1  md:grid-cols-2 gap-8">
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
