<template>
  <Transition name="slide-up">
    <div v-if="showPrompt" class="update-prompt">
      <div class="update-content">
        <span class="update-icon">🔄</span>
        <div class="update-text">
          <strong>Mise à jour disponible</strong>
          <span>Rechargez pour obtenir la dernière version.</span>
        </div>
      </div>
      <div class="update-actions">
        <button class="btn-dismiss" @click="dismiss">Plus tard</button>
        <button class="btn-reload" @click="reload">Recharger</button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'UpdatePrompt',

  data() {
    return { showPrompt: false }
  },

  mounted() {
    // Écoute l'événement émis par le SW dans base.html.twig
    window.addEventListener('sw-update-available', this.onUpdateAvailable)
  },

  beforeUnmount() {
    window.removeEventListener('sw-update-available', this.onUpdateAvailable)
  },

  methods: {
    onUpdateAvailable() {
      this.showPrompt = true
    },
    reload() {
      // Force le nouveau SW à prendre le contrôle immédiatement
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' })
      }
      window.location.reload()
    },
    dismiss() {
      this.showPrompt = false
    },
  },
}
</script>

<style scoped>
.update-prompt {
  position: fixed;
  bottom: calc(var(--space-lg) + env(safe-area-inset-bottom));
  left: var(--space-lg);
  right: var(--space-lg);
  max-width: 480px;
  margin: 0 auto;
  background: var(--bg-primary);
  border: 1px solid var(--gray-200);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  padding: var(--space-md) var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  z-index: 9998;
}

.update-content {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex: 1;
  min-width: 0;
}

.update-icon { font-size: 1.5rem; flex-shrink: 0; }

.update-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.update-text strong {
  font-size: 0.9rem;
  color: var(--text-primary);
}

.update-text span {
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.update-actions {
  display: flex;
  gap: var(--space-sm);
  flex-shrink: 0;
}

.btn-dismiss {
  padding: var(--space-xs) var(--space-md);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.85rem;
  cursor: pointer;
  font-family: var(--font-sans);
  transition: all var(--transition-base);
}

.btn-dismiss:hover { background: var(--bg-tertiary); }

.btn-reload {
  padding: var(--space-xs) var(--space-md);
  border: none;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--font-sans);
  transition: all var(--transition-base);
}

.btn-reload:hover { opacity: 0.9; transform: translateY(-1px); }

/* Transition */
.slide-up-enter-active,
.slide-up-leave-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 767px) {
  .update-prompt {
    flex-direction: column;
    align-items: flex-start;
    bottom: calc(80px + var(--space-md) + env(safe-area-inset-bottom));
  }
  .update-actions { width: 100%; justify-content: flex-end; }
}
</style>
