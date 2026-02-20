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

@media (min-width: 768px) {
  .bottom-nav {
    display: none;
  }
}
</style>