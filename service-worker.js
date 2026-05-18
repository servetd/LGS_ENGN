/* LGS İngilizce Macerası - Service Worker
 * Uygulama kabuğunu (app shell) önbelleğe alır, internetsizken de açılır.
 * Yeni sürümde sw'nin CACHE adını artırmak yeterli — eskiler otomatik silinir.
 */
const CACHE = "lgs-eng-cache-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./data/vocabulary.js",
  "./data/stems.js",
  "./data/sentences.js",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Cache-first: app shell hızlı yüklenir, ağ olmasa da çalışır.
// HTML için network-first (yeni dağıtımları yakalamak için).
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const isHTML = e.request.mode === "navigate" ||
                 (e.request.headers.get("accept") || "").includes("text/html");

  if (isHTML) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res && res.status === 200 && url.origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => cached))
  );
});
