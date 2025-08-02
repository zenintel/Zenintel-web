<script>
	const blogs = [
		{
			title:
				'The Importance of Product Engineering, Modernization, and Maintenance in Business Growth',
			linkText: 'View more →',
			image: "https://i.ibb.co/qMjVFDfV/home-computer.png",
			alt: 'Laptop representing product engineering'
		},
		{
			title: 'The Importance of Microsoft Power Apps, Azure, & SharePoint for Modern Businesses',
			linkText: 'View more →',
			image: "https://i.ibb.co/SX5NSLsy/home-teams.png",
			alt: 'Software icons representing Microsoft technologies'
		},
		{
			title: 'Maximizing Your Business Potential with Shopify: A Complete Guide',
			linkText: 'View more →',
			image: "https://i.ibb.co/Y7Kv2QGB/home-max.png",
			alt: 'Mobile device representing Shopify'
		}
	];
</script>

<section class="bg-white px-4 py-32 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-6xl">
		<!-- Header Section -->
		<div class="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
			<div>
				<h2 class="text-primary mb-2 text-xs font-bold">OUR BLOGS</h2>
				<p class="mx-auto max-w-4xl text-2xl md:text-4xl font-bold">
					See what our customers have to say about
					Zenintel claim-handling experience
				</p>
			</div>
			<button  class="font-medium text-white bg-[#1A2B3B] rounded-lg p-3"> <a href="/blog">View all</a></button>
		</div>

		<!-- Blog Cards -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each blogs as blog}
				<div class=" flex flex-col justify-between overflow-hidden rounded-lg">
					<div>
						<img
							src={blog.image}
							class="aspect-3/2 w-full rounded-lg object-cover"
							alt={blog.alt}
						/>
					</div>
					<!-- Placeholder for blog image -->
					<div class="flex flex-col justify-between pt-6">
						<h3 class="mb-4 line-clamp-3 text-lg font-semibold text-gray-800">
							{blog.title}
						</h3>
						
					</div>
					<div>
							<a
								href="/blog"
								class="inline-flex items-center font-medium text-blue-600 hover:underline"
							>
								{blog.linkText}
							</a>
						</div>
				</div>
			{/each}
		</div>
	</div>
</section>
