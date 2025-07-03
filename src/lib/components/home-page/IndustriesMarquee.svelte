<script lang="ts">
	import Coins from '$lib/icons/coins.svelte';
	import Farming from '$lib/icons/farming.svelte';
	import Gear from '$lib/icons/gear.svelte';
	import PhoneCall from '$lib/icons/phone-call.svelte';
	import RealEstate from '$lib/icons/realEstate.svelte';
	import Settlement from '$lib/icons/settlement.svelte';
	import Shield from '$lib/icons/shield.svelte';
	import Thunder from '$lib/icons/thunder.svelte';
	import Industries from '$lib/images/industries.png';
	
	type IconComponent = typeof Coins;
	
	interface Industry {
		title: string;
		icon: IconComponent;
	}

	const industries: Industry[] = [
		{ title: 'Telecommunication', icon: PhoneCall },
		{ title: 'Insurance', icon: Shield },
		{ title: 'Financial Services', icon: Coins },
		{ title: 'Healthcare', icon: Settlement },
		{ title: 'Automotive', icon: Thunder },
		{ title: 'Manufacturing', icon: Gear },
		{ title: 'Farming', icon: Farming },
		{ title: 'Real estate', icon: RealEstate }
	];

	const marqueeIndustries = [...industries, ...industries];
</script>

<div class={`px-8 py-28 sm:px-6 lg:px-8`} style={`background-image: url(${Industries})`}>
	<div class="mx-auto max-w-7xl">
		<!-- Header Section -->
		<header class="mb-12 flex max-w-[557px] flex-col">
			<h2 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">
				Industries We Can Serve
			</h2>
			<p class=" text-2xl font-medium text-white md:text-4xl">
				Custom solutions designed to power every industry
			</p>
		</header>

		<!-- Mobile Grid -->
		<div class="grid grid-cols-1 gap-4 md:hidden">
			{#each industries as { title, icon }}
				<div
					class="flex items-center justify-center gap-3 rounded-lg border border-[#2A2A2A] bg-[#333333] px-4 py-8"
				>
					<svelte:component this={icon} />
					<p class="text-lg font-medium text-white">{title}</p>
				</div>
			{/each}
		</div>

		<!-- Desktop Marquee -->
		<div class="hidden overflow-hidden md:block">
			<div class="marquee-container">
				<div class="marquee-content">
					{#each marqueeIndustries as { title, icon }, i (i)}
						<div
							class="marquee-item mr-4 rounded-lg border border-[#2A2A2A] bg-[#333333] px-4 py-8"
						>
							<svelte:component this={icon} />
							<p class="text-lg font-medium text-white">{title}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.marquee-container {
		width: 100%;
		overflow: hidden;
	}

	.marquee-content {
		display: inline-flex;
		animation: marquee 20s linear infinite;
		will-change: transform;
	}

	.marquee-item {
		display: flex;
		align-items: center;
		gap: 12px;
		justify-content: center;
		width: 247px;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
