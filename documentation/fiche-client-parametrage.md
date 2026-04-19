# Guide de paramétrage client

> Accessible depuis **Menu utilisateur → ⚙️ Paramètres**

---

## Accéder aux paramètres

1. Cliquer sur votre avatar (initiales) en haut à droite
2. Dans le menu déroulant, sélectionner **⚙️ Paramètres**
3. La page de configuration s'affiche

---

## Section Identité

Personnalisez le nom et le sous-titre affichés dans le header.

| Champ | Description | Limite |
|---|---|---|
| **Nom de l'application** | Affiché dans le header et l'onglet navigateur | 100 caractères |
| **Sous-titre** | Texte descriptif, visible sur écran large uniquement | 200 caractères |

---

## Section Logo

Uploadez un logo qui s'affiche à gauche du nom dans le header.

- **Formats acceptés** : PNG, JPG, WebP, SVG
- **Taille max** : 2 Mo
- **Dimensions recommandées** : hauteur 40–80px, fond transparent

Pour supprimer le logo, cliquer sur **🗑️ Supprimer**.

> ✅ Le SVG est recommandé : il s'adapte à toutes les résolutions sans perte de qualité.

---

## Section Thème

Définissez les deux couleurs principales de l'interface. L'aperçu s'applique **immédiatement** sans rechargement.

| Couleur | Où elle est utilisée |
|---|---|
| **Primaire** | Boutons actifs, liens, sélection, spinner |
| **Secondaire** | Dégradés (avatar, bouton principal, welcome card) |

Deux modes de saisie disponibles pour chaque couleur :
- **Sélecteur visuel** — cliquer sur le carré coloré
- **Code hexadécimal** — saisir directement (ex : `#667eea`)

> ⚠️ Les couleurs sont appliquées en aperçu immédiatement, mais nécessitent un clic sur **Sauvegarder** pour être permanentes.

---

## Section Modules actifs

Choisissez les modules visibles dans la navigation. Les modules désactivés sont masqués mais leurs données sont conservées.

| Module | Description |
|---|---|
| 📊 **Dashboard** | Vue d'ensemble avec graphiques, KPIs et statistiques |
| 📋 **Suivi des Étapes** | Kanban avec drag & drop et filtres avancés |
| 📅 **Calendrier** | Visualisation des échéances et planification |
| 💰 **Finances** | Suivi des transactions, budget et trésorerie |

> ⚠️ Au moins un module doit rester actif.

---

## Sauvegarder

La barre d'actions en bas de page est toujours visible.

| Bouton | Effet |
|---|---|
| **💾 Sauvegarder** | Enregistre toutes les modifications. La navigation se met à jour immédiatement. |
| **🔄 Réinitialiser** | Remet tous les paramètres aux valeurs par défaut (confirmation demandée). |

---

## Section Administration *(ROLE_ADMIN uniquement)*

Cette section apparaît uniquement pour les comptes administrateurs. Elle permet de configurer n'importe quel client sans se connecter à son compte.

### Modifier la config d'un client

1. Cliquer sur la ligne du client dans la liste
2. Le panneau d'édition s'ouvre
3. Modifier les champs souhaités (nom, couleurs, modules)
4. Cliquer sur **💾 Sauvegarder pour ce client**

Les modifications prennent effet au prochain chargement de l'app par le client.

> ✅ Le logo ne peut pas être modifié depuis l'admin — le client doit l'uploader lui-même.

### Promouvoir un compte en administrateur

Via SQL ou la console Symfony :

```sql
UPDATE user SET roles = '["ROLE_ADMIN"]' WHERE email = 'admin@exemple.com';
```

```bash
php bin/console doctrine:query:sql \
  "UPDATE user SET roles = '[\"ROLE_ADMIN\"]' WHERE email = 'admin@exemple.com'"
```

> ⚠️ Un administrateur a accès à la configuration de tous les clients. Accorder ce rôle avec parcimonie.
