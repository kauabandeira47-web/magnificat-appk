const CACHE = "magnificat-cache-v4";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.json", "./assets/magnificat-logo.jpg", "./assets/icon-192.png", "./assets/icon-512.png"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
