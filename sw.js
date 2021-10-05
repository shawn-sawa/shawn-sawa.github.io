self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      console.log("about to save files");
      return cache.addAll([
        "./",
        "./style.css",
        "/favicon.jpg",
        "/index.html",
        "/index.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
