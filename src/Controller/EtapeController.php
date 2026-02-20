<?php

namespace App\Controller;

use App\Entity\Etape;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/etapes')]
#[IsGranted('ROLE_USER')]
class EtapeController extends AbstractController
{
    #[Route('', name: 'api_etapes_list', methods: ['GET'])]
    public function list(EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $etapes = $em->getRepository(Etape::class)->findBy(['user' => $user], ['createdAt' => 'DESC']);
        
        $data = array_map(function($etape) {
            return [
                'id' => $etape->getId(),
                'titre' => $etape->getTitre(),
                'description' => $etape->getDescription(),
                'statut' => $etape->getStatut(),
                'priority' => $etape->getPriority(),
                'category' => $etape->getCategory(),
                'dateDebut' => $etape->getDateDebut()?->format('Y-m-d'),
                'dateLimite' => $etape->getDateLimite()?->format('Y-m-d'),
                'progression' => $etape->getProgression(),
                'createdAt' => $etape->getCreatedAt()->format('Y-m-d H:i:s'),
            ];
        }, $etapes);
        
        return $this->json($data);
    }

    #[Route('', name: 'api_etapes_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $user = $this->getUser();
        // Calculer le prochain ordre
        $existingEtapes = $em->getRepository(Etape::class)->findBy(['user' => $user, 'statut' => $data['statut'] ?? 'todo']);
        $orderToGo = count($existingEtapes);

        $etape = new Etape();
        $etape->setTitre($data['titre']);
        $etape->setDescription($data['description'] ?? null);
        $etape->setStatut($data['statut'] ?? 'todo');
        $etape->setPriority($data['priority'] ?? null);
        $etape->setCategory($data['category'] ?? null);
        $etape->setDateDebut($data['dateDebut'] ? new \DateTime($data['dateDebut']) : null);
        $etape->setDateLimite($data['dateLimite'] ? new \DateTime($data['dateLimite']) : null);
        $etape->setProgression($data['progression'] ?? 0);
        $etape->setCreatedAt(new \DateTimeImmutable());
        $etape->setUser($user);
        $etape->setOrder($orderToGo);
        
        $em->persist($etape);
        $em->flush();
        
        return $this->json([
            'id' => $etape->getId(),
            'titre' => $etape->getTitre(),
            'description' => $etape->getDescription(),
            'statut' => $etape->getStatut(),
            'priority' => $etape->getPriority(),
            'category' => $etape->getCategory(),
            'dateDebut' => $etape->getDateDebut()?->format('Y-m-d'),
            'dateLimite' => $etape->getDateLimite()?->format('Y-m-d'),
            'progression' => $etape->getProgression(),
            'createdAt' => $etape->getCreatedAt()->format('Y-m-d H:i:s'),
            'order' => $etape->getOrder()
        ], 201);
    }

    #[Route('/{id}', name: 'api_etapes_update', methods: ['PUT'])]
    public function update(int $id, Request $request, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $etape = $em->getRepository(Etape::class)->findOneBy(['id' => $id, 'user' => $user]);
        
        if (!$etape) {
            return $this->json(['error' => 'Etape not found'], 404);
        }
        
        $data = json_decode($request->getContent(), true);
        
        $etape->setTitre($data['titre']);
        $etape->setDescription($data['description'] ?? null);
        $etape->setStatut($data['statut']);
        $etape->setPriority($data['priority'] ?? null);
        $etape->setCategory($data['category'] ?? null);
        $etape->setDateDebut($data['dateDebut'] ? new \DateTime($data['dateDebut']) : null);
        $etape->setDateLimite($data['dateLimite'] ? new \DateTime($data['dateLimite']) : null);
        $etape->setProgression($data['progression'] ?? 0);
        
        $em->flush();
        
        return $this->json([
            'id' => $etape->getId(),
            'titre' => $etape->getTitre(),
            'description' => $etape->getDescription(),
            'statut' => $etape->getStatut(),
            'priority' => $etape->getPriority(),
            'category' => $etape->getCategory(),
            'dateDebut' => $etape->getDateDebut()?->format('Y-m-d'),
            'dateLimite' => $etape->getDateLimite()?->format('Y-m-d'),
            'progression' => $etape->getProgression()
        ]);
    }

    #[Route('/{id}', name: 'api_etapes_delete', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $etape = $em->getRepository(Etape::class)->findOneBy(['id' => $id, 'user' => $user]);
        
        if (!$etape) {
            return $this->json(['error' => 'Etape not found'], 404);
        }
        
        $em->remove($etape);
        $em->flush();
        
        return $this->json(['success' => true]);
    }
}