<script>
  import Upward from "$lib/icons/AI/upward.svelte";
  import Light from "$lib/icons/light.svelte";
  import Ring from "$lib/icons/microsoft/ring.svelte";
  import Separator from "$lib/icons/microsoft/separator.svelte";

  // Power Platform services data
  const powerPlatformServices = [
    {
      title: "Salesforce Development & Customization",
      description: "  We design and develop customized Salesforce solutions tailored to your business processes. From workflow automation to UI enhancements, we ensure seamless functionality. Our solutions drive efficiency, improve user experience, and optimize operations."
    },
    {
      title: "Salesforce Integration",
      description: "We connect Salesforce with ERP, third-party applications, and enterprise systems to create a unified platform. Our integration services enhance data flow, automation, and collaboration. This ensures a seamless and efficient business ecosystem."
    },
    {
      title: "Salesforce Lightning Migration",
      description: " We help businesses transition from Salesforce Classic to Lightning for a modern, faster, and more intuitive experience. Our migration process ensures minimal disruption and enhanced user adoption. With improved UI and productivity features, we unlock the full potential of Salesforce Lightning."
    },
    {
      title: "Salesforce AppExchange Development",
      description: " We build secure, scalable, and AppExchange-ready applications to extend Salesforce capabilities. Our experts ensure compliance with Salesforce standards for smooth deployment. These solutions help businesses enhance CRM functionalities and maximize Salesforce investments."
    },
     {
      title: "Configure-Price-Quote (CPQ) Solutions",
      description: " We streamline sales processes with Salesforce CPQ, automating pricing, quoting, and approval workflows. Our CPQ solutions enhance accuracy, reduce manual errors, and speed up deal closures. This enables businesses to manage complex pricing and quoting structures efficiently."
    },
     {
      title: "Salesforce Support & Maintenance",
      description: " Our dedicated support team ensures Salesforce remains optimized, secure, and up-to-date. We provide ongoing system monitoring, performance tuning, and troubleshooting. With proactive maintenance, we help businesses maximize Salesforce performance and reliability."
    }
  ];

  // SharePoint services data
  const sharePointServices = [
    {
      title: "User-Centric Design",
      description: "We prioritize intuitive, scalable, and engaging user experiences, ensuring products align with business goals and customer needs."
    },
    {
      title: "Agile Development",
      description: "Our iterative approach accelerates development cycles, allowing flexibility, continuous improvement, and faster time-to-market."
    },
    {
      title: "Scalable Architecture",
      description: " We design robust, future-ready architectures that support growth, performance, and seamless integrations across platforms."
    },
    {
      title: "Quality & Reliability",
      description: " We ensure high performance, security, and reliability through rigorous testing, automation, and compliance with industry standards."
    },
    {
      title: "End-to-End Innovation",
      description: " From ideation to deployment, we bring cutting-edge technology, AI-driven insights, and automation to create transformative products.",
      fullWidth: true
    }
  ];
</script>

<section class="px-4 py-12 md:px-12 max-w-7xl mx-auto">
  <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">What we do?</p>
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Turning Ideas into Impactful Products</h2>
  <p class="text-gray-600 mt-4 max-w-3xl">
    We design, develop, and deliver innovative, scalable solutions that drive growth and enhance user experiences. From concept to deployment, we empower businesses to achieve their vision seamlessly.
  </p>
   <!-- SharePoint Services -->
<div class="mt-12 flex flex-col md:flex-row gap-6 bg-[#F7F9FF] rounded-xl border border-gray-200 p-6">
    <div class="flex flex-col justify-between w-full md:w-1/3">
      <h3 class="font-semibold text-lg text-gray-900 mb-4">ZenIntel’s Product Engineering Approach</h3>
      <Light/>
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
  <!-- Power Platform Services -->
  <div class="mt-12 flex flex-col md:flex-row gap-6  bg-[#FFF4F2] rounded-xl border border-gray-200 p-6">
    <div class="flex flex-col justify-between w-full md:w-1/3">
      <h3 class="font-semibold text-lg text-gray-900 mb-4">ZenIntel’s Salesforce Solutions</h3>
      <Upward/>
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

 
  
</section>