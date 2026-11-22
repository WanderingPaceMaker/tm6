// Sans réseau : la page et ses fichiers viennent du cache. Avec réseau : le cache est servi tout de suite
// et mis à jour en arrière-plan ; la nouvelle version s'affiche au lancement suivant.
const CACHE = 'tm6-2cc001eace';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-512.png',
  'AtkinsonHyperlegible-Regular.ttf', 'AtkinsonHyperlegible-Bold.ttf', 'AtkinsonHyperlegibleMono.ttf'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(c => c.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; });
    if (hit) { net.catch(() => {}); return hit; }
    return net;
  })));
});
