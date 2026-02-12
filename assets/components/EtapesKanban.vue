<template>
  <div class="etapes-kanban">
    <!-- Header modernisé avec filtres -->
    <div class="kanban-header">
      <div class="header-content">
        <div class="header-title">
          <h2>📋 Suivi des Étapes</h2>
          <p class="subtitle">Création d'Entreprise - Mon Assistant Numérique</p>
        </div>
        
        <div class="header-actions">
          <Button @click="showAddModal = true" size="lg">
            <span class="icon">✨</span> Nouvelle Étape
          </Button>
        </div>
      </div>
      
      <!-- Barre de recherche et filtres -->
      <Card class="filters-card">
        <div class="filters-container">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Rechercher une étape..."
              class="search-input"
            >
            <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search">✕</button>
          </div>
          
          <div class="filters">
            <select v-model="sortBy" class="filter-select">
              <option value="ordre">📊 Ordre</option>
              <option value="date-asc">📅 Date (plus ancienne)</option>
              <option value="date-desc">📅 Date (plus récente)</option>
              <option value="alpha">🔤 Alphabétique</option>
            </select>
            
            <select v-model="filterPriority" class="filter-select">
              <option value="all">Toutes priorités</option>
              <option value="urgent">🔴 Urgent</option>
              <option value="normal">🟡 Normal</option>
              <option value="low">🟢 Basse</option>
            </select>
          </div>
        </div>
        
        <div v-if="searchQuery || filterPriority !== 'all'" class="active-filters">
          <span class="filter-label">Filtres actifs :</span>
          <Badge v-if="searchQuery" variant="info" @click="searchQuery = ''">
            🔍 "{{ searchQuery }}" ✕
          </Badge>
          <Badge v-if="filterPriority !== 'all'" variant="warning" @click="filterPriority = 'all'">
            {{ getPriorityLabel(filterPriority) }} ✕
          </Badge>
        </div>
      </Card>
      
      <!-- Barre de progression modernisée -->
      <Card class="progress-card">
        <div class="progress-header">
          <span class="progress-label">Progression globale</span>
          <Badge :variant="progressVariant" size="lg" pill>{{ progression }}%</Badge>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progression + '%' }">
            <span v-if="progression > 10" class="progress-text">{{ progression }}%</span>
          </div>
        </div>
        <div class="progress-stats">
          <div class="stat">
            <span class="stat-value">{{ filteredEtapesByStatut.done.length }}</span>
            <span class="stat-label">Terminées</span>
          </div>
          <div class="stat">
            <span class="stat-value">{{ filteredEtapesByStatut.in_progress.length }}</span>
            <span class="stat-label">En cours</span>
          </div>
          <div class="stat">
            <span class="stat-value">{{ filteredEtapesByStatut.todo.length }}</span>
            <span class="stat-label">À faire</span>
          </div>
        </div>
      </Card>
    </div>

    <!-- Board Kanban avec Drag & Drop -->
    <div class="kanban-board">
      <!-- Colonne À FAIRE -->
      <div class="kanban-column">
        <div class="column-header todo-header">
          <div class="column-title">
            <span class="column-icon">📝</span>
            <h3>À Faire</h3>
          </div>
          <Badge variant="gray" pill>{{ filteredEtapesByStatut.todo.length }}</Badge>
        </div>
        <div class="column-content">
          <draggable
            v-model="todoList"
            group="etapes"
            item-key="id"
            @change="onDragUpdate('todo')"
            class="draggable-list"
            :animation="200"
          >
            <template #item="{ element: etape }">
              <Card 
                class="kanban-card todo-card"
                hoverable
                @click="editEtape(etape)"
              >
                <div class="card-content">
                  <div class="card-header-row">
                    <h4 class="card-title">{{ etape.titre }}</h4>
                    <Badge 
                      v-if="etape.priority" 
                      :variant="getPriorityVariant(etape.priority)"
                      size="sm"
                    >
                      {{ getPriorityIcon(etape.priority) }}
                    </Badge>
                  </div>
                  <p v-if="etape.description" class="card-description">{{ etape.description }}</p>
                  
                  <div class="card-meta">
                    <Badge v-if="etape.dateLimite" :variant="getDateVariant(etape.dateLimite)" size="sm">
                      📅 {{ formatDate(etape.dateLimite) }}
                    </Badge>
                    <Badge v-if="etape.category" variant="gray" size="sm">
                      {{ etape.category }}
                    </Badge>
                  </div>
                </div>
                
                <template #footer>
                  <div class="card-actions">
                    <Button 
                      @click.stop="changeStatut(etape, 'in_progress')" 
                      variant="ghost" 
                      size="sm"
                    >
                      ▶️ Démarrer
                    </Button>
                    <Button 
                      @click.stop="deleteEtape(etape)" 
                      variant="danger" 
                      size="sm"
                    >
                      🗑️
                    </Button>
                  </div>
                </template>
              </Card>
            </template>
          </draggable>
          
          <div v-if="filteredEtapesByStatut.todo.length === 0" class="empty-state">
            <span class="empty-icon">✅</span>
            <p>{{ searchQuery ? 'Aucun résultat' : 'Aucune étape à faire' }}</p>
          </div>
        </div>
      </div>
