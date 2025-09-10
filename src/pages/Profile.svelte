<script>
    import AuthButton from '../components/AuthButton.svelte';
    let user;
</script>

<div class="card space-y-4">
    <div class="row center space-x-4">
        <img class="profile" src="{user?.photoURL || "https://i.pravatar.cc/150?img=3"}" alt="User Profile" />
        <div class="text-left">
            <h2>{user?.displayName || "Not Signed In"}</h2>
            <p>{user?.email}</p>
        </div>
        <AuthButton bind:user />
    </div>
    <p>{user?.metadata?.creationTime}</p>
</div>
