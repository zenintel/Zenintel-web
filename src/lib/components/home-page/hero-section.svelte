<script>
	import Calendar from '$lib/icons/calendar.svelte';
	import HeroImg from '$lib/images/hero-image.png';
  import Modal from '../modal/modal.svelte';
  let open=$state(false)

  const handleClick=()=>{
	console.log('hello',open);
	open=!open
  }
</script>

<section
	class="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#EFF3FB] px-6 py-12 lg:flex-row"
>
	<div class="flex max-w-2xl flex-col items-center gap-6 text-center lg:items-start lg:text-left">
		<h1 class="text-2xl leading-tight font-bold text-gray-900 md:text-4xl">
			Transform your tech landscape with reliable, robust, & result-driven IT solutions
		</h1>

		<p class="max-w-xl text-lg text-gray-600">
			Unlock the potential of your business with tailored IT solutions designed to simplify
			operations, enhance efficiency, and drive innovation
		</p>

		<button
			class="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
			onclick={handleClick}
		>
			<Calendar />
			Book a free call
		</button>
		<Modal  bind:open></Modal>
	</div>

	<div class="mt-8 lg:mt-0">
		<img src={HeroImg} alt="Description" class="h-full w-full object-fill" />
	</div>
</section>
