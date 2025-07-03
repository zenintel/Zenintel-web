<script>
    export let name;
    export let role;
    export let imageComponent; 
    export let text;
  </script>
  
  <div class="flex max-w-md items-start space-x-4 rounded-xl bg-white p-4 shadow-lg">

    <div class="h-12 w-12 rounded-full overflow-hidden">
      <svelte:component this={imageComponent} />
    </div>
    
    <div>
      <h3 class="text-lg font-semibold">{name}</h3>
      <p class="text-sm text-gray-500">{role}</p>
      <p class="mt-2 text-sm text-gray-700">{text}</p>
    </div>
  </div>
  