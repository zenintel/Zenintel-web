<script lang="ts">
    	type propsType = {
		width?: string;
		height?: string;
	};
	const { width = '21', height = '20' }: propsType = $props();
</script>

<svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6896 3.68359H6.26847C4.40813 3.68359 2.90002 5.1917 2.90002 7.05204V14.631C2.90002 16.4914 4.40813 17.9995 6.26847 17.9995H15.6896C17.5499 17.9995 19.058 16.4914 19.058 14.631V7.05204C19.058 5.1917 17.5499 3.68359 15.6896 3.68359Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8492 2V5.36845" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.90002 2V5.36845" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.90002 8.73828H19.058" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
