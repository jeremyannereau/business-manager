<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h1>✨ Créer un compte</h1>
        <p>Rejoignez Business Manager</p>
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div v-if="error" class="alert alert-error">
          {{ error }}
        </div>

        <div v-if="success" class="alert alert-success">
          {{ success }}
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Prénom</label>
            <input 
              v-model="form.prenom" 
              type="text" 
              class="form-input"
              placeholder="Jean"
              required
              autofocus
            >
          </div>

          <div class="form-group">
            <label class="form-label">Nom</label>
            <input 
              v-model="form.nom" 
              type="text" 
              class="form-input"
              placeholder="Dupont"
              required
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            class="form-input"
            placeholder="jean.dupont@email.com"
            required
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
            minlength="6"
          >
          <span class="form-hint">Minimum 6 caractères</span>
        </div>

        <div class="form-group">
          <label class="form-label">Confirmer le mot de passe</label>
          <input 
            v-model="form.passwordConfirm" 
            type="password" 
            class="form-input"
            placeholder="••••••••"
            required
          >
        </div>

        <div class="form-group-checkbox">
          <label class="checkbox-label">
            <input v-model="form.agreeTerms" type="checkbox" required>
            <span>J'accepte les conditions d'utilisation</span>
          </label>
        </div>

        <Button 
          type="submit" 
          size="lg" 
          :loading="loading"
          :disabled="!isFormValid"
          style="width: 100%"
        >
          Créer mon compte
        </Button>
      </form>

      <div class="auth-footer">
        <p>Déjà un compte ? <a href="/login" class="link">Se connecter</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      form: {
        email: '',
        nom: '',
        prenom: '',
        password: '',
        passwordConfirm: '',
        agreeTerms: false
      },
      loading: false,
      error: null,
      success: null
    }
  },
  computed: {
    isFormValid() {
      return (
        this.form.email &&
        this.form.nom &&
        this.form.prenom &&
        this.form.password.length >= 6 &&
        this.form.password === this.form.passwordConfirm &&
        this.form.agreeTerms
      )
    }
  },
  methods: {
    async handleRegister() {
        this.loading = true
        this.error = null
        this.success = null

        if (this.form.password !== this.form.passwordConfirm) {
            this.error = 'Les mots de passe ne correspondent pas'
            this.loading = false
            return
        }

        try {
            const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.form.email,
                nom: this.form.nom,
                prenom: this.form.prenom,
                password: this.form.password
            })
            })

            const data = await response.json()

            if (response.ok && data.success) {
            this.success = 'Compte créé avec succès ! Redirection vers la connexion...'
            setTimeout(() => {
                window.location.href = '/login'
            }, 1500)
            } else {
            this.error = data.error || 'Une erreur est survenue lors de l\'inscription'
            }
        } catch (error) {
            console.error('Erreur d\'inscription:', error)
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
  max-width: 500px;
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

.alert-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
  border: 1px solid var(--success);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
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

.form-hint {
  font-size: 0.75rem;
  color: var(--text-secondary);
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
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>