<!-- Colonne EN COURS -->
<div class="kanban-column">
  <div class="column-header progress-header">
    <div class="column-title">
      <span class="column-icon">⏳</span>
      <h3>En Cours</h3>
    </div>
    <Badge variant="warning" pill>{{ filteredEtapesByStatut.in_progress.length }}</Badge>
  </div>
  <div class="column-content">
    <draggable
      v-model="inProgressList"
      group="etapes"
      item-key="id"
      @change="onDragUpdate('in_progress')"
      class="draggable-list"
      :animation="200"
    >
      <template #item="{ element: etape }">
        <Card 
          class="kanban-card progress-card"
          hoverable
          @click="editEtape(etape)"
        >
          <div class="card-content">
            <div class="card-status">
              <div class="pulse-dot"></div>
              <span>En cours</span>
            </div>
            <div class="card-header-row">
              <h4 class="card-title">{{ etape.titre }}</h4>
              <Badge 
                v-if="etape.priority" 
                :variant="getPriorityVariant(etape.priority)"
                size="sm"
              >
                {{ getPriorityIcon(etape.priority) }}
              </Badge>
            </div>
            <p v-if="etape.description" class="card-description">{{ etape.description }}</p>
            
            <div class="card-meta">
              <Badge v-if="etape.dateDebut" variant="info" size="sm">
                🚀 {{ formatDate(etape.dateDebut) }}
              </Badge>
              <Badge v-if="etape.category" variant="gray" size="sm">
                {{ etape.category }}
              </Badge>
            </div>
          </div>
          
          <template #footer>
            <div class="card-actions">
              <Button 
                @click.stop="changeStatut(etape, 'todo')" 
                variant="ghost" 
                size="sm"
              >
                ⬅️
              </Button>
              <Button 
                @click.stop="changeStatut(etape, 'done')" 
                variant="success" 
                size="sm"
              >
                ✅ Terminer
              </Button>
            </div>
          </template>
        </Card>
      </template>
    </draggable>
    
    <div v-if="filteredEtapesByStatut.in_progress.length === 0" class="empty-state">
      <span class="empty-icon">💤</span>
      <p>{{ searchQuery ? 'Aucun résultat' : 'Aucune étape en cours' }}</p>
    </div>
  </div>
