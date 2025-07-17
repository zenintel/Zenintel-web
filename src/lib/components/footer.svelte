<script>
	import LinkedInIcon from "$lib/icons/LinkedIn-Icon.svelte";
	import ZenIntelLogo from "$lib/icons/zenIntel-logo.svelte";
  import Modal from "./modal/modal.svelte";

  let open =$state(false)
</script>
<footer class="bg-black px-4 py-10 lg:py-24 lg:px-40">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col items-center gap-10 md:flex-row md:justify-between">
				<ZenIntelLogo width="129" height="44"></ZenIntelLogo>
				<ul class="flex gap-2 text-sm text-white md:gap-10">
					<li><a href="/#">Home</a></li>
					<li><a href="/#">Company</a></li>
					<li><a href="/#">Service</a>x</li>
					<li>Blog</li>
					<li>Contact us</li>
				</ul>
			</div>

			<div class="flex flex-col gap-5 rounded-lg bg-[#282828] px-4 py-6 md:flex-row md:justify-between ">
				<p class="text-[#9D9D9D] md:w-[500px]">
					At Zenintel, we are innovative IT solution engineers harnessing the power of cutting-edge
					technologies to drive success.
				</p>
				<button class="bg-primary rounded-sm px-3.5 py-2 text-white" onclick={()=>{open=!open}}>Book a free call</button>
					<Modal  bind:open></Modal>
			</div>
			<div class="flex flex-col items-center gap-4 md:flex-row justify-between">
				<p class="text-center text-sm text-white">sales@zen-intel.com | +91 93617 78252</p>
				<p class="text-center text-sm text-white">Zenintel © 2025. All Rights Reserved.</p>
				<div>
					<a href="/#"><LinkedInIcon /></a>
				</div>
			</div>
		</div>
</footer>