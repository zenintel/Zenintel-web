<script lang="ts">
	import CheckBoxTick from '$lib/icons/check-box-tick.svelte';

	// const values = [
	// 	{
	// 		title: 'Collaboration',
	// 		description: 'We believe in working closely with our clients, fostering open communication and teamwork to achieve shared success.',
	// 		bgColor: 'bg-white',
	// 		width: 'md:w-[48%] lg:w-[40%] xl:w-[446px]'
	// 	},
	// 	{
	// 		title: 'Innovation',
	// 		description: 'We are committed to continuous innovation, embracing new ideas and technologies to solve complex challenges.',
	// 		bgColor: 'bg-[#FFF0EB]',
	// 		width: 'md:w-[48%] lg:w-[56%] xl:w-[636px]'
	// 	},
	// 	{
	// 		title: 'Integrity',
	// 		description: 'We operate with transparency, honesty, and ethical standards, ensuring trust in all our partnerships.',
	// 		bgColor: 'bg-white',
	// 		fullWidth: true
	// 	},
	// 	{
	// 		title: 'Excellence',
	// 		description: 'We strive for the highest quality in every solution we deliver, ensuring exceptional results for our clients.',
	// 		bgColor: 'bg-[#EFF4FF]',
	// 		width: 'md:w-[48%] lg:w-[56%] xl:w-[635px]'
	// 	},
	// 	{
	// 		title: 'Customer-Centricity',
	// 		description: "Our clients' success is our priority, and we are dedicated to providing solutions that meet their unique needs.",
	// 		bgColor: 'bg-white',
	// 		width: 'md:w-[48%] lg:w-[40%] xl:w-[445px]'
	// 	}
	// ];
</script>

<div class="bg-white px-6 py-12 md:py-16 lg:py-20">
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-8 md:mb-12">
			<h1 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our core values</h1>
			<div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
				<p class="max-w-[600px] text-lg text-gray-600">
					We are driven by innovation, collaboration, and integrity. Our focus is on delivering
					excellence and creating meaningful impact. With a customer-first approach, we turn
					vision into reality.
				</p>
				<div class="flex-shrink-0">
					<button class="rounded-lg bg-[#1A2B3B] px-6 py-3 font-medium text-white">
						Get Started
					</button>
				</div>
			</div>
		</div>

		<!-- Values Grid -->
		<div class="space-y-8 pt-10">
			<!-- First Row -->
			<div class="flex flex-col gap-6 md:flex-row ">
				<div class="flex w-full flex-col rounded-xl bg-white p-6 shadow-md md:h-[225px] md:w-[48%] lg:w-[40%] xl:w-[446px] hover:shadow-lg transition-shadow duration-300">
					<div class="flex gap-3">
						<CheckBoxTick />
						<h2 class="text-2xl font-bold text-[#17191C]">Collaboration</h2>
					</div>
					<p class="text-lg text-[#364752]">
						We believe in working closely with our clients, fostering open communication and teamwork to achieve shared success.
					</p>
				</div>

				<div class="flex w-full flex-col gap-5 rounded-xl bg-[#FFF0EB] p-6 shadow-md md:h-[225px] md:w-[48%] lg:w-[56%] xl:w-[636px] hover:shadow-lg transition-shadow duration-300">
					<div class="flex gap-3">
						<CheckBoxTick />
						<h2 class="text-2xl font-bold text-[#17191C]">Innovation</h2>
					</div>
					<p class="text-lg text-[#364752]">
						We are committed to continuous innovation, embracing new ideas and technologies to solve complex challenges.
					</p>
				</div>
			</div>

			<!-- Integrity (Full Width) -->
			<div class="flex  flex-col gap-5 rounded-xl bg-white p-6 shadow-md md:h-[225px] md:w-[96%] hover:shadow-lg transition-shadow duration-300 ">
				<div class="flex gap-3 ">
					<CheckBoxTick />
					<h2 class="text-2xl font-bold text-[#17191C]">Integrity</h2>
				</div>
				<p class="text-lg text-[#364752]">
					We operate with transparency, honesty, and ethical standards, ensuring trust in all our partnerships.
				</p>
			</div>

			<!-- Third Row -->
			<div class="flex flex-col gap-6 md:flex-row">
				<div class="flex w-full flex-col gap-5 rounded-xl bg-[#EFF4FF] p-6 shadow-md md:h-[225px] md:w-[48%] lg:w-[56%] xl:w-[635px] hover:shadow-lg transition-shadow duration-300">
					<div class="flex gap-3">
						<CheckBoxTick />
						<h2 class="text-2xl font-bold text-[#17191C]">Excellence</h2>
					</div>
					<p class="text-lg text-[#364752]">
						We strive for the highest quality in every solution we deliver, ensuring exceptional results for our clients.
					</p>
				</div>

				<div class="flex w-full flex-col gap-5 rounded-xl bg-white p-6 shadow-md md:h-[225px] md:w-[48%] lg:w-[40%] xl:w-[445px] hover:shadow-lg transition-shadow duration-300">
					<div class="flex gap-3">
						<CheckBoxTick />
						<h2 class="text-2xl font-bold text-[#17191C]">Customer-Centricity</h2>
					</div>
					<p class="text-lg text-[#364752]">
						Our clients' success is our priority, and we are dedicated to providing solutions that meet their unique needs.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>