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
    "revision": "e0a7c8b3ff50277380dd4be09f1e9014"
  },
  {
    "url": "build/ttstable.registry.json",
    "revision": "3565a89641ade6a97a29ffbaa6b2b85a"
  },
  {
    "url": "build/ttstable/kfmgbikx.css",
    "revision": "1b7a05216a2a562304e3b816253d30e6"
  },
  {
    "url": "build/ttstable/kkon0alr.js",
    "revision": "5cb8486da9b226e45788e8ea2f31ebf7"
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
