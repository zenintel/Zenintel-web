    <script lang="ts">
    // Assuming you have these images in your project
    import Clients from "$lib/images/blog/clients.png";
    </script>

    <section class="bg-[#EFF3FB] px-4 flex flex-col justify-center min-h-screen">
    <div class="max-w-6xl mx-auto">
        <!-- Main heading section        -->
        <div class="text-center mb-12">
        <h1 class="text-2xl lg:text-6xl font-bold  leading-tight tracking-tight mx-auto">
            Stay ahead with <span class="text-blue-600 italic">ZenIntel expert</span
            > insights, industry trends, and innovative solutions for the ever-evolving
            tech landscape
        </h1>
        <p class="text-gray-600 text-base mt-6    mx-auto">
            Explore expert insights on Shopify, Salesforce, Microsoft, AI, and
            Product Engineering<br />
            Stay ahead with ZenIntel's latest tech trends, solutions, and innovations
        </p>
        </div>
        <div class="mt-16 w-full max-w-5xl mx-auto">
            <img
            src={Clients}
            alt="ZenIntel clients including JUMEIRAH, BigPay, and others"
            class="w-full h-auto object-contain"
            />
        </div>
    </div>
    </section>
