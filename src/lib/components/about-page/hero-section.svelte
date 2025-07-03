<script>
	import Calendar from "$lib/icons/calendar.svelte";

//   import CompanyLogo from './CompanyLogo.svelte'; // Your logo component
//   import CalendarIcon from './CalendarIcon.svelte'; // Your calendar icon
//   import VisionIcon from './VisionIcon.svelte'; // Your vision icon
//   import MissionIcon from './MissionIcon.svelte'; // Your mission icon
//   import ClientLogos from './ClientLogos.svelte'; // Your client logos component

  let openModal = () => {
    // Modal opening logic here
  };
</script>

<div class="bg-white min-h-screen font-sans">
  <!-- Hero Section -->
  <section class="px-6 py-12 md:py-24 max-w-6xl mx-auto text-center">
    <div class="mb-8">
      <!-- <CompanyLogo class="mx-auto w-40 md:w-48" /> -->
       <div class="py-5 text-sm">About ZenIntel</div>
    </div>

    <h1 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
      Future-ready solutions,<br>
      <span class="font-light italic">Limitless possibilities.</span>
    </h1>

    <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
      At ZenIntel, we help businesses grow by providing innovative solutions tailored to their
      needs. We collaborate closely with your team to tackle challenges and unlock new
      opportunities. Our focus is on delivering results that drive efficiency and long-term
      success.
    </p>

    <button 
      on:click={openModal}
      class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 mx-auto"
    >
      <Calendar  />
      Book a free call
    </button>
  </section>

  <!-- About Section -->
  <section class="bg-blue-50 pt-16 pb-24 md:pt-24 md:pb-32 rounded-t-[100px] md:rounded-t-full">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-blue-600 uppercase text-sm md:text-base font-semibold tracking-wider mb-2">
        WHO IS ZENINTEL ?
      </h2>
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Empowering businesses, redefining possibilities.
      </h1>
      <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
        We create intelligent solutions that push boundaries and unlock new potential. 
        Our mission is to fuel business success through innovation and technology.
      </p>

      <!-- Vision & Mission Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Vision Card -->
        <div class="bg-white p-8 rounded-xl shadow-sm text-left">
          <div class="mb-6">
            <!-- <VisionIcon class="w-12 h-12 text-blue-600" /> -->
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p class="text-gray-600 text-base md:text-lg">
            To empower businesses with innovative solutions that drive growth, efficiency, and success. 
            We aim to be a trusted partner, helping our clients navigate challenges and seize new opportunities.
          </p>
        </div>

        <!-- Mission Card -->
        <div class="bg-white p-8 rounded-xl shadow-sm text-left">
          <div class="mb-6">
            <!-- <MissionIcon class="w-12 h-12 text-blue-600" /> -->
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p class="text-gray-600 text-base md:text-lg">
            To deliver tailored, impactful solutions that help businesses overcome challenges and 
            achieve their full potential. We are committed to driving innovation, efficiency, and 
            growth for every client.
          </p>
        </div>
      </div>

      <!-- Clients Section -->
      <div class="mt-20 md:mt-28">
        <h3 class="text-gray-400 uppercase text-xs md:text-sm font-medium tracking-wider mb-8">
          OUR CLIENTS
        </h3>
        <div class="overflow-x-auto pb-4">
          <div class="min-w-max px-4">
            <!-- <ClientLogos class="max-w-full h-auto" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</div>