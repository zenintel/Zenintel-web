<script>
  import Sun from "$lib/icons/AI/sun.svelte";
  import Ring from "$lib/icons/microsoft/ring.svelte";
  import Separator from "$lib/icons/microsoft/separator.svelte";
  import Testing from "$lib/icons/shopify/testing.svelte";

  // Power Platform services data
  const nlpSolution = [
    {
      title: "Sentiment Analysis",
      description: " We harness AI-driven sentiment analysis to interpret emotions from text, enabling businesses to analyze customer feedback, monitor brand reputation, and enhance user experiences with data-driven insights."
    },
    {
      title: "Chatbot Solutions",
      description: " Our AI-powered chatbots provide seamless customer interactions with natural language understanding (NLU). We develop intelligent virtual assistants that enhance engagement, automate support, and improve response times across multiple channels."
    },
    {
      title: "Speech Recognition",
      description: "We build advanced speech recognition solutions that convert spoken language into text with high accuracy. Our expertise helps businesses enable voice commands, automate transcription, and improve accessibility for users."
    },
    {
      title: "Intelligent Search",
      description: "Our AI-powered intelligent search solutions enhance information discovery by providing context-aware, relevant, and fast search results. We integrate NLP-driven search capabilities to boost productivity and optimize user experiences."
    },
     {
      title: "Text Analytics Solutions",
      description: "We extract meaningful insights from unstructured text data through entity recognition, key phrase extraction, and pattern detection. Our solutions help businesses make data-driven decisions and enhance operational efficiency."
    },
     {
      title: "Text Categorization",
      description: "We automate text classification and topic modeling to organize, tag, and categorize large volumes of data efficiently. Our solutions enable businesses to improve content management, automate workflows, and enhance searchability."
    }
  ];

  // SharePoint services data
    const visionSolution = [
    {
      title: " Image Classification",
      description: "  We develop AI-driven image classification models that accurately categorize images based on predefined labels. Our solutions help businesses automate visual recognition, enhance security, and streamline content organization."
    },
    {
      title: "Object Detection & Tracking",
      description: "   Our object detection and tracking solutions identify and monitor objects in real time. From surveillance and retail analytics to autonomous systems, we enable businesses to enhance security, automation, and decision-making."
    },
    {
      title: "Image Segmentation",
      description: " We utilize advanced image segmentation techniques to precisely analyze and extract objects from images. This is essential for medical imaging, autonomous vehicles, and industrial quality control applications."
    },
    {
      title: "Face Recognition",
      description: " Our AI-powered face recognition solutions provide highly accurate identity verification and access control. We help businesses enhance security, authentication, and personalized user experiences."
    },
     {
      title: "Optical Character Recognition (OCR)",
      description: " We implement OCR technology to convert printed or handwritten text into digital formats. Our solutions automate document processing, enhance data extraction, and streamline business workflows."
    },
     {
      title: "Video Analytics",
      description: " Our intelligent video analytics solutions analyze live and recorded video feeds to detect patterns, anomalies, and behaviors. From security surveillance to customer insights, we help businesses extract real-time actionable intelligence."
    }
  ];

</script>

<section class="px-4 py-12 md:px-12 max-w-7xl mx-auto">
  <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">What we do?</p>
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Turning Ideas into Impactful Products</h2>
  <p class="text-gray-600 mt-4 max-w-3xl">
   We design, develop, and deliver innovative, scalable solutions that drive growth and enhance user experiences. From concept to deployment, we empower businesses to achieve their vision seamlessly.
  </p>

  <!-- Power Platform Services -->
  <div class="mt-12 flex flex-col md:flex-row gap-6 bg-[#F7F9FF] rounded-xl border border-gray-200 p-6">
    <div class="flex flex-col justify-between w-full md:w-1/3">
      <h3 class="font-semibold text-lg text-gray-900 mb-4">NLP Solutions</h3>
      <Sun/>
    </div>
    <div class="w-full md:w-2/3">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {#each nlpSolution as service}
          <li class="bg-white border border-gray-200 p-4 rounded-md">
            <strong>{service.title}</strong> – {service.description}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- SharePoint Services -->
    <div class="mt-12 flex flex-col md:flex-row gap-6 bg-[#FDF5F9] rounded-xl border border-gray-200 p-6">
    <div class="flex flex-col justify-between w-full md:w-1/3">
      <h3 class="font-semibold text-lg text-gray-900 mb-4">ZenIntel’s Computer Vision Solutions</h3>
     <Testing/>
    </div>
    <div class="w-full md:w-2/3">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {#each visionSolution as service}
          <li class="bg-white border border-gray-200 p-4 rounded-md">
            <strong>{service.title}</strong> – {service.description}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>