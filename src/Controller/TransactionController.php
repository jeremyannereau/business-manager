<?php

namespace App\Controller;

use App\Entity\Transaction;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/transactions')]
#[IsGranted('ROLE_USER')]
class TransactionController extends AbstractController
{
    #[Route('', name: 'api_transactions_list', methods: ['GET'])]
    public function list(EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $transactions = $em->getRepository(Transaction::class)->findBy(['user' => $user], ['date' => 'DESC']);
        
        $data = array_map(function($transaction) {
            return [
                'id' => $transaction->getId(),
                'type' => $transaction->getType(),
                'description' => $transaction->getDescription(),
                'amount' => (float) $transaction->getAmount(),
                'date' => $transaction->getDate()->format('Y-m-d'),
                'category' => $transaction->getCategory(),
                'notes' => $transaction->getNotes(),
                'createdAt' => $transaction->getCreatedAt()->format('Y-m-d H:i:s')
            ];
        }, $transactions);
        
        return $this->json($data);
    }

    #[Route('', name: 'api_transactions_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $user = $this->getUser();
        
        $transaction = new Transaction();
        $transaction->setType($data['type']);
        $transaction->setDescription($data['description']);
        $transaction->setAmount($data['amount']);
        $transaction->setDate(new \DateTime($data['date']));
        $transaction->setCategory($data['category']);
        $transaction->setNotes($data['notes'] ?? null);
        $transaction->setCreatedAt(new \DateTimeImmutable());
        $transaction->setUser($user);
        
        $em->persist($transaction);
        $em->flush();
        
        return $this->json([
            'id' => $transaction->getId(),
            'type' => $transaction->getType(),
            'description' => $transaction->getDescription(),
            'amount' => (float) $transaction->getAmount(),
            'date' => $transaction->getDate()->format('Y-m-d'),
            'category' => $transaction->getCategory(),
            'notes' => $transaction->getNotes(),
            'createdAt' => $transaction->getCreatedAt()->format('Y-m-d H:i:s')
        ], 201);
    }

    #[Route('/{id}', name: 'api_transactions_update', methods: ['PUT'])]
    public function update(int $id, Request $request, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $transaction = $em->getRepository(Transaction::class)->findOneBy(['id' => $id, 'user' => $user]);
        if (!$transaction) {
            return $this->json(['error' => 'Transaction not found'], 404);
        }
        
        $data = json_decode($request->getContent(), true);
        
        $transaction->setType($data['type']);
        $transaction->setDescription($data['description']);
        $transaction->setAmount($data['amount']);
        $transaction->setDate(new \DateTime($data['date']));
        $transaction->setCategory($data['category']);
        $transaction->setNotes($data['notes'] ?? null);
        

        $user = $this->getUser();
        
        
        $em->flush();
        
        return $this->json([
            'id' => $transaction->getId(),
            'type' => $transaction->getType(),
            'description' => $transaction->getDescription(),
            'amount' => (float) $transaction->getAmount(),
            'date' => $transaction->getDate()->format('Y-m-d'),
            'category' => $transaction->getCategory(),
            'notes' => $transaction->getNotes()
        ]);
    }

    #[Route('/{id}', name: 'api_transactions_delete', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $em): JsonResponse
    {
        $user = $this->getUser();
        $transaction = $em->getRepository(Transaction::class)->findOneBy(['id' => $id, 'user' => $user]);
        
        if (!$transaction) {
            return $this->json(['error' => 'Transaction not found'], 404);
        }
        
        $em->remove($transaction);
        $em->flush();
        
        return $this->json(['success' => true]);
    }
}