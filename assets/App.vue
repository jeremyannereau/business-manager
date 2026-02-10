<template>
  <div id="app">
    <header class="app-header">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </header>
    
    <main class="app-main">
      <div class="welcome-card">
        <h2>Bienvenue sur ton Business Manager</h2>
        <p>Ton tableau de bord entrepreneurial est prêt !</p>
        <p class="status">✅ Symfony 7.2 + Vue.js 3 fonctionnent parfaitement</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Business Manager',
      subtitle: 'Gestion de ton projet entrepreneurial - Mon Assistant Numérique'
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
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
}

.app-main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.welcome-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
</style>