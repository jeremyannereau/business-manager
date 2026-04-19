<?php

namespace App\Repository;

use App\Entity\ClientConfig;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ClientConfig>
 */
class ClientConfigRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClientConfig::class);
    }

    public function findByUser(User $user): ?ClientConfig
    {
        return $this->findOneBy(['user' => $user]);
    }
}
