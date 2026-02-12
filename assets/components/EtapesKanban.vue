<template>
  <div class="etapes-kanban">
    <div class="kanban-header">
      <h2>📋 Suivi des Étapes - Création d'Entreprise</h2>
      <div class="progression">
        <span>Progression : {{ progression }}%</span>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progression + '%' }"></div>
        </div>
      </div>
      <button @click="showAddModal = true" class="btn-add">+ Nouvelle Étape</button>
    </div>

    <div class="kanban-board">
      <!-- Colonne À FAIRE -->
      <div class="kanban-column">
        <h3 class="column-title todo">📝 À Faire ({{ etapesByStatut.todo.length }})</h3>
        <div class="column-content">
          <div 
            v-for="etape in etapesByStatut.todo" 
            :key="etape.id"
            class="kanban-card"
            @click="editEtape(etape)"
          >
            <h4>{{ etape.titre }}</h4>
            <p v-if="etape.description" class="description">{{ etape.description }}</p>
            <div class="card-footer">
              <span v-if="etape.dateLimite" class="date">📅 {{ formatDate(etape.dateLimite) }}</span>
              <div class="actions">
                <button @click.stop="changeStatut(etape, 'in_progress')" class="btn-mini">▶️</button>
                <button @click.stop="deleteEtape(etape)" class="btn-mini danger">🗑️</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Colonne EN COURS -->
      <div class="kanban-column">
        <h3 class="column-title in-progress">⏳ En Cours ({{ etapesByStatut.in_progress.length }})</h3>
        <div class="column-content">
          <div 
            v-for="etape in etapesByStatut.in_progress" 
            :key="etape.id"
            class="kanban-card in-progress"
            @click="editEtape(etape)"
          >
            <h4>{{ etape.titre }}</h4>
            <p v-if="etape.description" class="description">{{ etape.description }}</p>
            <div class="card-footer">
              <span v-if="etape.dateDebut" class="date">🚀 {{ formatDate(etape.dateDebut) }}</span>
              <div class="actions">
                <button @click.stop="changeStatut(etape, 'todo')" class="btn-mini">⬅️</button>
                <button @click.stop="changeStatut(etape, 'done')" class="btn-mini success">✅</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Colonne TERMINÉ -->
      <div class="kanban-column">
        <h3 class="column-title done">✅ Terminé ({{ etapesByStatut.done.length }})</h3>
        <div class="column-content">
          <div 
            v-for="etape in etapesByStatut.done" 
            :key="etape.id"
            class="kanban-card done"
            @click="editEtape(etape)"
          >
            <h4>{{ etape.titre }}</h4>
            <p v-if="etape.description" class="description">{{ etape.description }}</p>
            <div class="card-footer">
              <span class="date">🎉 Terminé</span>
              <div class="actions">
                <button @click.stop="changeStatut(etape, 'in_progress')" class="btn-mini">↩️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ajouter/Éditer -->
    <div v-if="showAddModal || editingEtape" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h3>{{ editingEtape ? 'Modifier l\'étape' : 'Nouvelle étape' }}</h3>
        <form @submit.prevent="saveEtape">
          <div class="form-group">
            <label>Titre *</label>
            <input v-model="form.titre" type="text" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="form.description" rows="3"></textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Date de début</label>
              <input v-model="form.dateDebut" type="date">
            </div>
            <div class="form-group">
              <label>Date limite</label>
              <input v-model="form.dateLimite" type="date">
            </div>
          </div>
          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="form.notes" rows="4"></textarea>
          </div>
          <div class="modal-actions">
            <button type="button" @click="closeModal" class="btn-cancel">Annuler</button>
            <button type="submit" class="btn-save">{{ editingEtape ? 'Mettre à jour' : 'Créer' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtapesKanban',
  data() {
    return {
      etapes: [],
      showAddModal: false,
      editingEtape: null,
      form: {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0
      }
    }
  },
  computed: {
    etapesByStatut() {
      return {
        todo: this.etapes.filter(e => e.statut === 'todo'),
        in_progress: this.etapes.filter(e => e.statut === 'in_progress'),
        done: this.etapes.filter(e => e.statut === 'done')
      }
    },
    progression() {
      if (this.etapes.length === 0) return 0
      const done = this.etapes.filter(e => e.statut === 'done').length
      return Math.round((done / this.etapes.length) * 100)
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
        this.loadEtapes()
      } catch (error) {
        console.error('Erreur sauvegarde:', error)
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
        this.loadEtapes()
      } catch (error) {
        console.error('Erreur changement statut:', error)
      }
    },
    async deleteEtape(etape) {
      if (!confirm(`Supprimer l'étape "${etape.titre}" ?`)) return
      
      try {
        await fetch(`/api/etapes/${etape.id}`, { method: 'DELETE' })
        this.loadEtapes()
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
        ordre: etape.ordre
      }
    },
    closeModal() {
      this.showAddModal = false
      this.editingEtape = null
      this.form = {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0
      }
    },
    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('fr-FR')
    }
  }
}
</script>

<style scoped>
.etapes-kanban {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.kanban-header {
  margin-bottom: 2rem;
}

.kanban-header h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.progression {
  margin: 1rem 0;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.btn-add {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-add:hover {
  background: #5568d3;
}

.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.kanban-column {
  background: #f7fafc;
  border-radius: 12px;
  padding: 1rem;
}

.column-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 6px;
}

.column-title.todo {
  background: #fed7d7;
  color: #c53030;
}

.column-title.in-progress {
  background: #feebc8;
  color: #c05621;
}

.column-title.done {
  background: #c6f6d5;
  color: #22543d;
}

.column-content {
  min-height: 300px;
}

.kanban-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.kanban-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.kanban-card h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.description {
  font-size: 0.9rem;
  color: #718096;
  margin: 0.5rem 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #718096;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn-mini {
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}

.btn-mini:hover {
  background: #f7fafc;
}

.btn-mini.success:hover {
  background: #c6f6d5;
}

.btn-mini.danger:hover {
  background: #fed7d7;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
}

.modal-content h3 {
  margin-top: 0;
  color: #2d3748;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #4a5568;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn-cancel {
  padding: 0.75rem 1.5rem;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.btn-save {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.btn-save:hover {
  background: #5568d3;
}
</style>