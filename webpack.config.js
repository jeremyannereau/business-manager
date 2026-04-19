const Encore = require('@symfony/webpack-encore');
const WorkboxPlugin = require('workbox-webpack-plugin');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableSingleRuntimeChunk()
    .addEntry('app', './assets/app.js')
    .addEntry('auth', './assets/auth.js')
    .splitEntryChunks()
    .enableVueLoader()
    .enableSassLoader()
    .enablePostCssLoader()

// ── Service Worker avec Workbox ──────────────────────────────────────────────
// Activé en production ET en dev (pour tester offline localement)
// Encore.addPlugin(new WorkboxPlugin.GenerateSW({
//     clientsClaim: true,
//     skipWaiting: true,
//     cleanupOutdatedCaches: true,

//     // App shell : charge l'app même sans réseau
//     navigateFallback: '/index.html',
//     navigateFallbackDenylist: [
//         /^\/api\//,
//         /^\/manifest\.json$/,
//         /^\/logout$/,
//         /^\/login$/,
//         /^\/register$/,
//     ],

//     runtimeCaching: [
//         // Fonts Google
//         {
//             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//                 cacheName: 'google-fonts-cache',
//                 expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
//             }
//         },
//         {
//             urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//                 cacheName: 'gstatic-fonts-cache',
//                 expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
//             }
//         },
//         // Images
//         {
//             urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
//             handler: 'CacheFirst',
//             options: {
//                 cacheName: 'images-cache',
//                 expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 }
//             }
//         },
//         // API : Network First avec fallback cache offline
//         {
//             urlPattern: /\/api\/.*/i,
//             handler: 'NetworkFirst',
//             options: {
//                 cacheName: 'api-cache',
//                 networkTimeoutSeconds: 5,
//                 expiration: { maxEntries: 100, maxAgeSeconds: 60 * 10 },
//                 fetchOptions: { credentials: 'include' },
//             }
//         },
//         // Assets build JS/CSS
//         {
//             urlPattern: /\/build\/.*/i,
//             handler: 'StaleWhileRevalidate',
//             options: {
//                 cacheName: 'assets-cache',
//                 expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 7 }
//             }
//         },
//         // Manifest dynamique
//         {
//             urlPattern: /\/manifest\.json$/i,
//             handler: 'NetworkFirst',
//             options: {
//                 cacheName: 'manifest-cache',
//                 networkTimeoutSeconds: 3,
//                 expiration: { maxEntries: 1, maxAgeSeconds: 60 * 5 }
//             }
//         },
//     ]
// }));

module.exports = Encore.getWebpackConfig();
