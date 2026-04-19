<?php

namespace App\Controller\Api;

use App\Entity\ClientConfig;
use App\Repository\ClientConfigRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/config')]
#[IsGranted('ROLE_USER')]
class ClientConfigController extends AbstractController
{
    public function __construct(
        #[Autowire('%upload_dir%')] private readonly string $uploadDir,
        #[Autowire('%upload_url%')] private readonly string $uploadUrl,
    ) {}

    /** GET /api/config — config de l'utilisateur courant */
    #[Route('', name: 'api_config_get', methods: ['GET'])]
    public function get(ClientConfigRepository $repo): JsonResponse
    {
        $config = $repo->findByUser($this->getUser());
        return $this->json($config ? $config->toArray() : $this->getDefaults());
    }

    /** PUT /api/config — sauvegarde texte + modules + couleurs */
    #[Route('', name: 'api_config_save', methods: ['POST', 'PUT'])]
    public function save(
        Request $request,
        ClientConfigRepository $repo,
        EntityManagerInterface $em
    ): JsonResponse {
        $data   = json_decode($request->getContent(), true);
        $config = $this->getOrCreateConfig($repo, $em);

        $allowedModules = ['dashboard', 'kanban', 'calendrier', 'finances'];

        if (isset($data['appName']))        $config->setAppName(substr($data['appName'], 0, 100));
        if (isset($data['appSubtitle']))    $config->setAppSubtitle(substr($data['appSubtitle'], 0, 200));
        if (isset($data['primaryColor']))   $config->setPrimaryColor($data['primaryColor']);
        if (isset($data['secondaryColor'])) $config->setSecondaryColor($data['secondaryColor']);

        if (isset($data['modules']) && is_array($data['modules'])) {
            $modules = array_values(array_intersect($data['modules'], $allowedModules));
            $config->setModules($modules ?: $allowedModules);
        }

        $config->setUpdatedAt(new \DateTimeImmutable());
        $em->flush();

        return $this->json(['success' => true, 'config' => $config->toArray()]);
    }

    /** POST /api/config/logo — upload du logo (multipart/form-data) */
    #[Route('/logo', name: 'api_config_logo', methods: ['POST'])]
    public function uploadLogo(
        Request $request,
        ClientConfigRepository $repo,
        EntityManagerInterface $em
    ): JsonResponse {
        $file = $request->files->get('logo');

        if (!$file) {
            return $this->json(['error' => 'Aucun fichier reçu'], 400);
        }

        // Validation type MIME
        $allowedMimes = ['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'];
        if (!in_array($file->getMimeType(), $allowedMimes)) {
            return $this->json(['error' => 'Format non supporté (png, jpg, webp, svg)'], 400);
        }

        // Validation taille (2 Mo max)
        if ($file->getSize() > 2 * 1024 * 1024) {
            return $this->json(['error' => 'Fichier trop volumineux (2 Mo max)'], 400);
        }

        $config = $this->getOrCreateConfig($repo, $em);

        // Supprimer l'ancien logo
        if ($config->getLogoPath()) {
            $oldFile = $this->uploadDir . '/logos/' . basename($config->getLogoPath());
            if (file_exists($oldFile)) {
                unlink($oldFile);
            }
        }

        // Sauvegarder le nouveau
        $filename = uniqid('logo_', true) . '.' . $file->guessExtension();
        $file->move($this->uploadDir . '/logos', $filename);

        $config->setLogoPath($this->uploadUrl . '/logos/' . $filename);
        $config->setUpdatedAt(new \DateTimeImmutable());
        $em->flush();

        return $this->json(['success' => true, 'logoPath' => $config->getLogoPath()]);
    }

