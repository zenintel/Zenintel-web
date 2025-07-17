<script lang="ts">
  import { onMount } from "svelte";

  type ContentItem =
    | string
    | { type: "ul" | "ol"; items: (string | ListItem)[] }
    | { type: "paragraph"; text: string };

  type ListItem = {
    title?: string;
    description?: string;
  };

  type Section = {
    title: string;
    content: ContentItem[];
  };
  type testimonialSection = {
    title: string;
    subtitle: string;
    link: string;
  };
  type CaseStudy = {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
    sections: Section[];
    testimonial: testimonialSection[];
  };

  type Props = {
    data: {
      props?: {
        caseStudy?: CaseStudy;
      };
    };
  };

  let { data } = $props() as Props;

  // Safely generate table of contents
  let toc = $derived(
    data.props?.caseStudy?.sections?.map((section) => ({
      id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: section.title,
    })) ?? []
  );
  let activeSection = $state("");

  onMount(() => {
    // Set initial active section
    if (toc.length > 0) {
      activeSection = toc[0].id;
    }

    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = data.props?.caseStudy?.sections || [];
      const scrollPosition = window.scrollY + 100; // Adjust for header

      for (const section of sections) {
        const id = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            activeSection = id;
            break;
          }
        }
      }
    };

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            activeSection = targetId.substring(1); // Update active section
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for fixed header
              behavior: "smooth",
            });
          }
        }
      });
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  function renderContent(content: ContentItem): string {
    if (typeof content === "string") {
      return `<p class="text-gray-700 mb-4 leading-relaxed">${content}</p>`;
    }

    switch (content.type) {
      case "ul":
      case "ol":
        const listClass = content.type === "ul" ? "list-disc" : "list-decimal";
        return `
          <${content.type} class="${listClass} pl-6 my-4 space-y-2">
            ${content.items
              .map(
                (item) => `
              <li class="text-gray-700">
                ${
                  typeof item === "string"
                    ? item
                    : `${item.title ? `<strong>${item.title}:</strong> ` : ""}${item.description || ""}`
                }
              </li>
            `
              )
              .join("")}
          </${content.type}>
        `;

      case "paragraph":
        return `<p class="text-gray-700 mb-4 leading-relaxed">${content.text}</p>`;

      default:
        return "";
    }
  }
</script>

<div>
  <section class="bg-[#EFF3FB] flex justify-center lg:min-h-[94dvh]">
    <div class="px-6 max-w-7xl mt-7 lg:mt-24 w-full">
      <div class="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div class="lg:w-1/2 flex flex-col justify-center lg:order-1">
          <div
            class="flex items-center justify-center lg:justify-start bg-transparent gap-2 rounded-[50px] border border-gray-300 py-1.5 px-4 w-fit mx-auto lg:mx-0"
          >
            <p class="text-[#666] text-xs font-bold uppercase tracking-wider">
              {data.props?.caseStudy?.title}
            </p>
          </div>

          <!-- Main content -->
          <h2
            class="text-center lg:text-left text-2xl md:text-5xl font-bold text-[#333] mt-4"
          >
            {data.props?.caseStudy?.subtitle}
          </h2>
        </div>

        <div class="md:block mt-10 lg:w-1/2 h-full lg:order-2">
          <img
            src={data.props?.caseStudy?.image}
            alt="sale hero"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>

  <div class=" mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
    <!-- Main Content -->
    <main class="lg:w-3/4 overflow-hidden">
      {#if data.props?.caseStudy?.sections}
        {#each data.props.caseStudy.sections as section}
          <section
            id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            class="p-6 border-b border-gray-100 last:border-b-0"
          >
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              {section.title}
            </h3>
            {#each section.content as content}
              {@html renderContent(content)}
            {/each}
          </section>
        {/each}
      {:else}
        <div class="p-6 text-gray-500">No content available</div>
      {/if}
    </main>

    <!-- Sidebar Navigation -->
    <aside class="hidden lg:block lg:w-1/4">
      <div class="sticky top-8 p-6">
        <h4 class="mb-4 text-gray-800">In this article</h4>
        <nav>
          <ul class="space-y-2 border-gray-200">
            {#each toc as item}
              <li>
                <a
                  href={`#${item.id}`}
                  class={`block py-1 pl-3 -ml-[1px] transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600 border-l-2 border-blue-600 font-medium"
                      : "text-gray-600 hover:text-blue-600 hover:border-l-2 hover:border-blue-300"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </aside>
  </div>
  <!-- <section class="bg-[#EFF3FB] text-center py-30 ">
    <div class="mx-auto max-w-3xl flex flex-col gap-4">
      <h1 class="font-semibold">
        {data.props?.caseStudy?.testimonial[0].title}
      </h1>
      <p class="text-center text-2xl font-bold">
        "{data.props?.caseStudy?.testimonial[0].subtitle}""
      </p>
      <a class="text-primary" href={data.props?.caseStudy?.testimonial[0].link}
        >{data.props?.caseStudy?.testimonial[0].link}</a
      >
    </div>
  </section> -->
</div>

<style>
  /* Smooth scrolling for anchor links */
  :global([id]) {
    scroll-margin-top: 5rem;
  }

  /* Smooth transition for active state */
  a {
    transition:
      color 0.2s ease,
      border-color 0.2s ease;
  }
</style>
