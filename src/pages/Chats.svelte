
<script>
    import Message from "../components/Message.svelte";
    import { addData, listenData } from "../firebase";
    import AuthButton from "../components/AuthButton.svelte";

    let messagesList, scrollToBottom = () => { if (messagesList) messagesList.scrollTop = messagesList.scrollHeight; }
    let messages = []; listenData("messages", data => {
        messages = data.docs.map(doc => ({id: doc.id, ...doc.data()})).sort((a, b) => a.time.seconds - b.time.seconds)
        setTimeout(scrollToBottom, 100);
    });

    let user, message = "";
    const sendMessage = e => {
        e.preventDefault();
        if (!user || message.trim().length < 10) return;
        addData("messages", {
            message: message.trim(),
            user: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            time: new Date(),
        })
        message = "";
        scrollToBottom();
    }
</script>



<div class="h-full w-full col">

    <span class="text-primary">This is a public chat. Do not share sensitive information</span>

    <ul class="flex-1 pb-12 overflow-auto" bind:this={messagesList}>
        {#each messages as message, index (message.id)}
            {@const sent = message.user === user?.uid}
            <li class="row justify-{sent ? 'end' : 'start'}">
                <Message {message} {sent}/>
            </li>
        {/each}
    </ul>

    <form class="row w-full h-16" on:submit={sendMessage} autocomplete="off">
        {#if user}
            <input name="message" minlength="10" type="text" placeholder="Send Message" bind:value={message} />
            <button aria-label="Send Message">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        {:else}
            <AuthButton bind:user />
        {/if}
    </form>
    
</div>