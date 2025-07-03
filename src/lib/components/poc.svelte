<script lang="ts">

	import Calendar from "$lib/icons/calendar.svelte";
    import POC from "$lib/images/poc.png"
</script>
<section class="bg-[#D8E6FF] px-4 md:px-20 pt-14">
    <div class="flex flex-col gap-8 md:flex-row md:justify-around ">
        <div class="flex-1 flex flex-col gap-4 max-w-[500px] mt-24">
            <h1 class="text-2xl font-bold">Free POC for 40 Hrs</h1>
            <p class="text-sm text-[#496075]">
                To build our trust with you, we offer Probono Proof of Concept (POC) services, allowing you 
                to validate innovative ideas with no upfront cost and ensure a solid foundation for our 
                partnership.
            </p>
            <button class="bg-primary flex items-center justify-center gap-3 rounded-xl px-4 py-3.5 text-white w-full md:w-fit">
                <span><Calendar /></span>Book a free call
            </button>
        </div>

        <div class="relative flex-1 max-w-[500px]">
            <img src={POC} alt="men" class="w-full" />
            <div class="absolute right-0 bottom-3 w-[200px] rounded-2xl bg-white p-3 text-xs text-black shadow-md md:bottom-24 md:w-[240px] md:p-4 md:text-sm">
                <p>We transform businesses with tailored IT solutions using the latest technology.</p>
            </div>
        </div>
    </div>
</section>