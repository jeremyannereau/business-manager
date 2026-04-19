<?php

namespace App\Entity;

use App\Repository\ClientConfigRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClientConfigRepository::class)]
class ClientConfig
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Relation 1-to-1 avec User
    #[ORM\OneToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    // Nom affiché dans le header
    #[ORM\Column(length: 100)]
    private string $appName = 'Business Manager';

    // Sous-titre du header
    #[ORM\Column(length: 200, nullable: true)]
    private ?string $appSubtitle = 'Gestion de votre activité';

    // Couleur primaire CSS (ex: #667eea)
    #[ORM\Column(length: 20)]
    private string $primaryColor = '#667eea';

    // Couleur secondaire CSS
    #[ORM\Column(length: 20)]
    private string $secondaryColor = '#764ba2';

    // Modules actifs : JSON array ['dashboard','kanban','calendrier','finances']
    #[ORM\Column(type: 'json')]
    private array $modules = ['dashboard', 'kanban', 'calendrier', 'finances'];

    // Chemin relatif vers le logo (ex: /uploads/logos/abc123.png)
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $logoPath = null;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int { return $this->id; }

    public function getUser(): ?User { return $this->user; }
    public function setUser(User $user): static { $this->user = $user; return $this; }

    public function getAppName(): string { return $this->appName; }
    public function setAppName(string $appName): static { $this->appName = $appName; return $this; }

    public function getAppSubtitle(): ?string { return $this->appSubtitle; }
    public function setAppSubtitle(?string $appSubtitle): static { $this->appSubtitle = $appSubtitle; return $this; }

    public function getPrimaryColor(): string { return $this->primaryColor; }
    public function setPrimaryColor(string $primaryColor): static { $this->primaryColor = $primaryColor; return $this; }

    public function getSecondaryColor(): string { return $this->secondaryColor; }
    public function setSecondaryColor(string $secondaryColor): static { $this->secondaryColor = $secondaryColor; return $this; }

    public function getModules(): array { return $this->modules; }
    public function setModules(array $modules): static { $this->modules = $modules; return $this; }

    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }

    public function getUpdatedAt(): ?\DateTimeImmutable { return $this->updatedAt; }
    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): static { $this->updatedAt = $updatedAt; return $this; }

    public function getLogoPath(): ?string { return $this->logoPath; }
    public function setLogoPath(?string $logoPath): static { $this->logoPath = $logoPath; return $this; }

    public function toArray(): array
    {
        return [
            'appName'        => $this->appName,
            'appSubtitle'    => $this->appSubtitle,
            'primaryColor'   => $this->primaryColor,
            'secondaryColor' => $this->secondaryColor,
            'modules'        => $this->modules,
            'logoPath'       => $this->logoPath,
        ];
    }
}
