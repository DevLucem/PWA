const staticDevCoffee = "cache-v1"
const assets = [
    "/index.html",
    "/index.css",
    "/index.js",
    "/vendor.js",
    "/svelte.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets).catch(e => console.error("Failed To Store Cache", e))
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})