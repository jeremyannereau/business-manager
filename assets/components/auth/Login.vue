<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h1>👋 Connexion</h1>
        <p>Connectez-vous à votre compte</p>
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div v-if="error" class="alert alert-error">
          {{ error }}
        </div>

        <div class="form-group">
          <label class="form-label">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            class="form-input"
            placeholder="votre@email.com"
            required
            autofocus
          >
        </div>

        <div class="form-group">
          <label class="form-label">Mot de passe</label>
          <input 
            v-model="form.password" 
            type="password" 
            class="form-input"
            placeholder="••••••••"
            required
          >
        </div>

        <div class="form-group-checkbox">
          <label class="checkbox-label">
            <input v-model="form.rememberMe" type="checkbox">
            <span>Se souvenir de moi</span>
          </label>
        </div>

        <Button 
          type="submit" 
          size="lg" 
          :loading="loading"
          style="width: 100%"
        >
          Se connecter
        </Button>
      </form>

      <div class="auth-footer">
        <p>Pas encore de compte ? <a href="/register" class="link">Créer un compte</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        rememberMe: false
      },
      loading: false,
      error: null
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      this.error = null

      try {
        // Récupérer le CSRF token depuis l'attribut data
        const csrfToken = document.getElementById('auth-app').getAttribute('data-csrf-token')
        
        const formData = new FormData()
        formData.append('_username', this.form.email)
        formData.append('_password', this.form.password)
        formData.append('_csrf_token', csrfToken)  // ← Ajouter le token CSRF
        
        if (this.form.rememberMe) {
          formData.append('_remember_me', 'on')
        }

        const response = await fetch('/login', {
          method: 'POST',
          body: formData,
          redirect: 'manual'
        })

        // Vérifier si la connexion a réussi
        if (response.type === 'opaqueredirect' || response.status === 0) {
          // Connexion réussie, rediriger manuellement
          window.location.href = '/'
          return
        }

        if (response.ok) {
          window.location.href = '/'
          return
        }

        // Si on arrive ici, c'est qu'il y a une erreur
        this.error = 'Email ou mot de passe incorrect'
      } catch (error) {
        console.error('Erreur de connexion:', error)
        this.error = 'Une erreur est survenue. Veuillez réessayer.'
      } finally {
        this.loading = false
      }
    } 
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: var(--space-xl);
}

.auth-card {
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
  padding: var(--space-2xl);
  width: 100%;
  max-width: 450px;
  animation: slideInUp var(--transition-slow);
}

.auth-header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.auth-header h1 {
  margin: 0 0 var(--space-sm) 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.auth-header p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 1rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.alert {
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 600;
}

.alert-error {
  background: rgba(239, 68, 68, 0.1);
  color: var(--error);
  border: 1px solid var(--error);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
}

.form-input {
  padding: var(--space-md);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-family: var(--font-sans);
  transition: all var(--transition-base);
  background: var(--bg-primary);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group-checkbox {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
  user-select: none;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox-label span {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.auth-footer {
  margin-top: var(--space-xl);
  text-align: center;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--gray-100);
}

.auth-footer p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-base);
}

.link:hover {
  color: var(--secondary);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .auth-card {
    padding: var(--space-xl);
  }
}
</style>