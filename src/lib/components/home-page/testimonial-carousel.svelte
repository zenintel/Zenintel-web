<script lang="ts">
	let currentIndex = 0;

	const testimonials = [
		{
			quote: '“The software solution has revolutionized our operations. The automation and real-time insights have made us more competitive in the market. We’re thrilled with the results and the ongoing support from the team.”',
			name: 'Ramesh Kumar',
			role: 'COO, Leading Retailer'
		},
		{
			quote: '“Our new headless Shopify site has exceeded expectations. The speed, design, and user experiences are unmatched. Were thrilled with the results and excited for future growth."',
			name: 'Priya Sharma',
			role: 'Head of E-commerce, Fashion Brand'
		},
		{
			quote: '“Working with ZenIntel was a transformative experience for our brand. The revamped design and seamless migration have elevated our online presence. The attention to detail and commitment to excellence truly stood out.”',
			name: 'Anil Mehta',
			role: 'CEO, Vintage Apparel'
		}
	];

	function nextSlide() {
		currentIndex = (currentIndex + 1) % testimonials.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	}
</script>

<section class="px-4 py-12 sm:py-16 sm:px-6 lg:px-8  ">
	<div class="relative mx-auto w-full flex flex-col items-center max-w-4xl">
		<div class="mb-8 sm:mb-12 max-w-md text-center">
			<h2 class="text-sm font-semibold tracking-wider text-primary uppercase">
				CLIENT TESTIMONIAL
			</h2>
			<h3 class="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
				Stories of success, powered by innovation
			</h3>
		</div>

		<!-- Navigation arrows - mobile bottom, desktop sides -->
		<div class="flex sm:hidden gap-4 mb-6">
			<button
				class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
				onclick={prevSlide}
				aria-label="Previous testimonial"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
				onclick={nextSlide}
				aria-label="Next testimonial"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		<!-- Desktop arrows -->
		<button
			class="hidden sm:flex absolute top-[70%] left-0 sm:-left-12 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
			onclick={prevSlide}
			aria-label="Previous testimonial"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button
			class="hidden sm:flex absolute top-[70%] right-0 sm:-right-12 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
			onclick={nextSlide}
			aria-label="Next testimonial"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<!-- Testimonial content -->
		<div class="mx-0 sm:mx-12 rounded-3xl bg-white p-6 sm:p-8 shadow-lg w-full">
			<blockquote class="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl font-normal text-gray-800 text-center">
				{testimonials[currentIndex].quote}
			</blockquote>

			<div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
				<div class="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
					<div>
						<p class="font-medium text-gray-900">{testimonials[currentIndex].name}</p>
						<p class="text-gray-600">{testimonials[currentIndex].role}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile indicators -->
		<div class="flex sm:hidden mt-8 gap-2">
			{#each testimonials as _, i}
				<button
					onclick={() => currentIndex = i}
					class={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
					aria-label={`Go to testimonial ${i + 1}`}
				></button>
			{/each}
		</div>
	</div>
</section>