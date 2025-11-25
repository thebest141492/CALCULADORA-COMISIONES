self.addEventListener("install", event => {
  console.log("Service worker instalado");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service worker activado");
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