    /** DELETE /api/config/logo — supprime le logo */
    #[Route('/logo', name: 'api_config_logo_delete', methods: ['DELETE'])]
    public function deleteLogo(
        ClientConfigRepository $repo,
        EntityManagerInterface $em
    ): JsonResponse {
        $config = $repo->findByUser($this->getUser());

        if ($config && $config->getLogoPath()) {
            $file = $this->uploadDir . '/logos/' . basename($config->getLogoPath());
            if (file_exists($file)) unlink($file);
            $config->setLogoPath(null);
            $config->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();
        }

        return $this->json(['success' => true]);
    }

    /** GET /api/config/users — ADMIN ONLY : liste tous les utilisateurs avec leur config */
    #[Route('/users', name: 'api_config_users', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN')]
    public function listUsers(
        UserRepository $userRepo,
        ClientConfigRepository $configRepo
    ): JsonResponse {
        $users = $userRepo->findAll();

        $data = array_map(function ($user) use ($configRepo) {
            $config = $configRepo->findByUser($user);
            return [
                'id'     => $user->getId(),
                'email'  => $user->getEmail(),
                'nom'    => $user->getNom(),
                'prenom' => $user->getPrenom(),
                'roles'  => $user->getRoles(),
                'config' => $config ? $config->toArray() : $this->getDefaults(),
            ];
        }, $users);

        return $this->json($data);
    }

    /** PUT /api/config/users/{id} — ADMIN ONLY : modifier la config d'un utilisateur */
    #[Route('/users/{id}', name: 'api_config_user_save', methods: ['PUT'])]
    #[IsGranted('ROLE_ADMIN')]
    public function saveUserConfig(
        int $id,
        Request $request,
        UserRepository $userRepo,
        ClientConfigRepository $configRepo,
        EntityManagerInterface $em
    ): JsonResponse {
        $user = $userRepo->find($id);
        if (!$user) {
            return $this->json(['error' => 'Utilisateur introuvable'], 404);
        }

        $data   = json_decode($request->getContent(), true);
        $config = $configRepo->findByUser($user);

        if (!$config) {
            $config = new ClientConfig();
            $config->setUser($user);
            $em->persist($config);
        }

        $allowedModules = ['dashboard', 'kanban', 'calendrier', 'finances'];
        if (isset($data['appName']))        $config->setAppName(substr($data['appName'], 0, 100));
        if (isset($data['appSubtitle']))    $config->setAppSubtitle(substr($data['appSubtitle'], 0, 200));
        if (isset($data['primaryColor']))   $config->setPrimaryColor($data['primaryColor']);
        if (isset($data['secondaryColor'])) $config->setSecondaryColor($data['secondaryColor']);
        if (isset($data['modules']) && is_array($data['modules'])) {
            $modules = array_values(array_intersect($data['modules'], $allowedModules));
            $config->setModules($modules ?: $allowedModules);
        }

        $config->setUpdatedAt(new \DateTimeImmutable());
        $em->flush();

        return $this->json(['success' => true, 'config' => $config->toArray()]);
    }

    /** DELETE /api/config/reset — remet aux valeurs par défaut */
    #[Route('/reset', name: 'api_config_reset', methods: ['DELETE'])]
    public function reset(ClientConfigRepository $repo, EntityManagerInterface $em): JsonResponse
    {
        $config = $repo->findByUser($this->getUser());
        if ($config) { $em->remove($config); $em->flush(); }
        return $this->json(['success' => true, 'config' => $this->getDefaults()]);
    }

    // -------------------------------------------------------------------------

    private function getOrCreateConfig(ClientConfigRepository $repo, EntityManagerInterface $em): ClientConfig
    {
        $config = $repo->findByUser($this->getUser());
        if (!$config) {
            $config = new ClientConfig();
            $config->setUser($this->getUser());
            $em->persist($config);
        }
        return $config;
    }

    private function getDefaults(): array
    {
        return [
            'appName'        => 'Business Manager',
            'appSubtitle'    => 'Gestion de votre activité',
            'primaryColor'   => '#667eea',
            'secondaryColor' => '#764ba2',
            'modules'        => ['dashboard', 'kanban', 'calendrier', 'finances'],
            'logoPath'       => null,
        ];
    }
}
