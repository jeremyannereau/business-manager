<?php

namespace App\Command;

use App\Entity\Etape;
use App\Entity\Transaction;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:migrate-data-to-users',
    description: 'Migrer les étapes et transactions existantes vers le premier utilisateur',
)]
class MigrateDataToUsersCommand extends Command
{
    public function __construct(private EntityManagerInterface $em)
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Récupérer le premier utilisateur
        $user = $this->em->getRepository(User::class)->findOneBy([]);
        
        if (!$user) {
            $io->error('Aucun utilisateur trouvé. Créez un utilisateur d\'abord.');
            return Command::FAILURE;
        }

        $io->info(sprintf('Migration vers l\'utilisateur: %s %s (%s)', 
            $user->getPrenom(), 
            $user->getNom(), 
            $user->getEmail()
        ));

        // Migrer les étapes
        $etapes = $this->em->getRepository(Etape::class)->findBy(['user' => null]);
        $io->progressStart(count($etapes));
        
        foreach ($etapes as $etape) {
            $etape->setUser($user);
            $io->progressAdvance();
        }
        
        $this->em->flush();
        $io->progressFinish();
        $io->success(sprintf('%d étapes migrées', count($etapes)));

        // Migrer les transactions
        $transactions = $this->em->getRepository(Transaction::class)->findBy(['user' => null]);
        $io->progressStart(count($transactions));
        
        foreach ($transactions as $transaction) {
            $transaction->setUser($user);
            $io->progressAdvance();
        }
        
        $this->em->flush();
        $io->progressFinish();
        $io->success(sprintf('%d transactions migrées', count($transactions)));

        return Command::SUCCESS;
    }
}