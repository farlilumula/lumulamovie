import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ request }) => request.destination === 'document' || request.destination === 'script',
    new NetworkFirst()
);

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst()
);