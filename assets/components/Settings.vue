<template>
  <div class="settings-view">
    <div class="settings-container">

      <!-- En-tête -->
      <div class="settings-header">
        <h2>⚙️ Paramètres</h2>
        <p class="settings-subtitle">Personnalisez votre espace de travail</p>
      </div>

      <!-- Loader -->
      <div v-if="loading" class="settings-loader">Chargement…</div>

      <template v-else>

        <!-- SECTION : Identité de l'app -->
        <section class="settings-section">
          <h3 class="section-title">🏷️ Identité</h3>
          <div class="form-group">
            <label>Nom de l'application</label>
            <input v-model="form.appName" type="text" maxlength="100" placeholder="Mon App" />
          </div>
          <div class="form-group">
            <label>Sous-titre</label>
            <input v-model="form.appSubtitle" type="text" maxlength="200" placeholder="Gestion de votre activité" />
          </div>
        </section>

        <!-- SECTION : Logo -->
        <section class="settings-section">
          <h3 class="section-title">🖼️ Logo</h3>
          <div class="logo-area">
            <div class="logo-preview" :class="{ empty: !form.logoPath }">
              <img v-if="form.logoPath" :src="form.logoPath" alt="Logo" />
              <span v-else class="logo-placeholder">Aucun logo</span>
            </div>
            <div class="logo-actions">
              <label class="btn btn-secondary btn-upload">
                📁 Choisir un fichier
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  @change="onLogoSelect"
                  hidden
                />
              </label>
              <button v-if="form.logoPath" class="btn btn-danger" @click="deleteLogo">
                🗑️ Supprimer
              </button>
              <p class="upload-hint">PNG, JPG, WebP ou SVG · 2 Mo max</p>
            </div>
          </div>
        </section>

        <!-- SECTION : Thème couleurs -->
        <section class="settings-section">
          <h3 class="section-title">🎨 Thème</h3>
          <div class="colors-grid">
            <div class="form-group">
              <label>Couleur primaire</label>
              <div class="color-input-row">
                <input type="color" v-model="form.primaryColor" @input="previewTheme" />
                <input type="text" v-model="form.primaryColor" @input="previewTheme" maxlength="7" class="color-hex" />
              </div>
            </div>
            <div class="form-group">
              <label>Couleur secondaire</label>
              <div class="color-input-row">
                <input type="color" v-model="form.secondaryColor" @input="previewTheme" />
                <input type="text" v-model="form.secondaryColor" @input="previewTheme" maxlength="7" class="color-hex" />
              </div>
            </div>
          </div>
          <!-- Aperçu live -->
          <div class="theme-preview">
            <button class="preview-btn-primary" :style="{ background: form.primaryColor }">Bouton primaire</button>
            <button class="preview-btn-gradient" :style="{ background: `linear-gradient(135deg, ${form.primaryColor}, ${form.secondaryColor})` }">Dégradé</button>
          </div>
        </section>

        <!-- SECTION : Modules -->
        <section class="settings-section">
          <h3 class="section-title">🧩 Modules actifs</h3>
          <p class="section-hint">Sélectionnez les modules visibles dans la navigation</p>
          <div class="modules-grid">
            <label
              v-for="mod in availableModules"
              :key="mod.key"
              class="module-toggle"
              :class="{ active: form.modules.includes(mod.key) }"
            >
              <input
                type="checkbox"
                :value="mod.key"
                v-model="form.modules"
                hidden
              />
              <span class="module-icon">{{ mod.icon }}</span>
              <span class="module-label">{{ mod.label }}</span>
              <span class="module-check">{{ form.modules.includes(mod.key) ? '✓' : '' }}</span>
            </label>
          </div>
        </section>

        <!-- SECTION ADMIN : Gestion des clients -->
        <section v-if="isAdmin" class="settings-section admin-section">
          <h3 class="section-title">👑 Administration — Clients</h3>
          <p class="section-hint">Modifiez la configuration de n'importe quel utilisateur</p>

          <div v-if="loadingUsers" class="settings-loader">Chargement des clients…</div>
          <div v-else class="users-list">
            <div
              v-for="u in users"
              :key="u.id"
              class="user-row"
              :class="{ selected: selectedUser?.id === u.id }"
              @click="selectUser(u)"
            >
              <div class="user-avatar-sm">{{ initials(u) }}</div>
              <div class="user-info-row">
                <strong>{{ u.prenom }} {{ u.nom }}</strong>
                <span>{{ u.email }}</span>
              </div>
              <span v-if="u.roles.includes('ROLE_ADMIN')" class="badge-admin">Admin</span>
              <span class="user-chevron">›</span>
            </div>
          </div>

          <!-- Édition inline de la config du client sélectionné -->
          <div v-if="selectedUser" class="user-config-editor">
            <h4>Config de {{ selectedUser.prenom }} {{ selectedUser.nom }}</h4>
            <div class="form-group">
              <label>Nom de l'app</label>
              <input v-model="selectedUser.config.appName" type="text" maxlength="100" />
            </div>
            <div class="form-group">
              <label>Sous-titre</label>
              <input v-model="selectedUser.config.appSubtitle" type="text" maxlength="200" />
            </div>
            <div class="colors-grid">
              <div class="form-group">
                <label>Couleur primaire</label>
                <div class="color-input-row">
                  <input type="color" v-model="selectedUser.config.primaryColor" />
                  <input type="text" v-model="selectedUser.config.primaryColor" maxlength="7" class="color-hex" />
                </div>
              </div>
              <div class="form-group">
                <label>Couleur secondaire</label>
                <div class="color-input-row">
                  <input type="color" v-model="selectedUser.config.secondaryColor" />
                  <input type="text" v-model="selectedUser.config.secondaryColor" maxlength="7" class="color-hex" />
                </div>
              </div>
            </div>
            <div class="modules-grid">
              <label
                v-for="mod in availableModules"
                :key="mod.key"
                class="module-toggle"
                :class="{ active: selectedUser.config.modules.includes(mod.key) }"
              >
                <input type="checkbox" :value="mod.key" v-model="selectedUser.config.modules" hidden />
                <span class="module-icon">{{ mod.icon }}</span>
                <span class="module-label">{{ mod.label }}</span>
                <span class="module-check">{{ selectedUser.config.modules.includes(mod.key) ? '✓' : '' }}</span>
              </label>
            </div>
            <button class="btn btn-primary" @click="saveUserConfig" :disabled="savingUser">
              {{ savingUser ? 'Enregistrement…' : '💾 Sauvegarder pour ce client' }}
            </button>
          </div>
        </section>

        <!-- Barre d'actions -->
        <div class="settings-actions">
          <button class="btn btn-ghost" @click="resetToDefaults" :disabled="saving">
            🔄 Réinitialiser
          </button>
          <div class="actions-right">
            <span v-if="saveMessage" class="save-feedback" :class="saveStatus">{{ saveMessage }}</span>
            <button class="btn btn-primary" @click="save" :disabled="saving">
              {{ saving ? 'Enregistrement…' : '💾 Sauvegarder' }}
            </button>
          </div>
        </div>

      </template>
    </div>
  </div>
