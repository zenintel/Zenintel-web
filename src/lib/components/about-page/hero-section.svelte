<script>
  import Calendar from "$lib/icons/calendar.svelte";
  import Target from "$lib/icons/target.svelte";
  import Vision from "$lib/icons/vision.svelte";
  import ZenIntelAlt from "$lib/icons/zenIntel-alt.svelte";
  import Heromed from "$lib/images/clients-logo/heromed.png";
  import Bigpay from "$lib/images/clients-logo/bigpay.png";
  import Epitronx from "$lib/images/clients-logo/epitronx.png";
  import Jumeirah from "$lib/images/clients-logo/jumeirah.png";
  import Points from "$lib/images/clients-logo/points.png";
  import Proodle from "$lib/images/clients-logo/proodle.png";
  import SatyaSchool from "$lib/images/clients-logo/satya-school.png";
  let openModal = () => {
    // Modal opening logic here
  };
</script>

<div class="bg-white min-h-screen font-sans">
  <!-- Hero Section -->
  <section class="px-6 py-12 md:py-24 max-w-6xl mx-auto text-center">
    <div class="mb-8">
      <div class="mx-auto w-40">
        <div
          class="py-2 rounded-[50px] justify-center gap-2.5 text-sm flex items-center bg-[#F1F7FC]"
        >
          <div class="bg-primary p-1 rounded gap-2.5"><ZenIntelAlt /></div>
          <p>About ZenIntel</p>
        </div>
      </div>
    </div>

    <h1 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
      Future-ready solutions,<br />
      <span class="font-light italic">Limitless possibilities.</span>
    </h1>

    <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
      At ZenIntel, we help businesses grow by providing innovative solutions
      tailored to their needs. We collaborate closely with your team to tackle
      challenges and unlock new opportunities. Our focus is on delivering
      results that drive efficiency and long-term success.
    </p>

    <button
      on:click={openModal}
      class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 mx-auto"
    >
      <Calendar />
      Book a free call
    </button>
  </section>

  <!-- About Section -->
  <section
    class="bg-blue-50 pt-16 pb-24 md:pt-24 md:pb-32 rounded-t-[100px] md:rounded-t-full"
  >
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2
        class="text-blue-600 uppercase text-sm md:text-base font-semibold tracking-wider mb-2"
      >
        WHO IS ZENINTEL ?
      </h2>
      <h1 class="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
        Empowering businesses, redefining possibilities.
      </h1>
      <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
        We create intelligent solutions that push boundaries and unlock new
        potential. Our mission is to fuel business success through innovation
        and technology.
      </p>

      <!-- Vision & Mission Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Vision Card -->
        <div class="bg-white p-8 rounded-xl shadow-sm text-left">
          <div class="mb-6">
            <Vision />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Our Vision
          </h3>
          <p class="text-gray-600 text-base md:text-lg">
            To empower businesses with innovative solutions that drive growth,
            efficiency, and success. We aim to be a trusted partner, helping our
            clients navigate challenges and seize new opportunities.
          </p>
        </div>

        <!-- Mission Card -->
        <div class="bg-white p-8 rounded-xl shadow-sm text-left">
          <div class="mb-6">
            <Target />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p class="text-gray-600 text-base md:text-lg">
            To deliver tailored, impactful solutions that help businesses
            overcome challenges and achieve their full potential. We are
            committed to driving innovation, efficiency, and growth for every
            client.
          </p>
        </div>
      </div>

      <!-- Clients Section -->
      <div class="mt-20 md:mt-28">
        <h3
          class="text-gray-400 uppercase text-xs md:text-sm font-medium tracking-wider mb-8"
        >
          OUR CLIENTS
        </h3>
        <div class="md:hidden overflow-hidden whitespace-nowrap py-4">
          <div class="inline-block animate-marquee">
            <div class="inline-flex space-x-12 px-4">
              <img
                src={Heromed}
                alt="Heromed"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Bigpay}
                alt="Bigpay"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Proodle}
                alt="Proodle"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={SatyaSchool}
                alt="SatyaSchool"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Jumeirah}
                alt="Jumeirah"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Epitronx}
                alt="Epitronx"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Points}
                alt="Points"
                class="h-8 max-h-8 object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Desktop version (hidden on mobile) -->
        <div class="hidden md:block overflow-x-auto pb-4">
          <div class="min-w-max px-4">
            <div class="max-w-full flex justify-between h-auto">
              <img
                src={Heromed}
                alt="Heromed"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Bigpay}
                alt="Bigpay"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Proodle}
                alt="Proodle"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={SatyaSchool}
                alt="SatyaSchool"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Jumeirah}
                alt="Jumeirah"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Epitronx}
                alt="Epitronx"
                class="h-8 max-h-8 object-contain"
              />
              <img
                src={Points}
                alt="Points"
                class="h-8 max-h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
    display: inline-block;
  }
</style>
