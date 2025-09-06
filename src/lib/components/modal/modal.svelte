<script lang="ts">
  import Close from "$lib/icons/close.svelte";
  import { Dialog } from "bits-ui";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  let { open = $bindable(false) } = $props();
  let loading = $state(false);

  let firstName = $state("");
  let lastName = $state("");
  let companyName = $state("");
  let phoneNumber = $state("");
  let service = $state("");
  let query = $state("");
  let agreeToContact = $state(false);

  let emailjs: any;

  onMount(async () => {
    if (browser) {
      const mod = await import("@emailjs/browser");
      emailjs = mod.default || mod;
    }
  });

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (!browser || !emailjs) return;
    loading = true;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: `${firstName} ${lastName}`,
          company: companyName,
          phone: `+91-${phoneNumber}`,
          service: service,
          query: query,
          date: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Reset state
      firstName = "";
      lastName = "";
      companyName = "";
      phoneNumber = "";
      service = "";
      query = "";
      agreeToContact = false;
      open = false;

      alert("Thank you for your submission! We will contact you soon.");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      loading = false;
    }
  }
</script>
 

<Dialog.Root bind:open>
  <!-- Trigger Button -->

  <Dialog.Portal>
    <!-- Overlay -->
    <Dialog.Overlay class="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />

    <!-- Content -->
    <Dialog.Content
      class="fixed left-1/2 top-1/2 z-50 w-full max-md:max-w-xs md:max-w-md xl:max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg focus:outline-none"
    >
      <div class="relative">
        <!-- Close Button -->
        <Dialog.Close
          class="absolute -right-2 -top-2 rounded-full p-1 text-gray-500 hover:text-gray-700"
        >
          <Close />
          <span class="sr-only">Close</span>
        </Dialog.Close>

        <!-- Title -->
        <Dialog.Title class="font-semibold text-gray-900 mb-2">
          Power Up Your Tech Force
        </Dialog.Title>

        <!-- Form -->
        <form onsubmit={handleSubmit} class="mt-4 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                id="firstName"
                bind:value={firstName}
                type="text"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="First Name"
              />
            </div>

            <div>
              <input
                id="lastName"
                bind:value={lastName}
                type="text"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <input
              id="companyName"
              bind:value={companyName}
              type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Company Name"
            />
          </div>

          <div>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500"
              >
                +91 -
              </div>
              <input
                id="phoneNumber"
                bind:value={phoneNumber}
                type="tel"
                placeholder="Phone Number"
                class="w-full rounded-md border border-gray-300 px-3 py-2 pl-14 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <select
              id="service"
              bind:value={service}
              class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select a service</option>
              <option value="Software development">Software development</option>
              <option value="Product Design">Product Design</option>
            </select>
          </div>

          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="agreeToContact"
                bind:checked={agreeToContact}
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
            </div>
            <label
              for="agreeToContact"
              class="ml-2 block text-sm text-gray-700"
            >
              It is ZenIntel's promise to offer a strictly spam free service. We
              only call you if you want us to do so.
            </label>
          </div>

          <div>
            <label
              for="query"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Write your query here*
            </label>
            <textarea
              id="query"
              bind:value={query}
              rows={4}
              class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {loading ? "Loading..." : "Get started →"}
          </button>
        </form>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