</template>

<script>
import { ALL_MODULES } from '../modules/index.js'

export default {
  name: 'Settings',
  emits: ['config-updated'],

  data() {
    return {
      loading: true,
      saving: false,
      saveMessage: '',
      saveStatus: 'success',
      isAdmin: false,

      form: {
        appName:        'Business Manager',
        appSubtitle:    'Gestion de votre activité',
        primaryColor:   '#667eea',
        secondaryColor: '#764ba2',
        modules:        [],
        logoPath:       null,
      },

      availableModules: ALL_MODULES,

      // Admin
      users:        [],
      loadingUsers: false,
      selectedUser: null,
      savingUser:   false,
    }
  },

  async mounted() {
    await this.loadCurrentConfig()
    await this.loadCurrentUser()
  },

  methods: {
    async loadCurrentUser() {
      try {
        const res = await fetch('/api/auth/user')
        if (res.ok) {
          const data = await res.json()
          this.isAdmin = data.user?.roles?.includes('ROLE_ADMIN') ?? false
          if (this.isAdmin) await this.loadUsers()
        }
      } catch (e) { console.warn(e) }
    },

    async loadCurrentConfig() {
      try {
        const res = await fetch('/api/config')
        if (res.ok) {
          const config = await res.json()
          this.form = { ...this.form, ...config }
        }
      } finally {
        this.loading = false
      }
    },

    async loadUsers() {
      this.loadingUsers = true
      try {
        const res = await fetch('/api/config/users')
        if (res.ok) this.users = await res.json()
      } finally {
        this.loadingUsers = false
      }
    },

    previewTheme() {
      const root = document.documentElement
      root.style.setProperty('--primary', this.form.primaryColor)
      root.style.setProperty('--secondary', this.form.secondaryColor)
    },

    async save() {
      this.saving = true
      this.saveMessage = ''
      try {
        const res = await fetch('/api/config', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form),
        })
        const data = await res.json()
        if (data.success) {
          this.showFeedback('✅ Sauvegardé !', 'success')
          this.$emit('config-updated', data.config)
        } else {
          this.showFeedback('❌ Erreur', 'error')
        }
      } catch (e) {
        this.showFeedback('❌ Erreur réseau', 'error')
      } finally {
        this.saving = false
      }
    },

    async resetToDefaults() {
      if (!confirm('Remettre tous les paramètres aux valeurs par défaut ?')) return
      try {
        const res = await fetch('/api/config/reset', { method: 'DELETE' })
        const data = await res.json()
        if (data.success) {
          this.form = { ...this.form, ...data.config }
          this.previewTheme()
          this.$emit('config-updated', data.config)
          this.showFeedback('✅ Réinitialisé', 'success')
        }
      } catch (e) { this.showFeedback('❌ Erreur', 'error') }
    },

    async onLogoSelect(event) {
      const file = event.target.files[0]
      if (!file) return
      const formData = new FormData()
      formData.append('logo', file)
      try {
        const res = await fetch('/api/config/logo', { method: 'POST', body: formData })
        const data = await res.json()
        if (data.success) {
          this.form.logoPath = data.logoPath
          this.$emit('config-updated', { ...this.form })
          this.showFeedback('✅ Logo mis à jour', 'success')
        } else {
          this.showFeedback('❌ ' + (data.error || 'Erreur upload'), 'error')
        }
      } catch (e) { this.showFeedback('❌ Erreur réseau', 'error') }
    },

    async deleteLogo() {
      if (!confirm('Supprimer le logo ?')) return
      try {
        await fetch('/api/config/logo', { method: 'DELETE' })
        this.form.logoPath = null
        this.$emit('config-updated', { ...this.form })
        this.showFeedback('✅ Logo supprimé', 'success')
      } catch (e) { this.showFeedback('❌ Erreur', 'error') }
    },

    selectUser(user) {
      this.selectedUser = this.selectedUser?.id === user.id ? null : JSON.parse(JSON.stringify(user))
    },

    async saveUserConfig() {
      if (!this.selectedUser) return
      this.savingUser = true
      try {
        const res = await fetch(`/api/config/users/${this.selectedUser.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.selectedUser.config),
        })
        const data = await res.json()
        if (data.success) {
          // Mettre à jour la liste locale
          const idx = this.users.findIndex(u => u.id === this.selectedUser.id)
          if (idx !== -1) this.users[idx].config = data.config
          this.showFeedback('✅ Config client sauvegardée', 'success')
        }
      } catch (e) { this.showFeedback('❌ Erreur', 'error') }
      finally { this.savingUser = false }
    },

    showFeedback(msg, status) {
      this.saveMessage = msg
      this.saveStatus  = status
      setTimeout(() => { this.saveMessage = '' }, 3000)
    },

    initials(user) {
      return ((user.prenom?.[0] || '') + (user.nom?.[0] || '')).toUpperCase()
    },
  },
}
</script>

<style scoped>
.settings-view {
  padding: var(--space-xl);
  max-width: 860px;
  margin: 0 auto;
}

.settings-header { margin-bottom: var(--space-xl); }
.settings-header h2 { font-size: 1.75rem; font-weight: 700; color: var(--text-primary); margin: 0 0 var(--space-xs); }
.settings-subtitle { color: var(--text-secondary); margin: 0; }

.settings-loader { padding: var(--space-xl); text-align: center; color: var(--text-secondary); }

/* Sections */
.settings-section {
  background: var(--bg-primary);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  margin-bottom: var(--space-lg);
}
.section-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 var(--space-lg); }
.section-hint  { font-size: 0.85rem; color: var(--text-secondary); margin: calc(-1 * var(--space-md)) 0 var(--space-lg); }

/* Formulaire */
.form-group { margin-bottom: var(--space-md); }
.form-group label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-bottom: var(--space-xs); }
.form-group input[type="text"] {
  width: 100%; padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--gray-300); border-radius: var(--radius-md);
  font-size: 0.95rem; font-family: var(--font-sans); color: var(--text-primary);
  transition: border-color var(--transition-base);
}
.form-group input[type="text"]:focus { outline: none; border-color: var(--primary); }

/* Logo */
.logo-area { display: flex; align-items: flex-start; gap: var(--space-xl); flex-wrap: wrap; }
.logo-preview {
  width: 120px; height: 80px; border-radius: var(--radius-lg);
  border: 2px dashed var(--gray-300); display: flex; align-items: center; justify-content: center;
  background: var(--bg-secondary); flex-shrink: 0; overflow: hidden;
}
.logo-preview img { max-width: 100%; max-height: 100%; object-fit: contain; }
.logo-placeholder { font-size: 0.8rem; color: var(--text-light); text-align: center; }
.logo-actions { display: flex; flex-direction: column; gap: var(--space-sm); }
.upload-hint { font-size: 0.75rem; color: var(--text-light); margin: 0; }

/* Couleurs */
.colors-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); }
.color-input-row { display: flex; align-items: center; gap: var(--space-sm); }
.color-input-row input[type="color"] { width: 44px; height: 44px; padding: 2px; border: 1px solid var(--gray-300); border-radius: var(--radius-md); cursor: pointer; }
.color-hex { flex: 1; font-family: var(--font-mono) !important; font-size: 0.85rem !important; }

/* Aperçu thème */
.theme-preview { display: flex; gap: var(--space-md); margin-top: var(--space-lg); flex-wrap: wrap; }
.preview-btn-primary, .preview-btn-gradient {
  padding: var(--space-sm) var(--space-lg); border: none; border-radius: var(--radius-lg);
  color: white; font-weight: 600; font-size: 0.85rem; cursor: default;
}

/* Modules */
.modules-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: var(--space-md); }
.module-toggle {
  display: flex; align-items: center; gap: var(--space-sm);
  padding: var(--space-md); border-radius: var(--radius-lg);
  border: 2px solid var(--gray-200); cursor: pointer;
  transition: all var(--transition-base); background: var(--bg-secondary);
}
.module-toggle.active { border-color: var(--primary); background: rgba(102,126,234,0.08); }
.module-icon  { font-size: 1.5rem; }
.module-label { flex: 1; font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
.module-check { font-size: 0.9rem; color: var(--primary); font-weight: 700; width: 16px; }

/* Admin */
.admin-section { border-color: var(--warning); }
.users-list { display: flex; flex-direction: column; gap: var(--space-sm); margin-bottom: var(--space-lg); }
.user-row {
  display: flex; align-items: center; gap: var(--space-md);
  padding: var(--space-md); border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200); cursor: pointer;
  transition: all var(--transition-base); background: var(--bg-secondary);
}
.user-row:hover  { border-color: var(--primary); }
.user-row.selected { border-color: var(--primary); background: rgba(102,126,234,0.05); }
.user-avatar-sm {
  width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white; font-weight: 700; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
}
.user-info-row { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.user-info-row strong { font-size: 0.9rem; color: var(--text-primary); }
.user-info-row span   { font-size: 0.8rem; color: var(--text-secondary); }
.badge-admin { background: var(--warning); color: white; padding: 2px 8px; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; }
.user-chevron { color: var(--text-light); font-size: 1.2rem; }

.user-config-editor {
  border-top: 1px solid var(--gray-200); padding-top: var(--space-lg); margin-top: var(--space-lg);
}
.user-config-editor h4 { margin: 0 0 var(--space-lg); font-size: 1rem; color: var(--text-primary); }

/* Boutons */
.btn {
  padding: var(--space-sm) var(--space-lg); border-radius: var(--radius-lg);
  font-size: 0.9rem; font-weight: 600; cursor: pointer;
  border: none; transition: all var(--transition-base); font-family: var(--font-sans);
}
.btn:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-primary  { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; }
.btn-primary:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.btn-secondary { background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--gray-300); }
.btn-secondary:hover { background: var(--gray-200); }
.btn-ghost  { background: transparent; color: var(--text-secondary); border: 1px solid var(--gray-300); }
.btn-ghost:hover { background: var(--bg-tertiary); }
.btn-danger { background: rgba(239,68,68,0.1); color: var(--error); border: 1px solid var(--error); }
.btn-danger:hover { background: var(--error); color: white; }
.btn-upload { display: inline-flex; align-items: center; gap: var(--space-sm); cursor: pointer; }

/* Actions footer */
.settings-actions {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-lg); background: var(--bg-primary);
  border: 1px solid var(--gray-200); border-radius: var(--radius-xl);
  position: sticky; bottom: var(--space-md);
  box-shadow: var(--shadow-lg);
}
.actions-right { display: flex; align-items: center; gap: var(--space-md); }
.save-feedback { font-size: 0.9rem; font-weight: 600; }
.save-feedback.success { color: var(--success); }
.save-feedback.error   { color: var(--error); }

@media (max-width: 767px) {
  .settings-view { padding: var(--space-md); }
  .colors-grid   { grid-template-columns: 1fr; }
  .settings-actions { flex-direction: column; gap: var(--space-md); }
  .actions-right { width: 100%; justify-content: flex-end; }
}
</style>
