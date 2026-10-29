// Network first, so a new plan shows up as soon as there is a connection; cache as offline fallback.
const CACHE = "lektier-v4";
const SHELL = ["./", "index.html", "plan.js", "aarsplan.js", "config.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // GitHub Pages sends max-age=600; "no-cache" asks the server every time so an uploaded plan.js shows at once.
  const req = e.request.mode === "navigate" ? e.request.url : e.request;
  e.respondWith(
    fetch(req, { cache: "no-cache" })
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
