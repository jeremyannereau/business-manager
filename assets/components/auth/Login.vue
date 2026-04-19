<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h1>👋 Connexion</h1>
        <p>Connectez-vous à votre compte</p>
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div v-if="error" class="alert alert-error">{{ error }}</div>

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

        <div class="form-group-checkbox" v-if="!isNative">
          <label class="checkbox-label">
            <input v-model="form.rememberMe" type="checkbox">
            <span>Se souvenir de moi</span>
          </label>
        </div>

        <Button type="submit" size="lg" :loading="loading" style="width: 100%">
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
import { isNative, API_BASE } from '../../env.js'

export default {
  name: 'Login',
  emits: ['login-success'],

  data() {
    return {
      isNative,
      form: { email: '', password: '', rememberMe: false },
      loading: false,
      error: null,
    }
  },

  methods: {
    async handleLogin() {
      this.loading = true
      this.error = null

      try {
        // ── Mode natif (Capacitor) ──────────────────────────────────────────
        // Appel JSON vers /api/auth/login, pas de CSRF requis.
        // La session est maintenue via cookie géré par la WebView.
        if (this.isNative) {
          const res = await fetch(`${API_BASE}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // ← cookie de session
            body: JSON.stringify({
              email:    this.form.email,
              password: this.form.password,
            }),
          })

          const data = await res.json()

          if (!res.ok) {
            this.error = data.error || 'Identifiants incorrects'
            return
          }

          // Stocker le JWT et les infos user, notifier App.vue
          localStorage.setItem('jwt_token', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          this.$emit('login-success')
          return
        }

        // ── Mode web (navigateur classique) ────────────────────────────────
        // Login form Symfony avec CSRF token, comportement inchangé.
        const csrfToken = document.getElementById('auth-app')?.getAttribute('data-csrf-token')
        const formData  = new FormData()
        formData.append('_username',   this.form.email)
        formData.append('_password',   this.form.password)
        formData.append('_csrf_token', csrfToken)
        if (this.form.rememberMe) formData.append('_remember_me', 'on')

        const response = await fetch('/login', {
          method: 'POST',
          body: formData,
          redirect: 'manual',
        })

        if (response.type === 'opaqueredirect' || response.status === 0 || response.ok) {
          window.location.href = '/'
          return
        }

        this.error = 'Email ou mot de passe incorrect'

      } catch (err) {
        console.error('Erreur login:', err)
        this.error = 'Une erreur est survenue. Veuillez réessayer.'
      } finally {
        this.loading = false
      }
    },
  },
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
  /* Safe area iOS */
  padding-top: calc(var(--space-xl) + env(safe-area-inset-top));
  padding-bottom: calc(var(--space-xl) + env(safe-area-inset-bottom));
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

.auth-header { text-align: center; margin-bottom: var(--space-xl); }
.auth-header h1 { margin: 0 0 var(--space-sm) 0; font-size: 2rem; font-weight: 700; color: var(--text-primary); }
.auth-header p  { margin: 0; color: var(--text-secondary); font-size: 1rem; }

.auth-form { display: flex; flex-direction: column; gap: var(--space-lg); }

.alert { padding: var(--space-md); border-radius: var(--radius-lg); font-size: 0.875rem; font-weight: 600; }
.alert-error { background: rgba(239, 68, 68, 0.1); color: var(--error); border: 1px solid var(--error); }

.form-group { display: flex; flex-direction: column; gap: var(--space-sm); }
.form-label { font-weight: 600; color: var(--text-primary); font-size: 0.875rem; }
.form-input {
  padding: var(--space-md);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-family: var(--font-sans);
  transition: all var(--transition-base);
  background: var(--bg-primary);
}
.form-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }

.form-group-checkbox { display: flex; align-items: center; }
.checkbox-label { display: flex; align-items: center; gap: var(--space-sm); cursor: pointer; user-select: none; }
.checkbox-label input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; }
.checkbox-label span { font-size: 0.875rem; color: var(--text-secondary); }

.auth-footer { margin-top: var(--space-xl); text-align: center; padding-top: var(--space-lg); border-top: 1px solid var(--gray-100); }
.auth-footer p { margin: 0; color: var(--text-secondary); font-size: 0.875rem; }
.link { color: var(--primary); font-weight: 600; text-decoration: none; transition: all var(--transition-base); }
.link:hover { color: var(--secondary); text-decoration: underline; }

@media (max-width: 768px) {
  .auth-card { padding: var(--space-xl); }
}
</style>
