<template>
  <div id="app">
    <header class="app-header">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <nav class="app-nav">
        <button @click="currentView = 'home'" :class="{ active: currentView === 'home' }">🏠 Accueil</button>
        <button @click="currentView = 'etapes'" :class="{ active: currentView === 'etapes' }">📋 Suivi des Étapes</button>
      </nav>
    </header>
    
    <main class="app-main">
      <!-- Vue Accueil -->
      <div v-if="currentView === 'home'" class="welcome-card">
        <h2>Bienvenue sur ton Business Manager</h2>
        <p>Ton tableau de bord entrepreneurial est prêt !</p>
        <p class="status">✅ Symfony 7.2 + Vue.js 3 fonctionnent parfaitement</p>
        <div class="features">
          <div class="feature" @click="currentView = 'etapes'">
            <h3>📋 Suivi des Étapes</h3>
            <p>Gère toutes les étapes de création de ton entreprise</p>
          </div>
          <div class="feature coming-soon">
            <h3>📁 Documents</h3>
            <p>Bientôt disponible</p>
          </div>
          <div class="feature coming-soon">
            <h3>📅 Calendrier</h3>
            <p>Bientôt disponible</p>
          </div>
        </div>
      </div>

      <!-- Vue Suivi des Étapes -->
      <EtapesKanban v-if="currentView === 'etapes'" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Business Manager',
      subtitle: 'Gestion de ton projet entrepreneurial - Mon Assistant Numérique',
      currentView: 'home'
    }
  }
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.app-header h1 {
  margin: 0;
  font-size: 2.5rem;
}

.app-header p {
  margin: 0.5rem 0 1rem 0;
  opacity: 0.9;
}

.app-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.app-nav button {
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
}

.app-nav button:hover {
  background: rgba(255,255,255,0.3);
}

.app-nav button.active {
  background: white;
  color: #667eea;
}

.app-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.welcome-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 0 auto;
}

.welcome-card h2 {
  color: #667eea;
  margin-top: 0;
}

.status {
  color: #10b981;
  font-weight: bold;
  margin-top: 1rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.feature {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.feature.coming-soon {
  background: #e2e8f0;
  color: #718096;
  cursor: default;
}

.feature.coming-soon:hover {
  transform: none;
  box-shadow: none;
}

.feature h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.feature p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>