<template>
  <div id="app">
    <!-- Indicateur hors ligne -->
    <OfflineIndicator />

    <!-- Login natif : affiché si non authentifié en mode Capacitor -->
    <Login v-if="isNative && !isAuthenticated && !configLoading" @login-success="onLoginSuccess" />

    <!-- Loader pendant la récupération de la config -->
    <div v-else-if="configLoading" class="config-loader">
      <div class="config-loader-spinner"></div>
      <p style="color:#333;margin-top:20px">Chargement...</p>
    </div>

    <template v-else>
      <!-- Header -->
      <header class="app-header">
        <div class="header-container">
          <div class="header-brand">
            <img
              v-if="config.logoPath"
              :src="config.logoPath"
              alt="Logo"
              class="header-logo"
            />
            <div>
              <h1>{{ config.appName }}</h1>
              <p class="header-subtitle hide-mobile">{{ config.appSubtitle }}</p>
            </div>
          </div>

          <!-- Navigation desktop générée dynamiquement -->
          <nav class="header-nav hide-mobile">
            <button
              @click="navigateTo('home')"
              :class="['nav-button', { active: currentView === 'home' }]"
            >🏠 Accueil</button>
            <button
              v-for="module in activeModules"
              :key="module.key"
              @click="navigateTo(module.key)"
              :class="['nav-button', { active: currentView === module.key }]"
            >{{ module.label }}</button>
          </nav>

          <UserMenu :logo-path="config.logoPath" @navigate="navigateTo" />
        </div>
      </header>

      <!-- Contenu principal -->
      <main class="app-main mobile-padding">

        <!-- Page d'accueil : cards générées depuis les modules actifs -->
        <div v-if="currentView === 'home'" class="home-view">
          <div class="welcome-section">
            <Card class="welcome-card">
              <h2>👋 Bienvenue sur {{ config.appName }}</h2>
              <p>{{ config.appSubtitle }}</p>
            </Card>
          </div>

          <div class="features-grid">
            <Card
              v-for="module in activeModules"
              :key="module.key"
              class="feature-card"
              @click="navigateTo(module.key)"
            >
              <div class="feature-icon">{{ module.icon }}</div>
              <h3>{{ module.label.replace(/^\S+\s/, '') }}</h3>
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
              <h3>{{ activeModules.length }}</h3>
              <p>Modules Actifs</p>
            </Card>
            <Card class="stat-card">
              <div class="stat-icon">⚡</div>
              <h3>100%</h3>
              <p>Opérationnel</p>
            </Card>
          </div>
        </div>

        <Settings
          v-if="currentView === 'settings'"
          @config-updated="onConfigUpdated"
        />

        <!-- Rendu dynamique : un composant par module actif, affiché selon currentView -->
        <template v-for="module in activeModules" :key="module.key">
          <component
            :is="module.component"
            v-if="currentView === module.key"
            @navigate="navigateTo"
          />
        </template>

      </main>

      <!-- Bottom Navigation mobile -->
      <BottomNav
        :current-view="currentView"
        :modules="activeModules"
        @navigate="navigateTo"
      />

      <!-- Prompt d'installation PWA -->
      <InstallPrompt />

      <!-- Notification mise à jour SW disponible -->
      <UpdatePrompt />

      <!-- Footer desktop -->
      <footer class="app-footer hide-mobile">
        <div class="footer-content">
          <p>&copy; {{ new Date().getFullYear() }} {{ config.appName }}</p>
          <p class="footer-version">Symfony 7.2 + Vue.js 3 · PWA</p>
        </div>
      </footer>
    </template>
  </div>
  <div style="position:fixed;top:0;left:0;background:red;color:white;z-index:99999;padding:8px;font-size:12px">
    native:{{ isNative }} | auth:{{ isAuthenticated }} | loading:{{ configLoading }}
  </div>
</template>

<script>
import { ALL_MODULES, MODULES_MAP } from './modules/index.js'
import Settings from './components/Settings.vue'
import UpdatePrompt from './components/UpdatePrompt.vue'
import UserMenu from './components/UserMenu.vue'
import OfflineIndicator from './components/OfflineIndicator.vue'
import BottomNav from './components/BottomNav.vue'
import InstallPrompt from './components/InstallPrompt.vue'
import Login from './components/auth/Login.vue'
import { isNative, apiFetch } from './env.js'

const DEFAULT_CONFIG = {
  appName:        'Business Manager',
  appSubtitle:    'Gestion de votre activité',
  primaryColor:   '#667eea',
  secondaryColor: '#764ba2',
  modules:        ALL_MODULES.map(m => m.key),
}

