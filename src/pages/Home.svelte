<script>
    import Button from "../components/AuthenticationButton.svelte";
    import {listenData} from "../firebase";
    export let params;
    $: if (params) console.log('Received Params URL', params)
    let groups = [];
    listenData("groups", r => {groups=[]; r.forEach(group => groups.push(group.data()))})
</script>

<div class="flex flex-col max-w-lg shadow shadow-xl bg-white rounded m-4 p-4 space-y-4">

    <h1>Progressive Web App</h1>

    <div class="grid grid-cols-4 justify-around">
        {#each [['https://svelte.dev/', '/svelte.png'], ['https://vitejs.dev/', 'https://vitejs.dev/logo.svg'], ['https://tailwindcss.com/', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'], ['https://firebase.google.com/docs/hosting', 'https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png']] as icon}
            <a href={icon[0]} class="duration-500 m-1 hover:scale-105 hover:shadow-xl border border-.5 border-fade p-2 rounded">
                <img alt="Built With" src={icon[1]} class="w-full">
            </a>
        {/each}
    </div>

    <div class="flex">
        Firestore:
        {#each groups as group}
            {group.name}
        {/each}
    </div>

    <p>
        Built with <strong> <a href="https://svelte.dev/" target="_blank">Svelte!</a> </strong> for cybernetically enhanced web apps.
        A shake of <strong> <a href="https://vitejs.dev/" target="_blank">Vite!</a> </strong> for just in time testing.
        <strong> <a href="https://tailwindcss.com/" target="_blank">Tailwind!</a> </strong> Speedy UI builder.
        And <strong> <a href="https://firebase.google.com/docs/hosting">Firebase!</a> </strong> your no backend no hassle baby partner.
    </p>

    <div class="mx-auto">
        <Button/>
    </div>

</div>

<style>
    p a {
        @apply text-primary underline;
    }
</style>
