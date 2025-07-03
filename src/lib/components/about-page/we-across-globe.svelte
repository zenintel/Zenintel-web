<script>
	// You can add any necessary logic here
	import WorldMap from '$lib/images/map.png';
</script>

<div class="flex lg:min-h-screen flex-col items-center justify-center bg-gray-50 p-4 md:p-8">
	<div class="w-full max-w-4xl rounded-lg p-8 text-center">
		<h1 class="text-primary mb-8 text-xs font-bold">WE ACROSS GLOBE</h1>
		<h2 class="mb-8 text-xl font-semibold md:text-3xl">Our Valued Partners</h2>
	</div>
	<div class="flex max-w-[300px] gap-3 rounded-xl border-0 p-6 pt-4 pb-4 font-semibold shadow-xl">
		<ul>USA</ul>
		<li>Middle East</li>
		<li>Africa</li>
	</div>
	
		<img src={WorldMap} alt="world map"  class="mt-8 w-[80%]"/>
	
</div>

<style>
	.partner-item {
		padding: 12px 24px;
		border-radius: 8px;
		background-color: #f8fafc;
		transition: all 0.3s ease;
	}

	.partner-item:hover {
		background-color: #e2e8f0;
		transform: translateY(-2px);
	}
</style>
