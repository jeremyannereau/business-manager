# 📱 Guide PWA - Business Manager

## ✅ Checklist Déploiement PWA

### Prérequis
- [ ] HTTPS activé (obligatoire pour PWA)
- [ ] Icônes générées (192x192 et 512x512)
- [ ] manifest.json créé
- [ ] Service Worker configuré

### Tests à faire
- [ ] Test Lighthouse (score PWA > 90)
- [ ] Test installation sur iPhone Safari
- [ ] Test installation sur Android Chrome
- [ ] Test mode hors ligne
- [ ] Test bottom navigation mobile
- [ ] Test indicateur offline
- [ ] Test prompt d'installation

### Commandes
```bash
# Compiler en production
npm run build

# Déployer
git add .
git commit -m "feat: PWA complète"
git push

# Sur serveur
./deploy.sh
```

### Vérifications HTTPS
Sur o2switch, HTTPS est normalement activé automatiquement.
Vérifier dans le .htaccess que la redirection HTTP → HTTPS est active.

### Tester l'installation
1. Ouvrir l'app sur mobile
2. Attendre 5 secondes
3. Le prompt d'installation devrait apparaître
4. Cliquer sur "Installer"
5. L'icône devrait apparaître sur l'écran d'accueil

### URLs de test
- Production: https://sodev22.fr
- Staging: https://dev.sodev22.fr