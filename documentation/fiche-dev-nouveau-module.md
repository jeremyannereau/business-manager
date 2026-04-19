# Ajouter un nouveau module métier

> **Stack** : Symfony 7.2 + Vue 3 (Options API) + Webpack Encore  
> **Temps estimé** : 1–2h selon la complexité du module

---

## Vue d'ensemble

Le scaffold est conçu pour accueillir de nouveaux modules sans toucher au cœur de l'application. La navigation (header desktop, bottom nav mobile, page d'accueil) se met à jour automatiquement dès qu'un module est enregistré dans le registre central.

### Fichiers à créer

| Fichier | Rôle |
|---|---|
| `assets/modules/monmodule/index.js` | Déclaration du module |
| `assets/components/MonModule.vue` | Composant Vue principal |
| `src/Entity/MonEntite.php` | Entité Doctrine avec relation user |
| `src/Repository/MonEntiteRepository.php` | Repository Doctrine |
| `src/Controller/MonEntiteController.php` | API REST filtrée par utilisateur |
| `migrations/VersionXXX.php` | Migration générée automatiquement |

---

## Étape 1 — Enregistrer le module dans le registre

C'est le **seul endroit** où déclarer un module. Tout le reste est automatique.

### Créer `assets/modules/monmodule/index.js`

```js
import MonModule from '../../components/MonModule.vue'

export default {
  key:        'monmodule',      // identifiant unique (minuscules, sans espace)
  label:      'Mon Module',     // affiché dans la nav desktop
  icon:       '🔧',            // emoji dans les boutons
  shortLabel: 'Module',         // version courte pour la bottom nav mobile
  component:  MonModule,
}
```

### Ajouter une ligne dans `assets/modules/index.js`

```js
import dashboard  from './dashboard/index.js'
import kanban     from './kanban/index.js'
import monmodule  from './monmodule/index.js'   // ← ajouter

export const ALL_MODULES = [
  dashboard,
  kanban,
  monmodule,   // ← et ici
]

export const MODULES_MAP = Object.fromEntries(ALL_MODULES.map(m => [m.key, m]))
```

> ✅ C'est tout pour le front. La navigation se met à jour automatiquement.

---

## Étape 2 — Créer le composant Vue

```
assets/components/MonModule.vue
```

```vue
<template>
  <div class="monmodule-view">
    <div v-if="loading" class="loader">Chargement…</div>
    <template v-else>
      <!-- Votre interface ici -->
    </template>
  </div>
</template>

<script>
export default {
  name: 'MonModule',
  emits: ['navigate'],   // si besoin de naviguer vers un autre module

  data() {
    return {
      items: [],
      loading: true,
    }
  },

  async mounted() {
    await this.loadItems()
  },

  methods: {
    async loadItems() {
      const res = await fetch('/api/monentite')
      if (res.ok) this.items = await res.json()
      this.loading = false
    }
  }
}
</script>

<style scoped>
.monmodule-view {
  padding: var(--space-xl);
  max-width: 1400px;
  margin: 0 auto;
}
</style>
```

---

## Étape 3 — Créer l'entité Doctrine

```
src/Entity/MonEntite.php
```

```php
<?php

namespace App\Entity;

use App\Repository\MonEntiteRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MonEntiteRepository::class)]
class MonEntite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // ⚠️ OBLIGATOIRE : relation vers le propriétaire des données
    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    // getters / setters...
    public function getId(): ?int { return $this->id; }
    public function getUser(): ?User { return $this->user; }
    public function setUser(?User $user): static { $this->user = $user; return $this; }
    public function getTitre(): ?string { return $this->titre; }
    public function setTitre(string $titre): static { $this->titre = $titre; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->createdAt; }
    public function setCreatedAt(\DateTimeImmutable $createdAt): static { $this->createdAt = $createdAt; return $this; }
}
```

> ⚠️ **Ne jamais oublier `$user` avec `#[ORM\ManyToOne]`.** Sans elle, tous les utilisateurs verraient les mêmes données.

