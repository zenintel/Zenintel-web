<script lang="ts">
	import SendIcon from '$lib/icons/send-icon.svelte';
	import WalletIcon from '$lib/icons/walled-icon.svelte';
	import CardIcon from '$lib/icons/card-icon.svelte';
	import ActiveIcon from '$lib/icons/active-icon.svelte';
	import ArrowIcon from '$lib/icons/arrow-icon.svelte';
	import LightingIcon from '$lib/icons/lighting-icon.svelte';
	import GlobeIcon from '$lib/icons/globe-icon.svelte';
	import BookmarkIcon from '$lib/icons/bookmark-icon.svelte';
	interface feature {
		title: string;
		description: string;
		icon?: typeof SendIcon;
	}

	const features: feature[] = [
		{
			icon: SendIcon, 
			title: 'Experienced Professionals',
			description: 'Skilled experts delivering high-quality solutions.'
		},
		{
			icon: WalletIcon,
			title: 'Tailored Approach',
			description: 'Customized services that align with your business goals.'
		},
		{
			icon: CardIcon,
			title: 'Seamless Communication',
			description: 'Transparent and responsive collaboration at every stage.'
		},
		{
			icon: ActiveIcon,
			title: 'End-to-End Support',
			description: 'Full support across all project phases, from planning to execution.'
		},
		{
			icon: ArrowIcon,
			title: 'Cutting-Edge Solutions',
			description: 'Innovative technology to drive your success.'
		},
		{
			icon: LightingIcon,
			title: 'Proven Results',
			description: 'Consistent delivery of impactful, measurable outcomes.'
		},
		{
			icon: GlobeIcon,
			title: 'Same Time Zone',
			description: 'Effortless communication with our team, available when you need them.'
		}
	];
</script>

<section class="bg-[#F8F9F9] px-4 py-12 sm:px-6 lg:px-44">
	<p class="text-sm font-semibold tracking-wide text-blue-600 uppercase">Why Us?</p>
	<h2 class="mt-2 mb-10 text-2xl md:text-3xl font-bold text-gray-900 sm:text-4xl">
		Solving challenges, powering success, every step
	</h2>

	<div
		class="grid grid-cols-1 overflow-hidden rounded-xl border border-gray-100 shadow-md sm:grid-cols-2 lg:grid-cols-4"
	>
		{#each features as feature}
			<div class="flex flex-col gap-12 border border-gray-100 bg-white px-6 pt-6 pb-12">
				<div >
					
						<feature.icon />
				
				</div>
				<div>
<h3 class="font-semibold text-gray-900">{feature.title}</h3>
				<p class="text-sm text-gray-600">{feature.description}</p>
				</div>
				
			</div>
		{/each}

		<!-- Call to Action Box -->
		<div class="flex flex-col justify-between bg-blue-600 p-6 text-white">
			<div class="text-3xl">
										<svelte:component this={BookmarkIcon} />
			</div>
			<div class="mt-4">
				<h3 class="text-lg font-semibold">Want know more about us?</h3>
				<a href="#/" class="mt-2 inline-block text-sm underline">Learn more →</a>
			</div>
		</div>
	</div>
</section>
