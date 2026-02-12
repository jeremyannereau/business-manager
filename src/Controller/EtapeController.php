<?php

namespace App\Controller;

use App\Entity\Etape;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/etapes')]
class EtapeController extends AbstractController
{
    #[Route('', name: 'etapes_list', methods: ['GET'])]
    public function list(EntityManagerInterface $em): JsonResponse
    {
        $etapes = $em->getRepository(Etape::class)->findBy([], ['ordre' => 'ASC']);
        
        $data = array_map(function(Etape $etape) {
            return [
                'id' => $etape->getId(),
                'titre' => $etape->getTitre(),
                'description' => $etape->getDescription(),
                'statut' => $etape->getStatut(),
                'dateDebut' => $etape->getDateDebut()?->format('Y-m-d'),
                'dateLimite' => $etape->getDateLimite()?->format('Y-m-d'),
                'documents' => $etape->getDocuments(),
                'notes' => $etape->getNotes(),
                'ordre' => $etape->getOrdre(),
                'createdAt' => $etape->getCreatedAt()->format('Y-m-d H:i:s'),
            ];
        }, $etapes);
        
        return $this->json($data);
    }

    #[Route('', name: 'etapes_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $etape = new Etape();
        $etape->setTitre($data['titre']);
        $etape->setDescription($data['description'] ?? null);
        $etape->setStatut($data['statut'] ?? 'todo');
        $etape->setOrdre($data['ordre'] ?? 0);
        $etape->setCreatedAt(new \DateTimeImmutable());
        
        if (!empty($data['dateDebut'])) {
            $etape->setDateDebut(new \DateTime($data['dateDebut']));
        }
        if (!empty($data['dateLimite'])) {
            $etape->setDateLimite(new \DateTime($data['dateLimite']));
        }
        if (!empty($data['notes'])) {
            $etape->setNotes($data['notes']);
        }
        
        $em->persist($etape);
        $em->flush();
        
        return $this->json(['id' => $etape->getId(), 'message' => 'Étape créée'], Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'etapes_update', methods: ['PUT'])]
    public function update(int $id, Request $request, EntityManagerInterface $em): JsonResponse
    {
        $etape = $em->getRepository(Etape::class)->find($id);
        
        if (!$etape) {
            return $this->json(['error' => 'Étape non trouvée'], Response::HTTP_NOT_FOUND);
        }
        
        $data = json_decode($request->getContent(), true);
        
        if (isset($data['titre'])) $etape->setTitre($data['titre']);
        if (isset($data['description'])) $etape->setDescription($data['description']);
        if (isset($data['statut'])) $etape->setStatut($data['statut']);
        if (isset($data['ordre'])) $etape->setOrdre($data['ordre']);
        if (isset($data['notes'])) $etape->setNotes($data['notes']);
        
        if (isset($data['dateDebut'])) {
            $etape->setDateDebut($data['dateDebut'] ? new \DateTime($data['dateDebut']) : null);
        }
        if (isset($data['dateLimite'])) {
            $etape->setDateLimite($data['dateLimite'] ? new \DateTime($data['dateLimite']) : null);
        }
        
        $em->flush();
        
        return $this->json(['message' => 'Étape mise à jour']);
    }

    #[Route('/{id}', name: 'etapes_delete', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $em): JsonResponse
    {
        $etape = $em->getRepository(Etape::class)->find($id);
        
        if (!$etape) {
            return $this->json(['error' => 'Étape non trouvée'], Response::HTTP_NOT_FOUND);
        }
        
        $em->remove($etape);
        $em->flush();
        
        return $this->json(['message' => 'Étape supprimée']);
    }
}