</div>

      <!-- Colonne TERMINÉ -->
      <div class="kanban-column">
        <div class="column-header done-header">
          <div class="column-title">
            <span class="column-icon">✅</span>
            <h3>Terminé</h3>
          </div>
          <Badge variant="success" pill>{{ filteredEtapesByStatut.done.length }}</Badge>
        </div>
        <div class="column-content">
          <draggable
            v-model="doneList"
            group="etapes"
            item-key="id"
            @change="onDragUpdate('done')"
            class="draggable-list"
            :animation="200"
          >
            <template #item="{ element: etape }">
              <Card 
                class="kanban-card done-card"
                hoverable
                @click="editEtape(etape)"
              >
                <div class="card-content">
                  <div class="card-status success">
                    <span class="success-icon">🎉</span>
                    <span>Terminé</span>
                  </div>
                  <h4 class="card-title">{{ etape.titre }}</h4>
                  <p v-if="etape.description" class="card-description">{{ etape.description }}</p>
                  
                  <div class="card-meta">
                    <Badge v-if="etape.category" variant="gray" size="sm">
                      {{ etape.category }}
                    </Badge>
                  </div>
                </div>
                
                <template #footer>
                  <div class="card-actions">
                    <Button 
                      @click.stop="changeStatut(etape, 'in_progress')" 
                      variant="ghost" 
                      size="sm"
                    >
                      ↩️ Réouvrir
                    </Button>
                  </div>
                </template>
              </Card>
            </template>
          </draggable>
          
          <div v-if="filteredEtapesByStatut.done.length === 0" class="empty-state">
            <span class="empty-icon">🎯</span>
            <p>{{ searchQuery ? 'Aucun résultat' : 'Aucune étape terminée' }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal avec champs de priorité et catégorie -->
    <Modal 
      :show="showAddModal || !!editingEtape" 
      :title="editingEtape ? 'Modifier l\'étape' : 'Nouvelle étape'"
      @close="closeModal"
      size="lg"
    >
      <form @submit.prevent="saveEtape" class="etape-form">
        <div class="form-group">
          <label class="form-label">Titre <span class="required">*</span></label>
          <input 
            v-model="form.titre" 
            type="text" 
            class="form-input"
            placeholder="Ex: Étude de marché"
            required
          >
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Priorité</label>
            <select v-model="form.priority" class="form-input">
              <option value="">Aucune</option>
              <option value="urgent">🔴 Urgent</option>
              <option value="normal">🟡 Normal</option>
              <option value="low">🟢 Basse</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">Catégorie</label>
            <input 
              v-model="form.category" 
              type="text" 
              class="form-input"
              placeholder="Ex: Administratif, Formation..."
            >
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea 
            v-model="form.description" 
            rows="3"
            class="form-input"
            placeholder="Décrivez cette étape..."
          ></textarea>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">📅 Date de début</label>
            <input v-model="form.dateDebut" type="date" class="form-input">
          </div>
          <div class="form-group">
            <label class="form-label">⏰ Date limite</label>
            <input v-model="form.dateLimite" type="date" class="form-input">
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">📝 Notes</label>
          <textarea 
            v-model="form.notes" 
            rows="4"
            class="form-input"
            placeholder="Ajoutez des notes, liens, ou informations supplémentaires..."
          ></textarea>
        </div>
      </form>
      
      <template #footer>
        <Button @click="closeModal" variant="secondary">
          Annuler
        </Button>
        <Button @click="saveEtape" :loading="saving">
          {{ editingEtape ? '💾 Mettre à jour' : '✨ Créer' }}
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'EtapesKanban',
  components: {
    draggable
  },
  data() {
    return {
      etapes: [],
      showAddModal: false,
      editingEtape: null,
      saving: false,
      searchQuery: '',
      sortBy: 'ordre',
      filterPriority: 'all',
      form: {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0,
        priority: '',
        category: ''
      },
      // Listes locales pour le drag & drop
      todoList: [],
      inProgressList: [],
      doneList: []
    }
  },
  computed: {
    filteredEtapes() {
      let filtered = [...this.etapes]
      
      // Recherche
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(e => 
          e.titre.toLowerCase().includes(query) ||
          (e.description && e.description.toLowerCase().includes(query)) ||
          (e.category && e.category.toLowerCase().includes(query))
        )
      }
      
      // Filtre priorité
      if (this.filterPriority !== 'all') {
        filtered = filtered.filter(e => e.priority === this.filterPriority)
      }
      
      // Tri
      if (this.sortBy === 'date-asc') {
        filtered.sort((a, b) => {
          const dateA = a.dateLimite ? new Date(a.dateLimite) : new Date('9999-12-31')
          const dateB = b.dateLimite ? new Date(b.dateLimite) : new Date('9999-12-31')
          return dateA - dateB
        })
      } else if (this.sortBy === 'date-desc') {
        filtered.sort((a, b) => {
          const dateA = a.dateLimite ? new Date(a.dateLimite) : new Date('1900-01-01')
          const dateB = b.dateLimite ? new Date(b.dateLimite) : new Date('1900-01-01')
          return dateB - dateA
        })
      } else if (this.sortBy === 'alpha') {
        filtered.sort((a, b) => a.titre.localeCompare(b.titre))
      } else {
        filtered.sort((a, b) => a.ordre - b.ordre)
      }
      
      return filtered
    },
    filteredEtapesByStatut() {
      return {
        todo: this.filteredEtapes.filter(e => e.statut === 'todo'),
        in_progress: this.filteredEtapes.filter(e => e.statut === 'in_progress'),
        done: this.filteredEtapes.filter(e => e.statut === 'done')
      }
    },
    progression() {
      if (this.etapes.length === 0) return 0
      const done = this.etapes.filter(e => e.statut === 'done').length
      return Math.round((done / this.etapes.length) * 100)
    },
    progressVariant() {
      if (this.progression === 100) return 'success'
      if (this.progression >= 50) return 'warning'
      return 'info'
    }
  },
  watch: {
    // Synchronise les listes locales quand les données changent
    filteredEtapesByStatut: {
      handler(newVal) {
        this.todoList = [...newVal.todo]
        this.inProgressList = [...newVal.in_progress]
        this.doneList = [...newVal.done]
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.loadEtapes()
  },
  methods: {
    async loadEtapes() {
      try {
        const response = await fetch('/api/etapes')
        this.etapes = await response.json()
      } catch (error) {
        console.error('Erreur chargement étapes:', error)
      }
    },
    async saveEtape() {
      this.saving = true
      try {
        const url = this.editingEtape 
          ? `/api/etapes/${this.editingEtape.id}`
          : '/api/etapes'
        
        const method = this.editingEtape ? 'PUT' : 'POST'
        
        await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        })
        
        this.closeModal()
        await this.loadEtapes()
      } catch (error) {
        console.error('Erreur sauvegarde:', error)
      } finally {
        this.saving = false
      }
    },
    async changeStatut(etape, newStatut) {
      try {
        await fetch(`/api/etapes/${etape.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            ...etape, 
            statut: newStatut,
            dateDebut: newStatut === 'in_progress' && !etape.dateDebut 
              ? new Date().toISOString().split('T')[0] 
              : etape.dateDebut
          })
        })
        await this.loadEtapes()
      } catch (error) {
        console.error('Erreur changement statut:', error)
      }
    },
    async deleteEtape(etape) {
      if (!confirm(`Supprimer l'étape "${etape.titre}" ?`)) return
      
      try {
        await fetch(`/api/etapes/${etape.id}`, { method: 'DELETE' })
        await this.loadEtapes()
      } catch (error) {
        console.error('Erreur suppression:', error)
      }
    },
    editEtape(etape) {
      this.editingEtape = etape
      this.form = {
        titre: etape.titre,
        description: etape.description || '',
        dateDebut: etape.dateDebut || '',
        dateLimite: etape.dateLimite || '',
        notes: etape.notes || '',
        statut: etape.statut,
        ordre: etape.ordre,
        priority: etape.priority || '',
        category: etape.category || ''
      }
    },
    closeModal() {
      this.showAddModal = false
      this.editingEtape = null
      this.saving = false
      this.form = {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0,
        priority: '',
        category: ''
      }
    },
    // Nouvelle méthode pour gérer le drag
    onDragUpdate(statut) {
      // Cette fonction est appelée quand une liste change
      return (event) => {
        if (event.added) {
          const etape = event.added.element
          if (etape.statut !== statut) {
            this.updateEtapeStatut(etape, statut)
          }
        }
      }
    },
    async updateEtapeStatut(etape, newStatut) {
      try {
        await fetch(`/api/etapes/${etape.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            ...etape, 
            statut: newStatut,
            dateDebut: newStatut === 'in_progress' && !etape.dateDebut 
              ? new Date().toISOString().split('T')[0] 
              : etape.dateDebut
          })
        })
        
        // Met à jour localement
        const index = this.etapes.findIndex(e => e.id === etape.id)
        if (index !== -1) {
          this.etapes[index].statut = newStatut
        }
      } catch (error) {
        console.error('Erreur changement statut:', error)
        // En cas d'erreur, recharge
        await this.loadEtapes()
      }
    },
    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('fr-FR')
    },
    getPriorityIcon(priority) {
      const icons = {
        urgent: '🔴',
        normal: '🟡',
        low: '🟢'
      }
      return icons[priority] || ''
    },
    getPriorityVariant(priority) {
      const variants = {
        urgent: 'danger',
        normal: 'warning',
        low: 'success'
      }
      return variants[priority] || 'gray'
    },
    getPriorityLabel(priority) {
      const labels = {
        urgent: '🔴 Urgent',
        normal: '🟡 Normal',
        low: '🟢 Basse'
      }
      return labels[priority] || priority
    },
    getDateVariant(dateLimite) {
      if (!dateLimite) return 'gray'
      const today = new Date()
      const limite = new Date(dateLimite)
      const diffDays = Math.ceil((limite - today) / (1000 * 60 * 60 * 24))
      
      if (diffDays < 0) return 'danger'
      if (diffDays <= 7) return 'warning'
      return 'gray'
    }
  }
}
</script>

<style scoped>
.etapes-kanban {
  padding: var(--space-xl);
  max-width: 1600px;
  margin: 0 auto;
  animation: fadeIn var(--transition-slow);
}

/* Filtres */
.filters-card {
  margin-bottom: var(--space-lg);
}

.filters-container {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 300px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: var(--space-md);
  font-size: 1.25rem;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: var(--space-md) var(--space-md) var(--space-md) 3rem;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-full);
  font-size: 1rem;
  transition: all var(--transition-base);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.clear-search {
  position: absolute;
  right: var(--space-md);
  background: var(--gray-200);
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  transition: all var(--transition-base);
}

.clear-search:hover {
  background: var(--gray-300);
}

.filters {
  display: flex;
  gap: var(--space-md);
}

.filter-select {
  padding: var(--space-md) var(--space-lg);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--bg-primary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-select:hover {
  border-color: var(--primary);
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.active-filters {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  margin-top: var(--space-md);
  padding-top: var(--space-md);
  border-top: 1px solid var(--gray-100);
}

.filter-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.active-filters .badge {
  cursor: pointer;
}

/* Drag & Drop amélioré */
.draggable-list {
  min-height: 100px;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.kanban-card {
  cursor: grab;
  transition: all var(--transition-base);
}

.kanban-card:active {
  cursor: grabbing;
}

.drag-card {
  opacity: 0.9;
  transform: scale(1.05);
  box-shadow: var(--shadow-2xl) !important;
  cursor: grabbing !important;
  z-index: 1000;
}

.ghost-card {
  opacity: 0;
  height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

/* Header */
.kanban-header {
  margin-bottom: var(--space-xl);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-xl);
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.header-title h2 {
  margin: 0 0 var(--space-sm) 0;
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 700;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: var(--space-md);
}

/* Progress Card */
.progress-card {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.progress-label {
  font-size: 1.125rem;
  font-weight: 600;
}

.progress-bar {
  height: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-lg);
  position: relative;
}

.progress-fill {
  height: 100%;
  background: white;
  border-radius: var(--radius-full);
  transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 var(--space-md);
  position: relative;
  overflow: hidden;
}

.progress-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  to { left: 100%; }
}

.progress-text {
  color: var(--primary);
  font-weight: 700;
  font-size: 0.875rem;
}

.progress-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Kanban Board */
.kanban-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-xl);
}

.kanban-column {
  display: flex;
  flex-direction: column;
  min-height: 500px;
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-md);
  box-shadow: var(--shadow-md);
}

.column-title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.column-icon {
  font-size: 1.5rem;
}

.column-title h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
}

.todo-header {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #92400e;
}

.progress-header {
  background: linear-gradient(135deg, #ddd6fe, #c4b5fd);
  color: #5b21b6;
}

.done-header {
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  color: #065f46;
}

.column-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Kanban Cards */
.kanban-card {
  border-left: 4px solid transparent;
}

.todo-card {
  border-left-color: #f59e0b;
}

.progress-card {
  border-left-color: #8b5cf6;
}

.done-card {
  border-left-color: #10b981;
  opacity: 0.9;
}

.done-card:hover {
  opacity: 1;
}

.card-content {
  padding: var(--space-lg);
}

.card-status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-md);
  background: var(--gray-100);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
}

.card-status.success {
  background: #d1fae5;
  color: #065f46;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--warning);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.success-icon {
  font-size: 1rem;
}

.card-title {
  margin: 0 0 var(--space-sm) 0;
  color: var(--text-primary);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
}

.card-description {
  margin: 0 0 var(--space-md) 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.card-actions {
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  background: var(--bg-secondary);
  border-top: 1px solid var(--gray-100);
  flex-wrap: wrap;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--space-2xl);
  color: var(--text-light);
}

.empty-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: var(--space-md);
  opacity: 0.5;
}

.empty-state p {
  margin: 0;
  font-size: 0.875rem;
}

/* Form */
.etape-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
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

.required {
  color: var(--error);
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

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.icon {
  font-size: 1.25rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .kanban-board {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .filters-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-box {
    min-width: 100%;
  }
  
  .filters {
    width: 100%;
  }
  
  .filter-select {
    flex: 1;
  }
}
</style>