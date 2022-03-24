<script>
  import "./lib/Tailwind.svelte"
  import "./style.css"
  import router from "page"
  // todo edit your route pages here
  import Home from "./pages/Home.svelte";
  let current; let params; [
          ["**", Home]
  ].forEach(route => router(route[0], context => {params = context.params; current = route[1]}))
  router.start();
</script>

<svelte:head>
  <title>PWA - Dev Lucem</title>
</svelte:head>

<main class="flex flex-col h-screen w-screen bg-fade">

  <nav class="flex justify-between bg-primary px-4 py-2 shadow-lg">
    <h1 class="font-bold text-xl">PWA</h1>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </nav>

  <section class="flex flex-col items-center flex-1 overflow-auto container m-auto">
    <svelte:component this={current} {params}/>
  </section>

  <footer class="flex justify-around py-4 bg-white shadow shadow-4xl">

    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-primary hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-primary hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
    </svg>

  </footer>

</main>
