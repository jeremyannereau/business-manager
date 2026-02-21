<template>
  <div id="app">
    <!-- Indicateur hors ligne -->
    <OfflineIndicator />
    
    <!-- Header -->
    <header class="app-header">
      <div class="header-container">
        <div class="header-brand">
          <h1>Business Manager</h1>
          <p class="header-subtitle hide-mobile">Gestion de ton projet entrepreneurial</p>
        </div>
        
        <!-- Navigation desktop (cachée sur mobile) -->
        <nav class="header-nav hide-mobile">
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

    <!-- Contenu principal avec padding bottom sur mobile -->
    <main class="app-main" :class="{ 'mobile-padding': true }">
      <!-- Vues existantes... -->
      <div v-if="currentView === 'home'" class="home-view">
        <div class="welcome-section">
          <Card class="welcome-card">
            <h2>👋 Bienvenue sur Business Manager</h2>
            <p>V2 complète avec authentification multi-utilisateurs et PWA mobile !</p>
          </Card>
        </div>

        <div class="features-grid">
          <Card class="feature-card" @click="currentView = 'dashboard'">
            <div class="feature-icon">📊</div>
            <h3>Dashboard</h3>
            <p>Vue d'ensemble avec graphiques et statistiques</p>
          </Card>

          <Card class="feature-card" @click="currentView = 'kanban'">
            <div class="feature-icon">📋</div>
            <h3>Suivi des Étapes</h3>
            <p>Kanban avec drag & drop et filtres avancés</p>
          </Card>

          <Card class="feature-card" @click="currentView = 'calendrier'">
            <div class="feature-icon">📅</div>
            <h3>Calendrier</h3>
            <p>Visualise tes échéances et planifie ton projet</p>
          </Card>

          <Card class="feature-card" @click="currentView = 'finances'">
            <div class="feature-icon">💰</div>
            <h3>Finances</h3>
            <p>Budget, trésorerie et suivi des dépenses</p>
          </Card>
        </div>

        <div class="stats-grid">
          <Card class="stat-card">
            <div class="stat-icon">🎯</div>
            <h3>V2</h3>
            <p>Version Actuelle</p>
          </Card>

          <Card class="stat-card">
            <div class="stat-icon">🚀</div>
            <h3>5</h3>
            <p>Modules Actifs</p>
          </Card>

          <Card class="stat-card">
            <div class="stat-icon">⚡</div>
            <h3>100%</h3>
            <p>Opérationnel</p>
          </Card>
        </div>
      </div>

      <Dashboard 
        v-if="currentView === 'dashboard'" 
        @navigate="navigateTo"
      />

      <EtapesKanban v-if="currentView === 'kanban'" />

      <Calendrier 
        v-if="currentView === 'calendrier'"
        @navigate="navigateTo"
      />

      <Finances v-if="currentView === 'finances'" />
    </main>

    <!-- Bottom Navigation (mobile uniquement) -->
    <BottomNav 
      :current-view="currentView" 
      @navigate="navigateTo" 
    />

    <!-- Prompt d'installation PWA -->
    <InstallPrompt />

    <!-- Footer (masqué sur mobile) -->
    <footer class="app-footer hide-mobile">
      <div class="footer-content">
        <p>&copy; 2026 Business Manager - Mon Assistant Numérique</p>
        <p class="footer-version">Version 2.0 PWA - Symfony 7.2 + Vue.js 3</p>
      </div>
    </footer>
  </div>
</template>

<script>
import EtapesKanban from './components/EtapesKanban.vue'
import Dashboard from './components/Dashboard.vue'
import Calendrier from './components/Calendrier.vue'
import Finances from './components/Finances.vue'
import UserMenu from './components/UserMenu.vue'
import OfflineIndicator from './components/OfflineIndicator.vue'
import BottomNav from './components/BottomNav.vue'
import InstallPrompt from './components/InstallPrompt.vue'

export default {
  name: 'App',
  components: {
    EtapesKanban,
    Dashboard,
    Calendrier,
    Finances,
    UserMenu,
    OfflineIndicator,
    BottomNav,
    InstallPrompt
  },
  data() {
    return {
      currentView: 'home'
    }
  },
  methods: {
    navigateTo(view) {
      this.currentView = view
      
      // Scroll to top sur mobile
      if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
/* ... styles existants ... */

/* Padding pour le bottom nav sur mobile */
.app-main.mobile-padding {
  padding-bottom: 80px;
}

@media (min-width: 768px) {
  .app-main.mobile-padding {
    padding-bottom: 0;
  }
}

/* Responsive header */
@media (max-width: 767px) {
  .header-container {
    padding: 0 var(--space-md);
  }
  
  .header-brand h1 {
    font-size: 1.25rem;
  }
  
  .app-header {
    padding: var(--space-md) 0;
  }
}

.home-view {
  padding: var(--space-2xl);
  max-width: 1400px;
  margin: 0 auto;
}

.welcome-section {
  margin-bottom: var(--space-2xl);
}

.welcome-card {
  text-align: center;
  padding: var(--space-2xl);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
}

.welcome-card h2 {
  margin: 0 0 var(--space-md) 0;
  font-size: 2rem;
}

.welcome-card p {
  margin: 0;
  font-size: 1.125rem;
  opacity: 0.95;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}

.feature-card {
  cursor: pointer;
  transition: all var(--transition-base);
  text-align: center;
  padding: var(--space-xl);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-2xl);
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: var(--space-md);
}

.feature-card h3 {
  margin: 0 0 var(--space-sm) 0;
  color: var(--text-primary);
}

.feature-card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);
}

.stat-card {
  text-align: center;
  padding: var(--space-xl);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.stat-card h3 {
  margin: 0 0 var(--space-xs) 0;
  font-size: 2rem;
  color: var(--primary);
}

.stat-card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 600;
}
</style>