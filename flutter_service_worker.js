'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2c0093a30cea1d9944b7963454bc8897",
"index.html": "4d0faf9dacb8aded025c8362fbf1f886",
"/": "4d0faf9dacb8aded025c8362fbf1f886",
"main.dart.js": "ccbf24dcb22980e6dd8e01fabba0f8a3",
"readme.md": "d41d8cd98f00b204e9800998ecf8427e",
"favicon.png": "b3c1262c36a5cbe575b364ee5104d1b4",
"_config.yml": "c9c5a66bfebe2b224cce4986977e26eb",
"icons/Icon-192.png": "b3c1262c36a5cbe575b364ee5104d1b4",
"icons/Icon-512.png": "b3c1262c36a5cbe575b364ee5104d1b4",
"manifest.json": "de4d800feb8872d042d7768f06c00047",
".git/ORIG_HEAD": "c26a4f6809361145abf17e854302b2f1",
".git/config": "bbb0f4c6a8a62c037e8f3dd1433c960d",
".git/objects/0d/3fce67fcd31a6502aea42c4c02b2ac9dac37c5": "528682d8721537c717113c3c3e0a0842",
".git/objects/3b/db9489a1413797759eed11e623d2253dfb78d7": "c7ca7f5f5914b8a3c62bec9f62f923d6",
".git/objects/04/e760bc9ce647bde6d41eed433a24215efc1434": "a10acc879d453b042d8b97a570563d8b",
".git/objects/35/0cbe68650222c12420cd7ca00a9d033b2fbc69": "e7b3bfcef90e3a8ff2677b8f8d9d52ab",
".git/objects/b2/bfc21988a0a72fbdaff5078149b0ee51f3b239": "626c8c58c7932afd96e0b06b48e55884",
".git/objects/ac/b34d6cdfe5df7f5fe72b639a4973ed68f7bb41": "0f452100d830d87dc4d2539eae160fea",
".git/objects/d0/919b52c01a023c69e35ffa4d886d276f5a2f18": "6a2f5099fab58d6395952714c38c71f0",
".git/objects/b3/09f141c7c631c453410e48441aef4c83c41572": "997cb59497c72fa6393fe6634939294a",
".git/objects/b4/810315ed9247440555bed070addf3d9908f14d": "4c119f8da376785d2ab64467fbe464f8",
".git/objects/c9/74a4bdca05b98bd121f253f0ca6b32bff60d56": "6ab1326d6ff59c3eaac8193d376666c1",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/c1/55cbf0edf30e8a5920333687841a7cbdfe3596": "69d7c9f0c4bc14523e346e46a14bf11c",
".git/objects/16/1a2416452ac9c07dacc973630816ba05eb9d6e": "5782aef92d1a440b0d441b396303c879",
".git/objects/8a/2609abeb3fe6e6fb23a779ce464172a96f0ff2": "84d5531ac4bc8e7155e28bae10a15be2",
".git/objects/10/2d20fe69a4e9fa780a0c6bec89a08f477d1ed3": "613233979901c2898a6b1b9b6e9599b9",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/00/97f43c41bddaaaebd9881412b4b6ecdec96780": "2a53714fbda71f8d7ff0a46719d62e07",
".git/objects/30/18333ec580bb32ef2f4c4ed072698248aee785": "43eb652e3e81687a488364472517e97f",
".git/objects/5b/aa0c99d999c73d22a6bebce235632873128dd4": "e907c1d25bac2f24d2540cfe7d417a41",
".git/objects/6d/aff7a36a43bc9bd37079aba3268b480ed6c34a": "3170de9290b17564a67287a6d690b8c2",
".git/objects/01/a392d678f0be8e69940441968b5fee9a8e6a71": "f67cb68ee813a1ba72bc11ccc9aaf750",
".git/objects/52/dddf597eb3f7cd5ff07d1df9c06435e8f223cc": "158779dc4460eb3c726e247d5e27d718",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/90/5d9dfebc3b6bb1f23a21037df43968a4dfdd26": "dffb2a8723b4fe8d2e34833d5dabe0d4",
".git/objects/b7/4b42479197022e4ffcb0380548b2a216b1d676": "677abbd75d199a2a5e1de00b17e403e3",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/e1/5a2a51cce389f089cdc8f4c4ffcfab8285c180": "a9c92f779a498fdb2d136baadc416148",
".git/objects/cc/35c1df2caa93681dc09d66b3c37ed898755f19": "857eaf13bb43bef1b25ea99110d48a53",
".git/objects/e6/12f4b8e4206f9cea6d770f587f1c1ce9261700": "2ff77e8343bf5595a6af207e41b9b061",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f7/00557d2ffcf357a7676cf42d25e610691d5a0e": "11bc458000b462bc27a1c539d6ae54a8",
".git/objects/cb/fb6d6d9fefebe95ee0aff742e4a4713a81c443": "bf6d439a4c16583618a5a69edd78d470",
".git/objects/cb/3281bbb8323a07d4bc6510ea662ce8d6f9472f": "cb7b3499374df3e883a872ce47cbc26b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/23/6c02370c771e9cceb207aa5b590a5df4cfa0b3": "d4fdad5a7024b6427bdcd56c5ac057d1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/60ebd60a97c24b65c6ac837df31b023dae4e5c": "e64f5b7fc8fce5f664a89af1c3e16723",
".git/objects/40/ea2f1c8a8a8793807bef23900d93832e6c24db": "9c9d8cd509b10bd4488d9572d27574fa",
".git/objects/2b/3bcdea62e2177c4d6e61bc9e1f76d9ac3a0f37": "98f6ab5150bf80afc501e704b747cfb6",
".git/objects/78/9792f93b14ce3bf68d51d9599b26e6a82acdbe": "b2bd6da2ea8b8be55b094119e0487e60",
".git/objects/7f/f876a2e22e538cbe7dbbb97a0f5fb495ee7077": "5b15d75e5d01d26e58da1698208486b4",
".git/objects/8e/d6ed138a27e97062b9e9a10748e3a2256ed9b7": "a0bf9cc665d82578aec05cd5b5ae8e9f",
".git/objects/8e/85bb774eba80e96325d7c9d3a4cf1fe6728a97": "691ba5bb6156b9742b775d6e616675d3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae601006bc11f8f950644d67fe9c2cef",
".git/logs/refs/heads/master": "ae601006bc11f8f950644d67fe9c2cef",
".git/logs/refs/heads/main": "35ab0f16c966f2c67bdd817c429b2d12",
".git/logs/refs/remotes/origin/master": "965a3ad5b82cfcd2878d58fbc7ed0a85",
".git/logs/refs/remotes/origin/main": "388a6a5acf77ff6d9834f8a06a712976",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "c26a4f6809361145abf17e854302b2f1",
".git/refs/heads/main": "fb4e67c4c4c4a18a1b84070bd163ee50",
".git/refs/tags/1.0": "fb4e67c4c4c4a18a1b84070bd163ee50",
".git/refs/remotes/origin/master": "c26a4f6809361145abf17e854302b2f1",
".git/refs/remotes/origin/main": "864e9dfb649633b34bb4516ac740c0b2",
".git/index": "8653daf3e455f9e2dcbb95068597625b",
".git/COMMIT_EDITMSG": "d961836e2a3d14870359fbd72cd010f1",
".git/FETCH_HEAD": "95f5882f52a93367f759932431e7846a",
"assets/images/logo_.png": "d1804d1bb56a2b3507d7c061a9ed181b",
"assets/images/img8.jpg": "7507e16cebe9f1dcbe017a1245bdf6af",
"assets/images/img5.jpg": "88beb0955ddfe56a2d8263c9e94a04af",
"assets/images/img4.jpg": "35a30496e32a87be21881bdfdfea1cbd",
"assets/images/img6.jpg": "31a65e6adf4337197faa3c1121184c2b",
"assets/images/img7.jpg": "932306d02ef977174f33911f89becf87",
"assets/images/logo.jpg": "15df26d385b8cced503494f9120566bf",
"assets/images/img3.jpg": "f653aadaa9c1509dbc4b04b5f933fadc",
"assets/images/img2.jpg": "2fed8ed51bbfee503475e48f12a03ac5",
"assets/images/img1.jpg": "35eec9598224a367b8183cc52594b223",
"assets/images/about.jpg": "3632b01ddc55f35dca8aaee06183165a",
"assets/AssetManifest.json": "e56f41904bdd7177d8e905312b4075be",
"assets/NOTICES": "ebf6f601705adb486c15a08957850405",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
