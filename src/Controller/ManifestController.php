<?php

namespace App\Controller;

use App\Repository\ClientConfigRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ManifestController extends AbstractController
{
    /**
     * Génère un manifest.json dynamique selon la config du client connecté.
     * Remplace le fichier statique public/manifest.json.
     */
    #[Route('/manifest.json', name: 'pwa_manifest', methods: ['GET'])]
    public function manifest(ClientConfigRepository $repo): Response
    {
        $user   = $this->getUser();
        $config = $user ? $repo->findByUser($user) : null;

        $appName     = $config?->getAppName()        ?? 'Business Manager';
        $appSubtitle = $config?->getAppSubtitle()    ?? 'Gestion de votre activité';
        $primary     = $config?->getPrimaryColor()   ?? '#667eea';
        $secondary   = $config?->getSecondaryColor() ?? '#764ba2';
        $modules     = $config?->getModules()        ?? ['dashboard', 'kanban', 'calendrier', 'finances'];

        // Raccourcis dynamiques selon les modules actifs
        $moduleShortcuts = [
            'dashboard'  => ['name' => 'Dashboard',      'icon' => '📊', 'url' => '/?view=dashboard'],
            'kanban'     => ['name' => 'Suivi Étapes',   'icon' => '📋', 'url' => '/?view=kanban'],
            'calendrier' => ['name' => 'Calendrier',     'icon' => '📅', 'url' => '/?view=calendrier'],
            'finances'   => ['name' => 'Finances',       'icon' => '💰', 'url' => '/?view=finances'],
        ];

        $shortcuts = [];
        foreach ($modules as $key) {
            if (isset($moduleShortcuts[$key])) {
                $shortcuts[] = [
                    'name'        => $moduleShortcuts[$key]['name'],
                    'short_name'  => $moduleShortcuts[$key]['name'],
                    'description' => $moduleShortcuts[$key]['icon'] . ' ' . $moduleShortcuts[$key]['name'],
                    'url'         => $moduleShortcuts[$key]['url'],
                    'icons'       => [['src' => '/icons/icon-192x192.png', 'sizes' => '192x192']],
                ];
            }
        }

        $manifest = [
            'name'             => $appName,
            'short_name'       => mb_strimwidth($appName, 0, 12, '…'), // 12 chars max recommandé
            'description'      => $appSubtitle,
            'start_url'        => '/',
            'scope'            => '/',
            'display'          => 'standalone',
            'background_color' => $primary,
            'theme_color'      => $primary,
            'orientation'      => 'portrait-primary',
            'lang'             => 'fr',
            'categories'       => ['business', 'productivity'],
            'icons'            => [
                [
                    'src'     => '/icons/icon-192x192.png',
                    'sizes'   => '192x192',
                    'type'    => 'image/png',
                    'purpose' => 'any',
                ],
                [
                    'src'     => '/icons/icon-192x192.png',
                    'sizes'   => '192x192',
                    'type'    => 'image/png',
                    'purpose' => 'maskable',
                ],
                [
                    'src'     => '/icons/icon-512x512.png',
                    'sizes'   => '512x512',
                    'type'    => 'image/png',
                    'purpose' => 'any',
                ],
                [
                    'src'     => '/icons/icon-512x512.png',
                    'sizes'   => '512x512',
                    'type'    => 'image/png',
                    'purpose' => 'maskable',
                ],
            ],
            'shortcuts' => $shortcuts,
            'screenshots'      => [],
        ];

        $response = new Response(
            json_encode($manifest, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT),
            200,
            ['Content-Type' => 'application/manifest+json']
        );

        // Cache 5 min — assez court pour que les changements de config soient visibles rapidement
        $response->setMaxAge(300);
        $response->setPublic();

        return $response;
    }
}
