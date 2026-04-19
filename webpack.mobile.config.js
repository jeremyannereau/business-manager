/**
 * webpack.mobile.config.js
 * Build dédié pour Capacitor (Android / iOS)
 *
 * Différences vs webpack.config.js (web) :
 *  - setPublicPath('./') → chemins relatifs (obligatoire dans une WebView)
 *  - setOutputPath('mobile/www/') → dossier lu par Capacitor (webDir)
 *  - Pas de navigateFallback Workbox (inutile dans une WebView native)
 *  - Pas de SW (Capacitor gère le cycle de vie natif)
 */

const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('mobile/www/')
    .setPublicPath('./')          // ← CRITIQUE : chemins relatifs pour WebView
    .setManifestKeyPrefix('')     // évite le préfixe /build/ dans le manifest
    .enableSingleRuntimeChunk()
    .addEntry('app', './assets/app.js')
    .addEntry('auth', './assets/auth.js')
    .splitEntryChunks()
    .enableVueLoader()
    .enableSassLoader()
    .enablePostCssLoader()
    .cleanupOutputBeforeBuild()   // nettoie mobile/www/ avant chaque build

module.exports = Encore.getWebpackConfig();
