<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260304000001 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Enregistrement : user_id deja present sur etape et transaction (migrations non enregistrees de fevrier)';
    }

    public function up(Schema $schema): void
    {
        // Les colonnes user_id ont ete ajoutees par des migrations non enregistrees
        // (Version20260219112625, Version20260219163510, Version20260219163718).
        // Cette migration les declare officiellement sans re-executer les ALTER TABLE.
        $this->addSql('SELECT 1'); // no-op intentionnel
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE etape DROP FOREIGN KEY IF EXISTS FK_A4C98F62A76ED395');
        $this->addSql('ALTER TABLE etape DROP COLUMN IF EXISTS user_id');
        $this->addSql('ALTER TABLE transaction DROP FOREIGN KEY IF EXISTS FK_723705D1A76ED395');
        $this->addSql('ALTER TABLE transaction DROP COLUMN IF EXISTS user_id');
    }
}
