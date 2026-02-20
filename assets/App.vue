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
          <button 
            @click="currentView = 'calendrier'" 
            :class="['nav-button', { active: currentView === 'calendrier' }]"
          >
            📅 Calendrier
          </button>
          <button 
            @click="currentView = 'finances'" 
            :class="['nav-button', { active: currentView === 'finances' }]"
          >
            💰 Finances
          </button>
        </nav>
        <UserMenu @navigate="navigateTo" />
      </div>
      
    </header>

    <!-- Contenu principal -->
    <main class="app-main">
      <!-- Vue Accueil -->
      <div v-if="currentView === 'home'" class="home-view">
        <Card class="welcome-card">
          <h2>👋 Bienvenue sur ton Business Manager</h2>
          <p>Ton tableau de bord entrepreneurial complet est prêt !</p>
          
          <div class="welcome-status">
            ✅ Application V1 complète avec 5 modules fonctionnels
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
            <p>Kanban avec drag & drop et filtres avancés</p>
          </Card>

          <Card class="feature-card" hoverable @click="currentView = 'calendrier'">
            <div class="feature-icon">📅</div>
            <h3>Calendrier</h3>
            <p>Visualise tes échéances et planifie ton projet</p>
          </Card>

          <Card class="feature-card" hoverable @click="currentView = 'finances'">
            <div class="feature-icon">💰</div>
            <h3>Finances</h3>
            <p>Budget, trésorerie et suivi des dépenses</p>
          </Card>
        </div>

        <!-- Stats rapides -->
        <div class="home-stats">
          <Card class="home-stat-card">
            <div class="stat-content">
              <div class="stat-icon">🎯</div>
              <div class="stat-details">
                <span class="stat-value">V1</span>
                <span class="stat-label">Version Actuelle</span>
              </div>
            </div>
          </Card>

          <Card class="home-stat-card">
            <div class="stat-content">
              <div class="stat-icon">🚀</div>
              <div class="stat-details">
                <span class="stat-value">5</span>
                <span class="stat-label">Modules Actifs</span>
              </div>
            </div>
          </Card>

          <Card class="home-stat-card">
            <div class="stat-content">
              <div class="stat-icon">⚡</div>
              <div class="stat-details">
                <span class="stat-value">100%</span>
                <span class="stat-label">Opérationnel</span>
              </div>
            </div>
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

      <!-- Vue Calendrier -->
      <Calendrier 
        v-if="currentView === 'calendrier'"
        @navigate="navigateTo"
      />

      <!-- Vue Finances -->
      <Finances v-if="currentView === 'finances'" />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-content">
        <p>&copy; 2026 Business Manager - Mon Assistant Numérique</p>
        <p class="footer-version">Version 1.0 - Symfony 7.2 + Vue.js 3</p>
      </div>
    </footer>
  </div>
</template>

<script>
import EtapesKanban from './components/EtapesKanban.vue'
import Dashboard from './components/Dashboard.vue'
import Calendrier from './components/Calendrier.vue'
import Finances from './components/Finances.vue'

export default {
  name: 'App',
  components: {
    EtapesKanban,
    Dashboard,
    Calendrier,
    Finances
  },
  data() {
    return {
      currentView: 'home' // home, dashboard, kanban, calendrier, finances
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
  flex-wrap: wrap;
}

.nav-button {
  padding: var(--space-md) var(--space-lg);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  backdrop-filter: blur(10px);
  white-space: nowrap;
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
  margin-bottom: var(--space-xl);
}

.feature-card {
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
}

.feature-card:hover {
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

.home-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);
}

.home-stat-card {
  background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
}

.stat-content {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.stat-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.stat-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
}

/* Footer */
.app-footer {
  background: var(--gray-800);
  color: var(--gray-300);
  padding: var(--space-lg) 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  text-align: center;
}

.footer-content p {
  margin: var(--space-xs) 0;
  font-size: 0.875rem;
}

.footer-version {
  color: var(--gray-400);
  font-size: 0.75rem;
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
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>