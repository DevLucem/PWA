const assets = [
    "/index.html",
    "/index.css",
    "/index.js",
    "/vendor.js",
    "/svelte.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open("cache-v5").then(cache => {
            cache.addAll(assets).catch(e => console.error("Failed To Store Cache", e))
        })
    )
})

self.addEventListener('message',  messageEvent => {
    if (messageEvent.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener("fetch", fetchEvent => {
    if (fetchEvent.request.url.indexOf('firestore.googleapis.com') === 1)
        fetchEvent.respondWith(
            caches.match(fetchEvent.request).then(res => {
                return res || fetch(fetchEvent.request)
            })
        )
})