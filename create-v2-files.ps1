# Script de création des fichiers V2 manquants
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Création des fichiers V2 manquants" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Créer le dossier auth si nécessaire
New-Item -Path "assets/components/auth" -ItemType Directory -Force | Out-Null

# 1. UserMenu.vue
Write-Host "Création de UserMenu.vue..." -ForegroundColor Yellow
$userMenuContent = @'
<template>
  <div class="user-menu">
    <div v-if="user" class="user-info" @click="toggleDropdown">
      <div class="user-avatar">
        {{ userInitials }}
      </div>
      <div class="user-details">
        <span class="user-name">{{ user.prenom }} {{ user.nom }}</span>
        <span class="user-email">{{ user.email }}</span>
      </div>
      <span class="dropdown-icon">▼</span>
    </div>

    <!-- Dropdown menu -->
    <div v-if="showDropdown" class="dropdown-menu" @click.stop>
      <div class="dropdown-header">
        <div class="user-avatar large">
          {{ userInitials }}
        </div>
        <div class="user-info-full">
          <strong>{{ user.prenom }} {{ user.nom }}</strong>
          <span>{{ user.email }}</span>
        </div>
      </div>

      <div class="dropdown-divider"></div>

      <a href="#" @click.prevent="goToProfile" class="dropdown-item">
        <span class="item-icon">👤</span>
        <span>Mon profil</span>
      </a>

      <a href="#" @click.prevent="goToSettings" class="dropdown-item">
        <span class="item-icon">⚙️</span>
        <span>Paramètres</span>
      </a>

      <div class="dropdown-divider"></div>

      <a href="/logout" class="dropdown-item logout">
        <span class="item-icon">🚪</span>
        <span>Déconnexion</span>
      </a>
    </div>

    <!-- Overlay pour fermer le dropdown -->
    <div v-if="showDropdown" class="dropdown-overlay" @click="closeDropdown"></div>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  data() {
    return {
      user: null,
      showDropdown: false
    }
  },
  computed: {
    userInitials() {
      if (!this.user) return ''
      const prenom = this.user.prenom || ''
      const nom = this.user.nom || ''
      return (prenom.charAt(0) + nom.charAt(0)).toUpperCase()
    }
  },
  mounted() {
    this.loadUser()
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    async loadUser() {
      try {
        const response = await fetch('/api/auth/user')
        if (response.ok) {
          const data = await response.json()
          this.user = data.user
        }
      } catch (error) {
        console.error('Erreur chargement utilisateur:', error)
      }
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    closeDropdown() {
      this.showDropdown = false
    },
    handleClickOutside(event) {
      const userMenu = this.$el
      if (!userMenu.contains(event.target)) {
        this.closeDropdown()
      }
    },
    goToProfile() {
      this.$emit('navigate', 'profile')
      this.closeDropdown()
    },
    goToSettings() {
      this.$emit('navigate', 'settings')
      this.closeDropdown()
    }
  }
}
</script>

<style scoped>
.user-menu {
  position: relative;
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  backdrop-filter: blur(10px);
}

.user-info:hover {
  background: rgba(255, 255, 255, 0.2);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: white;
}

.user-avatar.large {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.user-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
}

.user-email {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-icon {
  font-size: 0.7rem;
  color: white;
  margin-left: var(--space-sm);
  transition: transform var(--transition-base);
}

.user-info:hover .dropdown-icon {
  transform: translateY(2px);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + var(--space-sm));
  right: 0;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2xl);
  min-width: 280px;
  z-index: 1000;
  animation: slideDown var(--transition-base);
  border: 1px solid var(--gray-200);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-header {
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.user-info-full {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.user-info-full strong {
  font-size: 1rem;
  color: var(--text-primary);
}

.user-info-full span {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.dropdown-divider {
  height: 1px;
  background: var(--gray-200);
  margin: var(--space-xs) 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  color: var(--text-primary);
  text-decoration: none;
  transition: all var(--transition-base);
  font-size: 0.95rem;
  font-weight: 500;
}

.dropdown-item:hover {
  background: var(--bg-secondary);
}

.dropdown-item.logout {
  color: var(--error);
}

.dropdown-item.logout:hover {
  background: rgba(239, 68, 68, 0.1);
}

.item-icon {
  font-size: 1.25rem;
}

.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

@media (max-width: 768px) {
  .user-email {
    display: none;
  }
  
  .dropdown-menu {
    right: -10px;
  }
}
</style>
'@

Set-Content -Path "assets/components/UserMenu.vue" -Value $userMenuContent -Encoding UTF8
Write-Host "✓ UserMenu.vue créé" -ForegroundColor Green

# 2. OfflineIndicator.vue
Write-Host "Création de OfflineIndicator.vue..." -ForegroundColor Yellow
$offlineContent = @'
<template>
  <Transition name="slide-down">
    <div v-if="!isOnline" class="offline-banner">
      <div class="offline-content">
        <span class="offline-icon">📡</span>
        <span class="offline-text">Vous êtes hors ligne</span>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'OfflineIndicator',
  data() {
    return {
      isOnline: navigator.onLine
    }
  },
  mounted() {
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
  },
  beforeUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus)
    window.removeEventListener('offline', this.updateOnlineStatus)
  },
  methods: {
    updateOnlineStatus() {
      this.isOnline = navigator.onLine
    }
  }
}
</script>

