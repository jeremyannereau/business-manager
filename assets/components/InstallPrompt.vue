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