export default {
  name: 'App',
  components: {
    UserMenu,
    OfflineIndicator,
    BottomNav,
    InstallPrompt,
    Settings,
    UpdatePrompt,
    Login,
    // Les composants de modules sont résolus dynamiquement via activeModules
  },

  data() {
    return {
      currentView: 'home',
      config: { ...DEFAULT_CONFIG },
      configLoading: true,
      isAuthenticated: !isNative,  // isNative est une constante booléenne
      isNative: isNative,
    }
  },

  computed: {
    // Modules actifs filtrés selon la config
    activeModules() {
      return ALL_MODULES.filter(m => this.config.modules.includes(m.key))
    },
  },

  async mounted() {
    await this.loadConfig()
  },

  methods: {
    async loadConfig() {
      try {
        console.log('[App] isNative:', isNative, 'token:', localStorage.getItem('jwt_token')?.substring(0, 20))
        const res = await apiFetch('/api/config')
        console.log('[App] /api/config status:', res.status, 'redirected:', res.redirected)

        // En mode natif, un 401 = session expirée ou pas encore connecté
        if (res.status === 401 || res.redirected) {
          this.isAuthenticated = false
          this.configLoading = false
          return
        }

        if (res.ok) {
          this.isAuthenticated = true
          this.config = await res.json()
          this.applyTheme(this.config)
        }
      } catch (e) {
        console.warn('[App] Config non disponible:', e)
      } finally {
        this.configLoading = false
      }
    },

    onLoginSuccess() {
      this.isAuthenticated = true
      this.loadConfig()
    },

    applyTheme(config) {
      const root = document.documentElement
      root.style.setProperty('--primary', config.primaryColor)
      root.style.setProperty('--primary-dark', this.darken(config.primaryColor, 15))
      root.style.setProperty('--primary-light', this.lighten(config.primaryColor, 15))
      root.style.setProperty('--secondary', config.secondaryColor)

      // Synchroniser les meta PWA avec le thème client
      const metaTheme = document.getElementById('meta-theme-color')
      if (metaTheme) metaTheme.setAttribute('content', config.primaryColor)

      const metaAppleTitle = document.getElementById('meta-apple-title')
      if (metaAppleTitle) metaAppleTitle.setAttribute('content', config.appName)

      document.title = config.appName
    },

    // Assombrit une couleur hex de `amount` points (0-255)
    darken(hex, amount) {
      return this.adjustColor(hex, -amount)
    },
    lighten(hex, amount) {
      return this.adjustColor(hex, amount)
    },
    adjustColor(hex, amount) {
      const num = parseInt(hex.replace('#', ''), 16)
      const r = Math.min(255, Math.max(0, (num >> 16) + amount))
      const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount))
      const b = Math.min(255, Math.max(0, (num & 0xff) + amount))
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    },

    onConfigUpdated(newConfig) {
      this.config = { ...this.config, ...newConfig }
      this.applyTheme(this.config)
    },

    navigateTo(view) {
      // Vérifier que le module cible est actif
      const moduleKeys = this.activeModules.map(m => m.key)
      if (view !== 'home' && !moduleKeys.includes(view)) {
        this.currentView = 'home'
        return
      }
      this.currentView = view
      if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
/* ============================================
   CONFIG LOADER
   ============================================ */

.config-loader {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  z-index: 9999;
}

.config-loader-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--gray-200);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ============================================
   LAYOUT GLOBAL
   ============================================ */

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ============================================
   HEADER
   ============================================ */

.app-header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--gray-200);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: var(--z-dropdown);
  padding: var(--space-md) 0;
}

.header-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.header-brand {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.header-logo {
  height: 40px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  border-radius: var(--radius-sm);
}

.header-brand h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin: 0;
  line-height: 1.2;
}

.header-subtitle {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin: 0;
}

/* ============================================
   NAVIGATION DESKTOP
   ============================================ */

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex: 1;
}

.nav-button {
  padding: var(--space-sm) var(--space-md);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
  font-family: var(--font-sans);
}

.nav-button:hover {
  background: var(--gray-100);
  color: var(--text-primary);
}

.nav-button.active {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
}

/* ============================================
   MAIN & FOOTER
   ============================================ */

.app-main {
  flex: 1;
}

.app-footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--gray-200);
  padding: var(--space-lg) var(--space-xl);
  text-align: center;
}

.footer-content p {
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin: 0;
  line-height: 1.8;
}

.footer-version {
  color: var(--text-light);
}

/* ============================================
   MOBILE
   ============================================ */

.app-main.mobile-padding {
  padding-bottom: 80px;
}

@media (min-width: 768px) {
  .app-main.mobile-padding {
    padding-bottom: 0;
  }
}

@media (max-width: 767px) {
  .header-container {
    padding: 0 var(--space-md);
  }

  .header-brand h1 {
    font-size: 1.25rem;
  }

  .app-header {
    padding: var(--space-sm) 0;
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