### Générer et lancer la migration

```bash
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

---

## Étape 4 — Créer le repository

```
src/Repository/MonEntiteRepository.php
```

```php
<?php

namespace App\Repository;

use App\Entity\MonEntite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/** @extends ServiceEntityRepository<MonEntite> */
class MonEntiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MonEntite::class);
    }
}
```

---

## Étape 5 — Créer le controller API

```
src/Controller/MonEntiteController.php
```

```php
<?php

namespace App\Controller;

use App\Entity\MonEntite;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/monentite')]
#[IsGranted('ROLE_USER')]  // ← protection globale sur toutes les routes
class MonEntiteController extends AbstractController
{
    #[Route('', methods: ['GET'])]
    public function list(EntityManagerInterface $em): JsonResponse
    {
        // Filtrage systématique par utilisateur courant
        $items = $em->getRepository(MonEntite::class)
            ->findBy(['user' => $this->getUser()]);

        return $this->json(array_map(fn($i) => [
            'id'        => $i->getId(),
            'titre'     => $i->getTitre(),
            'createdAt' => $i->getCreatedAt()->format('Y-m-d H:i:s'),
        ], $items));
    }

    #[Route('', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $item = new MonEntite();
        $item->setTitre($data['titre']);
        $item->setUser($this->getUser());  // ← association obligatoire
        $item->setCreatedAt(new \DateTimeImmutable());

        $em->persist($item);
        $em->flush();

        return $this->json(['id' => $item->getId()], 201);
    }

    #[Route('/{id}', methods: ['PUT'])]
    public function update(int $id, Request $request, EntityManagerInterface $em): JsonResponse
    {
        $item = $em->getRepository(MonEntite::class)->find($id);

        if (!$item) return $this->json(['error' => 'Not found'], 404);

        // Vérification propriété : un user ne peut pas modifier les données d'un autre
        if ($item->getUser()->getId() !== $this->getUser()->getId())
            return $this->json(['error' => 'Forbidden'], 403);

        $data = json_decode($request->getContent(), true);
        if (isset($data['titre'])) $item->setTitre($data['titre']);

        $em->flush();
        return $this->json(['success' => true]);
    }

    #[Route('/{id}', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $em): JsonResponse
    {
        $item = $em->getRepository(MonEntite::class)->find($id);

        if (!$item) return $this->json(['error' => 'Not found'], 404);

        if ($item->getUser()->getId() !== $this->getUser()->getId())
            return $this->json(['error' => 'Forbidden'], 403);

        $em->remove($item);
        $em->flush();
        return $this->json(['success' => true]);
    }
}
```

---

## Étape 6 — Activer le module pour un client

Par défaut, un nouveau module enregistré dans `ALL_MODULES` est visible pour tous les utilisateurs. Pour le restreindre à certains clients, gérez la liste via l'API ou l'interface admin.

**Via l'API :**
```json
PUT /api/config/users/{id}
{
  "modules": ["dashboard", "kanban", "monmodule"]
}
```

**Via l'interface :** Paramètres → Administration → cliquer sur le client → cocher/décocher les modules.

> ✅ Le module n'apparaît dans la navigation que si sa clé est présente dans la config du client. Pas besoin de toucher à `App.vue`.

---

## Checklist rapide

- [ ] `assets/modules/monmodule/index.js` créé
- [ ] Import ajouté dans `assets/modules/index.js`
- [ ] `assets/components/MonModule.vue` créé
- [ ] `src/Entity/MonEntite.php` avec `$user` en `ManyToOne`
- [ ] `src/Repository/MonEntiteRepository.php` créé
- [ ] `src/Controller/MonEntiteController.php` avec `#[IsGranted('ROLE_USER')]`
- [ ] `make:migration` + `doctrine:migrations:migrate`
- [ ] `npm run build`
- [ ] Module activé dans les configs clients souhaités
