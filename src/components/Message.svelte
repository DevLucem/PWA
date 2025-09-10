<script>
    export let message;
    export let sent;
</script>

{#if !sent}
    <img class="profile" src="{message.photoURL}" alt="User Profile">
{/if}
<div class="{sent ? 'message-card-sent' : 'message-card-received'}">
    <h3>{message.displayName}</h3>
    <p>{message.message}</p>
    <p class="text-right mt-8 span">{message.time.toDate().toLocaleTimeString()}</p>
</div>
{#if sent}
    <img class="profile" src="{message.photoURL}" alt="User Profile">
{/if}

<style>
    @reference "../app.css";
    .message-card-received {
        @apply p-4 rounded-r-3xl bg-border rounded-bl-3xl text-start mr-12 my-2;
    }
    .message-card-sent {
        @apply bg-white p-4 rounded-l-3xl rounded-br-3xl text-start ml-12 my-2;
    }
</style>