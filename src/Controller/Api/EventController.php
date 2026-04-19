<?php

namespace App\Controller\Api;

use App\Entity\Event;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/events')]
#[IsGranted('ROLE_USER')]
class EventController extends AbstractController
{
    #[Route('', name: 'api_events_list', methods: ['GET'])]
    public function list(EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $events = $em->getRepository(Event::class)->findBy(['user' => $user], ['startDate' => 'ASC']);
        
        $data = array_map(function($event) {
            return [
                'id' => $event->getId(),
                'title' => $event->getTitle(),
                'description' => $event->getDescription(),
                'startDate' => $event->getStartDate()->format('Y-m-d H:i:s'),
                'endDate' => $event->getEndDate()?->format('Y-m-d H:i:s'),
                'type' => $event->getType(),
                'color' => $event->getColor(),
                'location' => $event->getLocation(),
                'allDay' => $event->isAllDay()
            ];
        }, $events);
        
        return $this->json($data);
    }

    #[Route('', name: 'api_events_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $user = $this->getUser();
        
        $event = new Event();
        $event->setTitle($data['title']);
        $event->setDescription($data['description'] ?? null);
        $event->setStartDate(new \DateTime($data['startDate']));
        $event->setEndDate($data['endDate'] ? new \DateTime($data['endDate']) : null);
        $event->setType($data['type'] ?? 'personnel');
        $event->setColor($data['color'] ?? null);
        $event->setLocation($data['location'] ?? null);
        $event->setAllDay($data['allDay'] ?? false);
        $event->setUser($user);
        
        $em->persist($event);
        $em->flush();
        
        return $this->json([
            'id' => $event->getId(),
            'title' => $event->getTitle(),
            'description' => $event->getDescription(),
            'startDate' => $event->getStartDate()->format('Y-m-d H:i:s'),
            'endDate' => $event->getEndDate()?->format('Y-m-d H:i:s'),
            'type' => $event->getType(),
            'color' => $event->getColor(),
            'location' => $event->getLocation(),
            'allDay' => $event->isAllDay()
        ], 201);
    }

    #[Route('/{id}', name: 'api_events_update', methods: ['PUT'])]
    public function update(int $id, Request $request, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $event = $em->getRepository(Event::class)->findOneBy(['id' => $id, 'user' => $user]);
        
        if (!$event) {
            return $this->json(['error' => 'Event not found'], 404);
        }
        
        $data = json_decode($request->getContent(), true);
        
        $event->setTitle($data['title']);
        $event->setDescription($data['description'] ?? null);
        $event->setStartDate(new \DateTime($data['startDate']));
        $event->setEndDate($data['endDate'] ? new \DateTime($data['endDate']) : null);
        $event->setType($data['type']);
        $event->setColor($data['color'] ?? null);
        $event->setLocation($data['location'] ?? null);
        $event->setAllDay($data['allDay'] ?? false);
        
        $em->flush();
        
        return $this->json([
            'id' => $event->getId(),
            'title' => $event->getTitle(),
            'description' => $event->getDescription(),
            'startDate' => $event->getStartDate()->format('Y-m-d H:i:s'),
            'endDate' => $event->getEndDate()?->format('Y-m-d H:i:s'),
            'type' => $event->getType(),
            'color' => $event->getColor(),
            'location' => $event->getLocation(),
            'allDay' => $event->isAllDay()
        ]);
    }

    #[Route('/{id}', name: 'api_events_delete', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $event = $em->getRepository(Event::class)->findOneBy(['id' => $id, 'user' => $user]);
        
        if (!$event) {
            return $this->json(['error' => 'Event not found'], 404);
        }
        
        $em->remove($event);
        $em->flush();
        
        return $this->json(['success' => true]);
    }
}