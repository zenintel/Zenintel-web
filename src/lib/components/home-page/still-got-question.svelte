<script lang="ts">
	import ChevronDown from '$lib/icons/chevron-down.svelte';
	import { Accordion } from 'bits-ui';
	const faqs = [
		{
			question: 'What is your process for handling new projects?',
			answer:
				'Our process starts with understanding your business needs and goals. We conduct a thorough discovery phase, followed by planning, execution, and ongoing support to ensure your project is successful from start to finish.'
		},
		{
			question: 'How do you ensure the quality of your work?',
			answer:
				'We implement rigorous quality assurance processes including code reviews, automated testing, and continuous integration to maintain high standards throughout development.'
		},
		{
			question: 'How do you handle changes to project requirements?',
			answer:
				'We maintain flexible development processes that allow for requirement changes while keeping projects on track through clear communication and agile methodologies.'
		},
		{
			question: 'What industries do you specialize in?',
			answer:
				'We have extensive experience across multiple industries including finance, healthcare, e-commerce, and SaaS platforms.'
		},
		{
			question: 'How do you ensure delivery of projects on time?',
			answer:
				'We use proven project management methodologies, realistic timeline estimation, and regular progress tracking to meet deadlines consistently.'
		},
		{
			question: 'How do you decide which engagement model is best for my project?',
			answer:
				"We evaluate your project's scope, timeline, budget, and team structure to recommend the most suitable engagement model for your specific needs."
		},
		{
			question: 'How does the Extended Team Model work?',
			answer:
				'Our Extended Team Model integrates our developers directly into your workflow, providing dedicated resources that work as an extension of your in-house team with flexible scaling options.'
		}
	];
</script>

<section class=" px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<!-- Header Section -->
		<div class="mb-12 text-center">
			<h1 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Still got Questions?</h1>
			<p class="mb-8 text-lg text-gray-600">
				Got suggestions or just wanna talk to us? Email us at
				<a href="mailto:sales@zen-intel.com" class="text-primary hover:underline">
					sales@zen-intel.com
				</a>
				& we'll get back to you!
			</p>
		</div>

		<!-- FAQ Accordion -->
		<Accordion.Root class="flex  w-full flex-col gap-3" type="single">
			{#each faqs as faq, i (i)}
				<Accordion.Item value={i.toString()} class="rounded-2xl border border-[#E4E4E7] px-8">
					<Accordion.Header>
						<Accordion.Trigger
							class="hover:text-primary flex w-full items-center justify-between py-6 text-left font-medium text-gray-900 transition-colors"
						>
							<span class="text-lg font-medium">
								{i + 1}. {faq.question}
							</span>
							<span
								class="ml-4 shrink-0 transform transition-transform duration-200 group-data-[state=open]:rotate-180"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-plus-icon group-data-[state=open]:hidden data-[state=open]:hidden"
								>
									<path d="M5 12h14" />
									<path d="M12 5v14" />
								</svg>

								<!-- Minus Icon (Visible when open) -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-minus-icon hidden group-data-[state=open]:block data-[state=open]:block"
								>
									<path d="M5 12h14" />
								</svg>
							</span>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content
						class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-gray-600 transition-all"
					>
						<div class="pb-6">
							<p class="text-base leading-relaxed">
								{faq.answer}
							</p>
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
