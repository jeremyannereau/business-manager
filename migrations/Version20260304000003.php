<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260304000003 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ajout logo_path sur client_config';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE client_config ADD logo_path VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE client_config DROP COLUMN logo_path');
    }
}
