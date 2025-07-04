<script lang="ts">
	import { page } from '$app/state';
	import CallThrough from '$lib/icons/call-through.svelte';
	import ServiceAi from '$lib/icons/nav-bar/service-ai.svelte';
	import ServiceMicrosoft from '$lib/icons/nav-bar/service-microsoft.svelte';
	import ServiceProduct from '$lib/icons/nav-bar/service-product.svelte';
	import ServiceSales from '$lib/icons/nav-bar/service-sales.svelte';
	import ServiceShopify from '$lib/icons/nav-bar/service-shopify.svelte';
	import ZenIntelLogo from '$lib/icons/zenIntel-logo.svelte';
	import { NavigationMenu } from 'bits-ui';
	import { fly } from 'svelte/transition';

	let mobileMenuOpen = $state(false);
	let mobileServicesOpen = $state(false);
	let activeService = $state('');

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
		mobileServicesOpen = false;
	};

	const toggleMobileServices = () => {
		mobileServicesOpen = !mobileServicesOpen;
	};

	const services = $state([
		{
			title: 'Sales force',
			description:
				'Customize Salesforce to fit your business with tailored CRM, automation, and AI solutions.',
			icon: ServiceSales,
			href: '/services/sales-force'
		},
		{
			title: 'AI Driven',
			description: 'AI-driven solutions to automate, optimise, and scale your business.',
			icon: ServiceAi,
			href: '/services/AI-driven'
		},
		{
			title: 'Shopify',
			description: 'Shopify solutions for seamless store management, automation, & growth.',
			icon: ServiceShopify,
			href: '/services/shopify'
		},
		{
			title: 'Microsoft O365',
			description:
				'Power Platform solutions to automate workflows, analyze data, and build apps effortlessly.',
			icon: ServiceMicrosoft,
			href: '/services/microsoft-365'
		},
		{
			title: 'Product Engineering',
			description:
				'End-to-end product engineering solutions to design, build, and scale innovative software.',
			icon: ServiceProduct,
			href: '/services/product-engineering'
		}
	]);

	// Reactive statement converted to $derived
	const currentPath = $derived(page.url.pathname);
	$effect(() => {
		activeService = '';
		for (const service of services) {
			if (currentPath.startsWith(service.href)) {
				activeService = service.title;
				break;
			}
		}
	});

</script>

<nav class="flex items-center justify-between bg-white p-4 shadow md:justify-around md:p-0 sticky top-0 z-50">
	<a href="/#"><ZenIntelLogo width="129" height="44" /></a>

	<!-- Mobile menu button -->
	<button class="focus:outline-none md:hidden" onclick={toggleMobileMenu}>
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			{#if mobileMenuOpen}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			{:else}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			{/if}
		</svg>
	</button>

	<!-- Desktop Navigation -->
 <div class="hidden items-center gap-[60px] md:flex">
    <NavigationMenu.Root class="relative">
      <NavigationMenu.List class="flex gap-10">
        <!-- Home Link -->
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/#"
            class={`flex hover:bg-blue-100 lg:px-4 lg:py-4 ${currentPath === '/' ? 'border-primary border-b-2' : ''}`}
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <!-- Services Dropdown -->
        <NavigationMenu.Item value="services">
          <NavigationMenu.Trigger
            class={`hover-transition hover:bg-blue-100 lg:px-4 lg:py-4 flex items-center ${activeService ? 'border-primary border-b-2' : ''}`}
          >
            Services
            <svg
              class="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content
            class="absolute left-1/2 top-full mt-2 w-[800px] -translate-x-1/2 transform rounded-xl bg-[#0F0F16] p-4 shadow-lg"
          >
            <div class="grid grid-cols-2 gap-4">
              {#each services as service}
                <NavigationMenu.Link
                  href={service.href}
                  class={`rounded-lg p-4 transition-colors ${activeService === service.title ? 'bg-[#2A2A3C]' : 'hover:bg-[#2A2A3C]'}`}
                >
                  <div class="flex items-center gap-3">
                    <service.icon />
                    <div>
                      <h3 class="font-semibold text-white">{service.title}</h3>
                      <p class="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </NavigationMenu.Link>
              {/each}
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <!-- Company Link -->
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/company"
            class={`flex hover:bg-blue-100 lg:px-4 lg:py-4 ${currentPath === '/company' ? 'border-primary border-b-2' : ''}`}
          >
            Company
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>

    <button
      class="flex items-center gap-1 rounded-full bg-black px-4 py-2 text-white transition-all hover:bg-gray-800 active:scale-[0.98]"
    >
      <span><CallThrough /></span> Request a call
    </button>
  </div>
	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<div class="fixed inset-0 z-50 md:hidden">
			<!-- Overlay -->
			<button
				type="button"
				class="fixed inset-0 bg-black/50"
				onclick={toggleMobileMenu}
				aria-label="Close menu overlay"
				tabindex="0"
			></button>

			<!-- Sidebar -->
			<div
				class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg"
				transition:fly={{ duration: 300, x: 300 }}
			>
				<div class="flex h-full flex-col p-4">
					<button class="mb-4 self-end" onclick={toggleMobileMenu} aria-label="Close menu">
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					<ul class="flex flex-grow flex-col gap-4">
						<li>
							<a
								class={`block rounded p-2 hover:bg-blue-100 ${currentPath === '/' ? 'bg-primary text-white' : ''}`}
								href="/"
								onclick={toggleMobileMenu}
							>
								Home
							</a>
						</li>

						<li>
							<button
								class={`flex w-full items-center justify-between rounded p-2 text-left hover:bg-blue-100 ${mobileServicesOpen ? 'bg-blue-100' : ''}`}
								onclick={toggleMobileServices}
							>
								<span>Services</span>
								<svg
									class={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{#if mobileServicesOpen}
								<ul class="mt-2 ml-4 space-y-2">
									{#each services as service}
										<li>
											<a
												href={service.href}
												class={`block rounded p-2 text-sm hover:bg-blue-100 ${activeService === service.title ? 'bg-blue-100' : ''}`}
												onclick={toggleMobileMenu}
											>
												<div class="flex items-center gap-3">
													<service.icon  />
													<div>
														<h3 class="font-medium">{service.title}</h3>
														<p class="text-xs text-gray-600">{service.description}</p>
													</div>
												</div>
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>

						<li>
							<a
								class={`block rounded p-2 hover:bg-blue-100 ${currentPath === '/company' ? 'bg-blue-500 text-white' : ''}`}
								href="/company"
								onclick={toggleMobileMenu}
							>
								Company
							</a>
						</li>
					</ul>

					<button
						class="mt-auto mb-4 flex items-center justify-center gap-1 rounded-full bg-black px-4 py-3 text-white hover:bg-gray-800"
					>
						<span><CallThrough /></span> Request a call
					</button>
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	.hover-transition {
		transition: background-color 150ms ease;
	}

	.border-primary {
		border-color: #3b82f6;
	}
</style>
