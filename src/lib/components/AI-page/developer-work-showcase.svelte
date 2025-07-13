<script lang="ts">
  import ROBOT from "$lib/images/AI-driven/robo.png";
  import Security from "$lib/images/AI-driven/security.png";

  const projects = [
    {
      img: ROBOT,
      alt: "mobile",
      title: "NLP Chatbot for a Mid-Sized Healthcare Provider",
      link: "AI-driven/blog/healthcare-nlp-chatbot",
    },
    {
      img: Security,
      alt: "bottle",
      title: "Enhancing Quality Control with Computer Vision for a Manufacturer incentives",
      link: "AI-driven/blog/automotive-cv-quality-control",
    },
  ];
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-xl lg:text-4xl font-bold text-gray-900 mb-2">
      Our developers work
    </h2>
    <p class="max-w-4xl mb-6 text-base leading-relaxed">
      Our developers work closely with clients to build custom AI solutions that
      address specific needs. They focus on delivering high-quality, scalable,
      and efficient systems that drive business growth
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project}
        <div
          class="bg-[#F8F9FA] flex flex-col justify-between rounded-lg shadow overflow-hidden"
        >
          <img
            src={project.img}
            alt={project.alt}
            class="w-full h-50 object-cover"
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
