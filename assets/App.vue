<template>
  <div id="app">
    <!-- Header avec navigation -->
    <header class="app-header">
      <div class="header-container">
        <div class="header-brand">
          <h1>Business Manager</h1>
          <p class="header-subtitle">Gestion de ton projet entrepreneurial - Mon Assistant Numérique</p>
        </div>
        
        <nav class="header-nav">
          <button 
            @click="currentView = 'home'" 
            :class="['nav-button', { active: currentView === 'home' }]"
          >
            🏠 Accueil
          </button>
          <button 
            @click="currentView = 'dashboard'" 
            :class="['nav-button', { active: currentView === 'dashboard' }]"
          >
            📊 Dashboard
          </button>
          <button 
            @click="currentView = 'kanban'" 
            :class="['nav-button', { active: currentView === 'kanban' }]"
          >
            📋 Suivi des Étapes
          </button>
        </nav>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="app-main">
      <!-- Vue Accueil -->
      <div v-if="currentView === 'home'" class="home-view">
        <Card class="welcome-card">
          <h2>👋 Bienvenue sur ton Business Manager</h2>
          <p>Ton tableau de bord entrepreneurial est prêt !</p>
          
          <div class="welcome-status">
            ✅ Symfony 7.2 + Vue.js 3 fonctionnent parfaitement
          </div>
        </Card>

        <div class="features-grid">
          <Card class="feature-card" hoverable @click="currentView = 'dashboard'">
            <div class="feature-icon">📊</div>
            <h3>Dashboard</h3>
            <p>Vue d'ensemble avec graphiques et statistiques</p>
          </Card>

          <Card class="feature-card" hoverable @click="currentView = 'kanban'">
            <div class="feature-icon">📋</div>
            <h3>Suivi des Étapes</h3>
            <p>Gère toutes les étapes de création de ton entreprise</p>
          </Card>

          <Card class="feature-card disabled">
            <div class="feature-icon">📁</div>
            <h3>Documents</h3>
            <p>Bientôt disponible</p>
          </Card>

          <Card class="feature-card disabled">
            <div class="feature-icon">📅</div>
            <h3>Calendrier</h3>
            <p>Bientôt disponible</p>
          </Card>
        </div>
      </div>

      <!-- Vue Dashboard -->
      <Dashboard 
        v-if="currentView === 'dashboard'" 
        @navigate="navigateTo"
      />

      <!-- Vue Kanban -->
      <EtapesKanban v-if="currentView === 'kanban'" />
    </main>
  </div>
</template>

<script>
import EtapesKanban from './components/EtapesKanban.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    EtapesKanban,
    Dashboard
  },
  data() {
    return {
      currentView: 'home' // home, dashboard, kanban
    }
  },
  methods: {
    navigateTo(view) {
      this.currentView = view
    }
  }
}
</script>

<style>
/* Reset et variables globales déjà dans design-system.css */

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: var(--space-lg) 0;
  box-shadow: var(--shadow-lg);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.header-brand h1 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
}

.header-subtitle {
  margin: var(--space-xs) 0 0 0;
  font-size: 0.875rem;
  opacity: 0.9;
}

.header-nav {
  display: flex;
  gap: var(--space-sm);
}

.nav-button {
  padding: var(--space-md) var(--space-lg);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  backdrop-filter: blur(10px);
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-button.active {
  background: white;
  color: var(--primary);
  border-color: white;
}

/* Main */
.app-main {
  flex: 1;
  background: var(--bg-secondary);
}

/* Home View */
.home-view {
  padding: var(--space-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-card {
  text-align: center;
  margin-bottom: var(--space-xl);
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
}

.welcome-card h2 {
  margin: 0 0 var(--space-md) 0;
  font-size: 2rem;
}

.welcome-card p {
  margin: 0 0 var(--space-lg) 0;
  font-size: 1.125rem;
  opacity: 0.9;
}

.welcome-status {
  padding: var(--space-md);
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.feature-card {
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
}

.feature-card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.feature-card:not(.disabled):hover {
  transform: translateY(-8px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.feature-card h3 {
  margin: 0 0 var(--space-sm) 0;
  color: var(--text-primary);
  font-size: 1.25rem;
}

.feature-card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .header-nav {
    flex-direction: column;
  }
  
  .nav-button {
    width: 100%;
  }
}
</style>