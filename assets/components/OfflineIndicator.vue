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