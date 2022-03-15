<script>
    import Counter from "../components/Counter.svelte";
    export let params;
    console.log('Received Params', params)
</script>

<div class="card space-y-4">

    <img src="/svelte.png" alt="Svelte Logo" width="128"/>

    <div class="h-scroll">
        <img alt="Vite" src="https://vitejs.dev/logo.svg" width=64>
        <img alt="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" width=72>
        <img alt="Firebase" src="https://www.pngrepo.com/download/303670/firebase-1-logo.png" width=64>
    </div>

    <Counter/>
</div>
<!--

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    img {
        height: 16rem;
        width: 16rem;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
    }
    p {
        max-width: 14rem;
        margin: 1rem auto;
        line-height: 1.35;
    }
    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }

        p {
            max-width: none;
        }
    }
</style>-->
