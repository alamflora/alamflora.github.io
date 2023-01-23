'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8415dcac68b83659ad897feeadd14a3d",
"index.html": "e7d8f6420270fecb5f3d9d963ab60e9c",
"/": "e7d8f6420270fecb5f3d9d963ab60e9c",
"main.dart.js": "3782b3afa428107a313cea5557075c5f",
"favicon.png": "606c2005ce928c82043b82f105198582",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4664c687a28e1cdf7997096eea3ce414",
"assets/AssetManifest.json": "f348c91b89b7dff3f575826a091f6f7f",
"assets/NOTICES": "82ad51d51b9449a19b3de02bb4a14249",
"assets/FontManifest.json": "85e774a49f2e253f2778588ec8d3c9cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/svg/myflora.svg": "c5426268f7ca7a6489069c4feb58752a",
"assets/assets/svg/Icon%2520ionic-ios-qr-scanner.svg": "95bc90cfea9fce962d89d60791e716f3",
"assets/assets/svg/icon_ehadir.svg": "3f5ba980646cc46507f28cb99c0b424a",
"assets/assets/svg/icon_eta.svg": "7a935e3a177292a3357844f13ae2cd3b",
"assets/assets/svg/no_activity.svg": "b99fc30b9723b901e3253eabf2412ebd",
"assets/assets/svg/icon_user_default.svg": "039d96be30f803d398c07ddfd226e030",
"assets/assets/svg/clockinout.svg": "496d35d5347cb2b70c689af289558b4a",
"assets/assets/svg/quick_app/eTa_qapp.svg": "99907aa569b485c50e4de11ff224b3c0",
"assets/assets/svg/quick_app/ePay_qa.svg": "fde41c4417b144cbbc1b028d5cf3a786",
"assets/assets/svg/quick_app/ePhone_qa.svg": "1dbc55aa1e84787b9de4391a9c9c12e4",
"assets/assets/svg/quick_app/ePay_qapp.svg": "9c68bec27373e6a1f97941535dc630f6",
"assets/assets/svg/quick_app/eTA_qa.svg": "88a5f7c786ff9d2d9d42683f8a967841",
"assets/assets/svg/quick_app/ePhone_qapp.svg": "17d9fef140e5b138bd5ee0769912f0bc",
"assets/assets/svg/quick_app/eHadir_qapp.svg": "ff0a23c211fca824e81e82bfe415ddd8",
"assets/assets/svg/quick_app/eLeave_qa.svg": "92cf19b91d45b1afc0a6e57d37d4758f",
"assets/assets/svg/quick_app/eHadir_qa.svg": "bdaa130b8246731b2ff32d7d35ac74e7",
"assets/assets/svg/quick_app/eClaim_qapp.svg": "0c07743d0a846e6aa27a1129e987ce0a",
"assets/assets/svg/quick_app/eClaim_qa.svg": "b6e6fb2d04fdf0fcdf8da99acdffb253",
"assets/assets/svg/quick_app/eLeave_qapp.svg": "492ecbbe9514a78fd70c654ef481e1ce",
"assets/assets/svg/icon_eclaim.svg": "db99c04333cb799be3d19d8b24130d24",
"assets/assets/svg/icon_submited.svg": "073e44c0d230b6580962ed7d308306ed",
"assets/assets/svg/icon_exit_blue.svg": "769ffd2bf02eb1638f0741e9bb0a82e9",
"assets/assets/svg/no-results.svg": "c2e4cd14d48c9ba4c443610b6e1a5c1b",
"assets/assets/svg/myflora_logo.svg": "3e170771a3473f8a442f788a925432c1",
"assets/assets/svg/digitalization_white.svg": "dac021e0c2eb95e8a4b46b577234a154",
"assets/assets/svg/icon_close.svg": "054599a551c954f2c633e8942bc7301d",
"assets/assets/svg/icon_epayslip.svg": "4015c3d614a72106c839568b346181e2",
"assets/assets/svg/onboard/onboarding_05.svg": "c4920a3bccd3daa39c693ec3d4a171a4",
"assets/assets/svg/onboard/onboarding_04.svg": "0529468353c9c733e3cde0b2e22d1380",
"assets/assets/svg/onboard/onboarding_01.svg": "df03c78bb38626f0bde1948a5002c47a",
"assets/assets/svg/onboard/onboarding_03.svg": "d503e493044e389a3b0ff95c3f1331d6",
"assets/assets/svg/onboard/onboarding_02.svg": "23a49e5d0ee8116e56e8bc5791434f70",
"assets/assets/svg/map_location.svg": "78ddac720f101f177df76e86cda7ebcc",
"assets/assets/svg/afsb_new.svg": "80f43fe5ef7aa4dc798e10377912894d",
"assets/assets/svg/mflora_white.svg": "2a6d01f5b29c3e2b9ef73c67070096d8",
"assets/assets/svg/icon_etravel.svg": "edf0b370e120264d562f1f8c8d9b5d6a",
"assets/assets/svg/afsb_white.svg": "167444c37612b687b8ad60d7f45294e2",
"assets/assets/svg/icon_ephone.svg": "4a3a9d367140359258fe95aa054dda70",
"assets/assets/svg/myflora_icon.svg": "946df434cda5a61b2e1a89d1594627a8",
"assets/assets/highlight/recycleCloth_h.png": "096d901690a3bfb18bff13692a499b4e",
"assets/assets/highlight/platform_h.jpeg": "9fb216bc0579083fbe5413521c0db754",
"assets/assets/highlight/ccb_h.png": "57b890b0323bd4754c8b11c25ff96ed0",
"assets/assets/png/myFlora_app_icon_squared.png": "c4fb8afc267308676bb40c6e1948a937",
"assets/assets/png/digitalization_white.png": "c87d464a9d16e235fafaaac3f7718723",
"assets/assets/png/whitebg_800x70.png": "c469a3efd05b5a62c32d639e4be8a5e2",
"assets/assets/png/no-results.png": "80f86fa0c7a3a8e67a421d708a65d45a",
"assets/assets/png/flexi_poster/flexi_01.png": "1c54d0a24b4c35a9c983a5aa9cfe79de",
"assets/assets/png/flexi_poster/flexi_03.png": "97651d0f7276a847ed34bde27daa6dbe",
"assets/assets/png/flexi_poster/flexi_02.png": "110950b22295f2d7bf2cf962682e6da7",
"assets/assets/png/flexi_poster/flexi_05.png": "6eb04da006f2474edd150912c229e6f2",
"assets/assets/png/flexi_poster/flexi_04.png": "f6d0584a92f3b78c7888e34c4a07da77",
"assets/assets/png/myflora_background.png": "35272dfd4761ac7b1d89e9ad4ffa128f",
"assets/assets/png/afsb_nobg.png": "6566ef3742f08e5e92a31c04e2aaa0f0",
"assets/assets/png/logo-afsb.png": "95109bf20f58c082d9720d4facade022",
"assets/assets/png/whitebg_800x100.png": "1440db7377d289b0a9fcbe185386bda2",
"assets/assets/png/whitebg_400x80.png": "5278b115c6895dedbcaa50b6a44e4992",
"assets/assets/png/myflora_foreground.png": "dd8740ffe3993485d2390e75fa4116f3",
"assets/assets/png/mf_logo.png": "b290d82ff27843ee03fa4f55519b148f",
"assets/assets/png/afsb_white.png": "f132eb7537cea30701f888c3ea7fd132",
"assets/assets/png/mflora_white.png": "410abe84535a0fc890314e5875ef17c6",
"assets/assets/png/myFlora_app_icon.png": "085bde7067c92838990894ff9e5913cd",
"assets/assets/fonts/Nunito-SemiBold.ttf": "82c3a6e2c1edc45f4f7bb9a8f05d26a7"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
