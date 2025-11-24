const CACHE_NAME = 'financni-kalkulator-v1';
const urlsToCache = [
  './financni_kalkulator.html',
  './manifest.json'
];

// Namestitev service workerja in caching datotek
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Prestrezanje omrežnih zahtevkov
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - vrnemo response iz cache
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Čiščenje starega cache ob aktivaciji
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
