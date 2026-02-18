# 📦 Guide de Déploiement

## Environnements

### Local (Développement)
- **URL** : http://localhost:8000
- **Branche** : feature/*
- **Base** : SQLite (var/data.db)

### Staging (Test)
- **URL** : http://dev.sodev22.fr
- **Branche** : develop
- **Base** : MySQL (business_staging)
- **Serveur** : o2switch

### Production
- **URL** : http://sodev22.fr
- **Branche** : main
- **Base** : MySQL (business_manager)
- **Serveur** : o2switch

## Workflow de déploiement

### 1. Développement local
```bash
# Créer une branche feature
git checkout develop
git pull origin develop
git checkout -b feature/nom-fonctionnalite

# Développer et tester
npm run watch
symfony server:start

# Commiter régulièrement
git add .
git commit -m "feat: description"
git push origin feature/nom-fonctionnalite
```

### 2. Déploiement Staging
```bash
# Merger dans develop
git checkout develop
git merge feature/nom-fonctionnalite

# Compiler les assets
npm run build
git add public/build -f
git commit -m "build: compile for staging"

# Push vers GitHub
git push origin develop

# Se connecter au serveur
ssh -p 2083 anje9986@anje.odns.fr

# Déployer
cd ~/apps/business-manager-staging
./deploy-staging.sh

# Tester sur dev.sodev22.fr
```

### 3. Déploiement Production
```bash
# Merger develop dans main
git checkout main
git merge develop
git push origin main

# Se connecter au serveur
ssh -p 2083 anje9986@anje.odns.fr

# Déployer
cd ~/apps/business-manager
./deploy.sh

# Tester sur sodev22.fr
```

## Scripts de déploiement

### deploy-staging.sh
```bash
#!/bin/bash
set -e
PROJECT_DIR="/home/anje9986/apps/business-manager-staging"
BRANCH="develop"

cd $PROJECT_DIR
git fetch origin
git reset --hard origin/$BRANCH
composer install --optimize-autoloader --no-interaction
php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration
rm -rf var/cache/*
php bin/console cache:warmup
chmod -R 775 var/
```

### deploy.sh
```bash
#!/bin/bash
set -e
PROJECT_DIR="/home/anje9986/apps/business-manager"
BRANCH="main"

cd $PROJECT_DIR
git fetch origin
git reset --hard origin/$BRANCH
composer install --no-dev --optimize-autoloader --no-interaction
php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration
rm -rf var/cache/*
php bin/console cache:warmup --env=prod
chmod -R 775 var/
```

## Checklist avant déploiement

### Staging
- [ ] Code testé en local
- [ ] Feature mergée dans develop
- [ ] Assets compilés (npm run build)
- [ ] Migrations créées si nécessaire
- [ ] Tests fonctionnels OK

### Production
- [ ] Testé avec succès sur staging
- [ ] Pas d'erreurs dans les logs
- [ ] Base de données sauvegardée
- [ ] Develop mergé dans main
- [ ] Équipe prévenue

## Rollback en cas de problème
```bash
# Se connecter au serveur
ssh -p 2083 anje9986@anje.odns.fr

# Revenir à la version précédente
cd ~/apps/business-manager
git log --oneline # Trouver le commit
git reset --hard COMMIT_HASH
./deploy.sh
```

## Monitoring

### Vérifier les logs
```bash
# Logs Symfony
tail -100 ~/apps/business-manager/var/log/prod.log

# Logs serveur
tail -100 ~/apps/business-manager/public/error_log
```

### Vérifier l'espace disque
```bash
df -h
```