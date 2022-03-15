<script>
  import "./lib/Tailwind.svelte"
  import "./style.css"
  import router from "page"
  import Home from "./pages/Home.svelte";
  let current; let params; [
          ["**", Home]
  ].forEach(route => router(route[0], context => {params = context.params; current = route[1]}))
  router.start();
</script>

<svelte:head>
  <title>Progressive Web App Template</title>
</svelte:head>

<main class="contain">
  <svelte:component this={current} {params}/>
</main>
