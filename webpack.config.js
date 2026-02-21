const Encore = require('@symfony/webpack-encore');
const WorkboxPlugin = require('workbox-webpack-plugin');

if (Encore.isProduction()) {
    Encore.addPlugin(new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        runtimeCaching: [
            {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'google-fonts-cache',
                    expiration: {
                        maxEntries: 10,
                        maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
                    }
                }
            },
            {
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'gstatic-fonts-cache',
                    expiration: {
                        maxEntries: 10,
                        maxAgeSeconds: 60 * 60 * 24 * 365
                    }
                }
            },
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images-cache',
                    expiration: {
                        maxEntries: 60,
                        maxAgeSeconds: 60 * 60 * 24 * 30 // 30 jours
                    }
                }
            },
            {
                urlPattern: /\/api\/.*/i,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'api-cache',
                    networkTimeoutSeconds: 10,
                    expiration: {
                        maxEntries: 50,
                        maxAgeSeconds: 60 * 5 // 5 minutes
                    }
                }
            },
            {
                urlPattern: /\/build\/.*/i,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'assets-cache',
                    expiration: {
                        maxEntries: 50,
                        maxAgeSeconds: 60 * 60 * 24 * 7 // 7 jours
                    }
                }
            }
        ]
    }));
}

module.exports = Encore.getWebpackConfig();