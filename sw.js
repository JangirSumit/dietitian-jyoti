const DYNAMIC_CACHE = "dynamic";
const STATIC_CACHE = "static";
const CACHE_ITEMS = [
  "/",
  "index.html",
  "about.html",
  "blogs.html",
  "cancellation.html",
  "contacts.html",
  "faq.html",
  "payments.html",
  "plans.html",
  "terms-conditions.html",
  "appointment.html",
  "tips.html",
  "404.html",
  "css/materialize.css",
  "css/materialize.min.css",
  "css/plans.css",
  "css/style.css",
  "css/timeline.css",
  "js/init.js",
  "js/materialize.js",
  "js/materialize.min.js",
  "manifest.json",
  "content/logo32.ico",
  "content/logo64.png",
  "content/logo128.png",
  "content/logo256.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://code.jquery.com/jquery-2.1.1.min.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function (cache) {
      cache.addAll(CACHE_ITEMS);
    })
  );
});

self.addEventListener("activate", function (event) {
  // Perform install steps
  console.log("Activating Service Worker", event);
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  return fetch(event.request)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      return caches.match("404.html").then((response) => response);
    });
});
