<script>
    import AuthButton from '../components/AuthButton.svelte';
    let user;
</script>

<div class="card center space-y-8 max-w-[500px]">
    <h2>Progressive Web App</h2>
    <div class="row justify-around center">
        {#each [['https://svelte.dev/', '/svelte.png'], ['https://vitejs.dev/', 'https://vitejs.dev/logo.svg'], ['https://tailwindcss.com/', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'], ['https://firebase.google.com/docs/hosting', 'https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png']] as icon}
            <a href={icon[0]} class="flex-1 center img">
                <img alt="Built With" src={icon[1]} class="fit">
            </a>
        {/each}
    </div>
    {#if user}
        <p>Hi <span>{user.displayName}</span></p>
    {/if}
    <p>
        Built with <strong> <a href="https://svelte.dev/" target="_blank">Svelte!</a> </strong> for cybernetically enhanced web apps.
        A shake of <strong> <a href="https://vitejs.dev/" target="_blank">Vite!</a> </strong> for just in time testing.
        <strong> <a href="https://tailwindcss.com/" target="_blank">Tailwind!</a> </strong> Speedy UI builder.
        And <strong> <a href="https://firebase.google.com/docs/hosting">Firebase!</a> </strong> your no backend no hassle baby partner.
    </p>
    <AuthButton bind:user />
</div>

