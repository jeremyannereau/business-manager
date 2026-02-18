# 🚀 Business Manager

Application web complète de gestion de projet entrepreneurial développée avec Symfony 7.2 et Vue.js 3.

## 📋 Fonctionnalités

### Modules principaux
- **📊 Dashboard** - Vue d'ensemble avec graphiques interactifs (Chart.js)
- **📋 Kanban** - Gestion des étapes avec drag & drop, filtres et recherche
- **📅 Calendrier** - Visualisation mensuelle des échéances
- **💰 Finances** - Suivi budget, revenus/dépenses avec graphiques

### Fonctionnalités techniques
- Design System moderne et réutilisable
- Composants UI personnalisés (Button, Card, Modal, Badge)
- API REST Symfony
- Animations et transitions fluides
- Interface responsive

## 🏗️ Architecture

### Stack technique
- **Backend** : Symfony 7.2, PHP 8.2+, Doctrine ORM
- **Frontend** : Vue.js 3, Webpack Encore
- **Base de données** : MySQL / SQLite
- **Graphiques** : Chart.js
- **Styles** : CSS custom properties, Design tokens

### Structure des environnements
```
Local (dev)     → localhost:8000 (branche feature/*)
Staging (test)  → dev.sodev22.fr (branche develop)
Production      → sodev22.fr (branche main)
```

## 🚀 Installation

### Prérequis
- PHP 8.2+
- Composer
- Node.js 18+ et npm
- MySQL ou SQLite

### Installation locale
```bash
# Cloner le projet
git clone https://github.com/jeremyannereau/business-manager.git
cd business-manager

# Installer les dépendances PHP
composer install

# Installer les dépendances JS
npm install

# Configurer la base de données
cp .env .env.local
# Éditer .env.local avec vos paramètres

# Créer la base de données
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate

# Compiler les assets
npm run build

# Lancer le serveur
symfony server:start
# ou
php -S localhost:8000 -t public
```

L'application sera accessible sur http://localhost:8000

## 📦 Commandes utiles

### Développement
```bash
npm run watch          # Compilation auto des assets
npm run dev            # Compilation une fois (dev)
npm run build          # Compilation production

php bin/console cache:clear              # Nettoyer le cache
php bin/console make:entity             # Créer une entité
php bin/console make:migration          # Créer une migration
php bin/console doctrine:migrations:migrate  # Appliquer les migrations
```

### Déploiement

**Staging (dev.sodev22.fr)**
```bash
git checkout develop
git merge feature/nom-feature
git push origin develop

ssh -p 2083 anje9986@anje.odns.fr
cd ~/apps/business-manager-staging
./deploy-staging.sh
```

**Production (sodev22.fr)**
```bash
git checkout main
git merge develop
git push origin main

ssh -p 2083 anje9986@anje.odns.fr
cd ~/apps/business-manager
./deploy.sh
```

## 📊 Modèle de données

### Entités principales

**Etape**
- Gestion des étapes du projet
- Statuts : todo, in_progress, done
- Priorités : urgent, normal, low
- Dates de début et limite
- Catégories personnalisables

**Transaction**
- Gestion financière
- Types : revenue, expense
- Catégories de dépenses
- Suivi du budget

## 🎨 Design System

### Variables CSS
Les variables CSS sont définies dans `assets/styles/design-system.css` :
- Couleurs (primary, secondary, success, warning, error)
- Espacements (space-xs à space-2xl)
- Rayons de bordure (radius-sm à radius-full)
- Ombres (shadow-sm à shadow-2xl)
- Transitions (transition-fast, base, slow)

### Composants réutilisables
- `Button` - Boutons avec variants (primary, secondary, success, danger, ghost)
- `Card` - Cartes avec header/body/footer
- `Modal` - Modales avec animations
- `Badge` - Badges de statut

## 🔒 Sécurité

- Protection CSRF sur tous les formulaires
- Validation des données côté serveur
- Sanitization des entrées utilisateur
- Headers de sécurité configurés

## 📝 Conventions de code

### Messages de commit
```
feat: nouvelle fonctionnalité
fix: correction de bug
refactor: refactoring
style: modifications CSS
build: compilation assets
docs: documentation
```

### Structure des branches
```
main         → Production
develop      → Staging
feature/*    → Nouvelles fonctionnalités
hotfix/*     → Corrections urgentes
```

## 📄 Licence

Projet propriétaire - Tous droits réservés

## 👨‍💻 Auteur

Jérémy Annereau - Mon Assistant Numérique

## 🎯 Roadmap V2

- [ ] Module Documents (upload, classement)
- [ ] Notifications en temps réel
- [ ] Export PDF/Excel
- [ ] Mode sombre
- [ ] Commentaires sur les étapes
- [ ] Synchronisation Google Calendar
- [ ] Application mobile (PWA)