<style scoped>
.offline-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--error);
  color: white;
  padding: var(--space-md);
  z-index: 10000;
  box-shadow: var(--shadow-lg);
}

.offline-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-weight: 600;
}

.offline-icon {
  font-size: 1.25rem;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
'@

Set-Content -Path "assets/components/OfflineIndicator.vue" -Value $offlineContent -Encoding UTF8
Write-Host "✓ OfflineIndicator.vue créé" -ForegroundColor Green

# 3. BottomNav.vue
Write-Host "Création de BottomNav.vue..." -ForegroundColor Yellow
$bottomNavContent = @'
<template>
  <nav class="bottom-nav show-mobile">
    <button 
      @click="$emit('navigate', 'home')" 
      :class="['nav-item', { active: currentView === 'home' }]"
    >
      <span class="nav-icon">🏠</span>
      <span class="nav-label">Accueil</span>
    </button>
    
    <button 
      @click="$emit('navigate', 'dashboard')" 
      :class="['nav-item', { active: currentView === 'dashboard' }]"
    >
      <span class="nav-icon">📊</span>
      <span class="nav-label">Dashboard</span>
    </button>
    
    <button 
      @click="$emit('navigate', 'kanban')" 
      :class="['nav-item', { active: currentView === 'kanban' }]"
    >
      <span class="nav-icon">📋</span>
      <span class="nav-label">Étapes</span>
    </button>
    
    <button 
      @click="$emit('navigate', 'calendrier')" 
      :class="['nav-item', { active: currentView === 'calendrier' }]"
    >
      <span class="nav-icon">📅</span>
      <span class="nav-label">Calendrier</span>
    </button>
    
    <button 
      @click="$emit('navigate', 'finances')" 
      :class="['nav-item', { active: currentView === 'finances' }]"
    >
      <span class="nav-icon">💰</span>
      <span class="nav-label">Finances</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    currentView: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  border-top: 1px solid var(--gray-200);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: var(--space-xs) 0;
  padding-bottom: calc(var(--space-xs) + env(safe-area-inset-bottom));
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: var(--space-xs);
  background: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  color: var(--text-secondary);
  min-height: 60px;
  -webkit-tap-highlight-color: transparent;
}

.nav-item:active {
  transform: scale(0.95);
}

.nav-item.active {
  color: var(--primary);
}

.nav-icon {
  font-size: 1.5rem;
}

.nav-label {
  font-size: 0.7rem;
  font-weight: 600;
}
</style>
'@

Set-Content -Path "assets/components/BottomNav.vue" -Value $bottomNavContent -Encoding UTF8
Write-Host "✓ BottomNav.vue créé" -ForegroundColor Green

# 4. InstallPrompt.vue
Write-Host "Création de InstallPrompt.vue..." -ForegroundColor Yellow
$installPromptContent = @'
<template>
  <div v-if="showInstallPrompt" class="install-prompt">
    <Card class="install-card">
      <div class="install-content">
        <div class="install-icon">📱</div>
        <div class="install-text">
          <h3>Installer l'application</h3>
          <p>Installez Business Manager sur votre appareil pour un accès rapide !</p>
        </div>
      </div>
      <div class="install-actions">
        <Button @click="dismiss" variant="ghost" size="sm">
          Plus tard
        </Button>
        <Button @click="install" size="sm">
          Installer
        </Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'InstallPrompt',
  data() {
    return {
      deferredPrompt: null,
      showInstallPrompt: false
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt)
    
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App déjà installée')
    }
  },
  beforeUnmount() {
    window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt)
  },
  methods: {
    handleBeforeInstallPrompt(e) {
      e.preventDefault()
      this.deferredPrompt = e
      
      setTimeout(() => {
        this.showInstallPrompt = true
      }, 5000)
    },
    async install() {
      if (!this.deferredPrompt) return
      
      this.deferredPrompt.prompt()
      const { outcome } = await this.deferredPrompt.userChoice
      
      console.log(`User response: ${outcome}`)
      
      this.deferredPrompt = null
      this.showInstallPrompt = false
    },
    dismiss() {
      this.showInstallPrompt = false
      localStorage.setItem('installPromptDismissed', Date.now())
    }
  }
}
</script>

<style scoped>
.install-prompt {
  position: fixed;
  bottom: var(--space-lg);
  left: var(--space-lg);
  right: var(--space-lg);
  z-index: 9999;
  animation: slideUp var(--transition-base);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.install-card {
  box-shadow: var(--shadow-2xl);
  border: 2px solid var(--primary);
}

.install-content {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.install-icon {
  font-size: 3rem;
}

.install-text h3 {
  margin: 0 0 var(--space-xs) 0;
  font-size: 1.125rem;
  color: var(--text-primary);
}

.install-text p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.install-actions {
  display: flex;
  gap: var(--space-sm);
  justify-content: flex-end;
}

@media (min-width: 768px) {
  .install-prompt {
    max-width: 400px;
    right: auto;
  }
}
</style>
'@

Set-Content -Path "assets/components/InstallPrompt.vue" -Value $installPromptContent -Encoding UTF8
Write-Host "✓ InstallPrompt.vue créé" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "✓ Tous les fichiers ont été créés !" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Prochaines étapes:" -ForegroundColor Cyan
Write-Host "1. npm run dev" -ForegroundColor Yellow
Write-Host "2. Rafraîchir le navigateur (Ctrl+Shift+R)" -ForegroundColor Yellow
Write-Host ""