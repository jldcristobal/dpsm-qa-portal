// These listeners will make the service worker immediately available for the page
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
    console.log('[SW] serviceworker installed!');
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
    console.log('[SW] serviceworker ready!');
});

