<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260304000002 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Création de la table client_config (configuration personnalisée par utilisateur)';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE client_config (
            id INT AUTO_INCREMENT NOT NULL,
            user_id INT NOT NULL,
            app_name VARCHAR(100) NOT NULL DEFAULT "Business Manager",
            app_subtitle VARCHAR(200) DEFAULT NULL,
            primary_color VARCHAR(20) NOT NULL DEFAULT "#667eea",
            secondary_color VARCHAR(20) NOT NULL DEFAULT "#764ba2",
            modules JSON NOT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME DEFAULT NULL,
            UNIQUE INDEX UNIQ_CLIENT_CONFIG_USER (user_id),
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4');

        $this->addSql('ALTER TABLE client_config ADD CONSTRAINT FK_CLIENT_CONFIG_USER
            FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE client_config DROP FOREIGN KEY FK_CLIENT_CONFIG_USER');
        $this->addSql('DROP TABLE client_config');
    }
}
