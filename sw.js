// ملف sw.js
const CACHE_NAME = 'masbaha-v2';

// أهم سطر عشان التحديث يشتغل فوراً وما يصفرش العداد
self.skipWaiting(); 

self.addEventListener('install', (event) => {
    // بيجبر النسخة الجديدة تشتغل فوراً
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // بيخلي النسخة الجديدة تسيطر على الصفحة "لايف"
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // بيجيب البيانات من النت، ولو مفيش بيجيبها من الكاش
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
