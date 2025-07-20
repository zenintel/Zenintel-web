<script>
  import AILogo from "$lib/images/AI-driven/AI-logo.png";
  import Calendar from "$lib/icons/calendar.svelte";
  import Modal from "../modal/modal.svelte";

  let open =$state(false)
</script>

<section class="bg-[#EFE4FF] flex justify-center min-h-dvh">
  <div class="px-6 max-w-7xl mt-7 lg:mt-0 w-full">
    <div class="flex flex-col lg:flex-row lg:items-center lg:gap-12">
      <div class="lg:w-1/2 flex flex-col justify-center lg:order-1">
        <div
          class="flex items-center justify-center lg:justify-start bg-transparent gap-2 rounded-[50px] border border-gray-300 py-1.5 px-4 w-fit mx-auto lg:mx-0"
        >
          <div class="w-6 h-6">
            <img
              src={AILogo}
              alt="sale logo"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="text-[#666] text-xs font-bold uppercase tracking-wider">
            AI DRIVEN
          </p>
        </div>

        <!-- Main content -->
        <h2
          class="text-center lg:text-left text-2xl md:text-5xl font-bold text-[#333] mt-4"
        >
          Transforming Possibilities with NLP and Computer Vision
        </h2>

        <p
          class="text-center leading-snug lg:text-left font-light lg:text-lg mt-4 md:mt-6"
        >
          Leverage advanced NLP and Computer Vision technologies to unlock
          insights, automate workflows, and enhance user experiences. From text
          analysis to image recognition, our AI solutions redefine how
          businesses interact with data and the world around them.
        </p>

        <div class="flex justify-center lg:justify-start mt-10">
          <button
            class="bg-primary flex justify-center items-center gap-2 py-3 px-6 text-white rounded-xl hover:bg-opacity-90 transition-colors"
            onclick={()=>open=!open}
          >
           <Calendar />
           Book a free call 
           
          </button>
          <Modal bind:open/>
        </div>
      </div>

      <div class="md:block mt-6 lg:w-1/2 h-full lg:order-2">
        <img src="https://i.ibb.co/DPBrbJNh/ai-robo.png" alt="sale hero" class="w-full h-auto" />
      </div>
    </div>
  </div>
</section>
