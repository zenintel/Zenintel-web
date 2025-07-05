<script>
  import Ring from "$lib/icons/microsoft/ring.svelte";
  import Separator from "$lib/icons/microsoft/separator.svelte";

  // Power Platform services data
  const powerPlatformServices = [
    {
      title: "Power Automate",
      description: "We help businesses streamline operations by automating repetitive tasks, integrating apps, and optimizing workflows to boost efficiency."
    },
    {
      title: "Power Apps",
      description: "We design low-code, custom applications that simplify business processes, enhance productivity, and integrate seamlessly with Microsoft 365."
    },
    {
      title: "Power BI",
      description: "Our data-driven solutions transform raw data into actionable insights, enabling smarter decision-making through interactive dashboards and real-time analytics."
    },
    {
      title: "Power Virtual Agents",
      description: "We build AI-driven chatbots that automate customer interactions, improve support, and enhance user engagement without coding complexities."
    }
  ];

  // SharePoint services data
  const sharePointServices = [
    {
      title: "Intranet & Collaboration",
      description: "We develop customized SharePoint intranet portals to improve communication, document sharing, and teamwork."
    },
    {
      title: "Migration & Modernization",
      description: "We ensure smooth migration from on-premises to the cloud, enhancing functionality with minimal disruption."
    },
    {
      title: "Document Management & Automation",
      description: "We optimize document storage, version control, and workflow automation for better efficiency and compliance."
    },
    {
      title: "Seamless Integrations",
      description: "We connect SharePoint with Microsoft 365, CRM, ERP, and other enterprise tools for a unified digital experience."
    },
    {
      title: "Customization & Development",
      description: "We create tailored SharePoint solutions, including custom web parts, dashboards, and seamless Microsoft 365 integrations.",
      fullWidth: true
    }
  ];
</script>

<section class="px-4 py-12 md:px-12 max-w-7xl mx-auto">
  <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">What we do?</p>
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Microsoft 365 Solutions</h2>
  <p class="text-gray-600 mt-4 max-w-3xl">
    We specialize in Power Platform and Teams, enabling businesses to automate workflows, build low-code apps, and enhance collaboration boosting efficiency and productivity.
  </p>

  <!-- Power Platform Services -->
  <div class="mt-12 flex flex-col md:flex-row gap-6 bg-[#F7F9FF] rounded-xl border border-gray-200 p-6">
    <div class="flex flex-col justify-between w-full md:w-1/3">
      <h3 class="font-semibold text-lg text-gray-900 mb-4">ZenIntel's Microsoft Power Platform Services</h3>
      <Ring/>
    </div>
    <div class="w-full md:w-2/3">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {#each powerPlatformServices as service}
          <li class="bg-white border border-gray-200 p-4 rounded-md">
            <strong>{service.title}</strong> – {service.description}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- SharePoint Services -->
  <div class="mt-12 flex flex-col md:flex-row gap-6 bg-[#FFF4F2] rounded-xl border border-gray-200 p-6">
    <div class="flex flex-col justify-between w-full md:w-1/3">
      <h3 class="font-semibold text-lg text-gray-900 mb-4">ZenIntel's SharePoint Services</h3>
      <Separator/>
    </div>
    <div class="w-full md:w-2/3">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {#each sharePointServices as service}
          <li class="bg-white border border-gray-200 p-4 rounded-md" class:sm:col-span-2={service.fullWidth}>
            <strong>{service.title}</strong> – {service.description}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>