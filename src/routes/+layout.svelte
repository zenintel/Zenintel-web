<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import NavBar from '$lib/components/nav-bar.svelte';
	import POC from '$lib/components/poc.svelte';

	import '../app.css';
	let { children } = $props();
</script>

<NavBar />

{@render children()}
<POC/>
<Footer />
