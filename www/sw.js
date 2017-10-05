importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/ttstable.js",
    "revision": "711ac0d4081ad0402603325393105bbe"
  },
  {
    "url": "build/ttstable.registry.json",
    "revision": "1705e34aa6cc6dad61c507e8f70491f3"
  },
  {
    "url": "build/ttstable/ee4cyti9.js",
    "revision": "46d2c6744de7072bd056a3d83e3db44e"
  },
  {
    "url": "build/ttstable/o3drxbuj.css",
    "revision": "7c7022f97fcb0152243e1f034e71e48b"
  },
  {
    "url": "build/ttstable/ttstable.ds1phpbn.js",
    "revision": "892e2abea83dd272a7ce51af040753ce"
  },
  {
    "url": "build/ttstable/ttstable.vuwvplxs.pf.js",
    "revision": "b27a0ce2fd6d65a07265cfdf2c4155d8"
  },
  {
    "url": "index.html",
    "revision": "cfdea60a5757b05f5f8e4a315a407bd9"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
