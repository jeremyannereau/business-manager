<template>
  <nav class="bottom-nav show-mobile">
    <!-- Bouton Accueil toujours présent -->
    <button
      @click="$emit('navigate', 'home')"
      :class="['nav-item', { active: currentView === 'home' }]"
    >
      <span class="nav-icon">🏠</span>
      <span class="nav-label">Accueil</span>
    </button>

    <!-- Boutons générés depuis les modules actifs (max 4 pour ne pas surcharger) -->
    <button
      v-for="module in visibleModules"
      :key="module.key"
      @click="$emit('navigate', module.key)"
      :class="['nav-item', { active: currentView === module.key }]"
    >
      <span class="nav-icon">{{ module.icon }}</span>
      <span class="nav-label">{{ module.shortLabel }}</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    currentView: { type: String, required: true },
    // Modules actifs transmis par App.vue (tableau d'objets { key, icon, shortLabel })
    modules: { type: Array, default: () => [] },
  },
  emits: ['navigate'],
  computed: {
    // On affiche au max 4 modules (+ Accueil = 5 items max, standard mobile)
    visibleModules() {
      return this.modules.slice(0, 4)
    },
  },
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
  grid-template-columns: repeat(var(--nav-cols, 5), 1fr);
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

.nav-item:active  { transform: scale(0.95); }
.nav-item.active  { color: var(--primary); }

.nav-icon  { font-size: 1.5rem; }
.nav-label { font-size: 0.7rem; font-weight: 600; }
</style>
