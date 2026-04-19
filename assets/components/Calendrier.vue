<template>
  <div class="calendrier-container">
    <Card class="calendrier-card">
      <!-- Header -->
      <div class="calendrier-header">
        <div class="header-left">
          <h2 class="calendrier-title">📅 Calendrier</h2>
          <div class="month-navigation">
            <button @click="previousMonth" class="nav-button">
              ← Précédent
            </button>
            <h3 class="current-month">{{ currentMonthYear }}</h3>
            <button @click="nextMonth" class="nav-button">
              Suivant →
            </button>
            <button @click="goToToday" class="today-button">
              Aujourd'hui
            </button>
          </div>
        </div>
        <Button @click="openEventModal" size="sm">
          ➕ Nouvel événement
        </Button>
      </div>

      <!-- Calendrier -->
      <div class="calendar-grid">
        <div class="calendar-header-row">
          <div class="day-header">Lun</div>
          <div class="day-header">Mar</div>
          <div class="day-header">Mer</div>
          <div class="day-header">Jeu</div>
          <div class="day-header">Ven</div>
          <div class="day-header">Sam</div>
          <div class="day-header">Dim</div>
        </div>

        <div class="calendar-days">
          <div 
            v-for="day in calendarDays" 
            :key="day.date"
            :class="getDayClasses(day)"
            @click="selectDay(day)"
          >
            <div class="day-number">{{ day.day }}</div>
            
            <!-- Événements du jour -->
            <div class="day-events">
              <div 
                v-for="event in getEventsForDay(day.date)" 
                :key="event.id"
                :class="['event-pill', `event-${event.type}`]"
                @click.stop="viewEvent(event)"
              >
                {{ event.title }}
              </div>
            </div>

            <!-- Indicateur étapes (ancien système) -->
            <div v-if="getEtapesForDate(day.date).length > 0" class="etapes-indicator">
              <span class="etapes-count">{{ getEtapesForDate(day.date).length }} étape(s)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Légende -->
      <div class="calendar-legend">
        <div class="legend-item">
          <span class="legend-color event-rendez-vous"></span>
          <span>Rendez-vous</span>
        </div>
        <div class="legend-item">
          <span class="legend-color event-reunion"></span>
          <span>Réunion</span>
        </div>
        <div class="legend-item">
          <span class="legend-color event-deadline"></span>
          <span>Deadline</span>
        </div>
        <div class="legend-item">
          <span class="legend-color event-personnel"></span>
          <span>Personnel</span>
        </div>
      </div>
    </Card>

    <!-- Modal Nouvel événement -->
    <Modal v-if="showEventModal" @close="closeEventModal">
      <template #header>
        <h3>{{ editingEvent ? '✏️ Modifier l\'événement' : '➕ Nouvel événement' }}</h3>
      </template>

      <form @submit.prevent="saveEvent" class="event-form">
        <div class="form-group">
          <label class="form-label">Titre *</label>
          <input 
            v-model="eventForm.title" 
            type="text" 
            class="form-input"
            placeholder="Titre de l'événement"
            required
          >
        </div>

        <div class="form-group">
          <label class="form-label">Type</label>
          <select v-model="eventForm.type" class="form-input">
            <option value="rendez-vous">Rendez-vous</option>
            <option value="reunion">Réunion</option>
            <option value="deadline">Deadline</option>
            <option value="personnel">Personnel</option>
          </select>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Date de début *</label>
            <input 
              v-model="eventForm.startDate" 
              type="datetime-local" 
              class="form-input"
              required
            >
          </div>

          <div class="form-group">
            <label class="form-label">Date de fin</label>
            <input 
              v-model="eventForm.endDate" 
              type="datetime-local" 
              class="form-input"
            >
          </div>
        </div>

        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="eventForm.allDay">
            <span>Journée entière</span>
          </label>
        </div>

        <div class="form-group">
          <label class="form-label">Lieu</label>
          <input 
            v-model="eventForm.location" 
            type="text" 
            class="form-input"
            placeholder="Lieu de l'événement"
          >
        </div>

        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea 
            v-model="eventForm.description" 
            class="form-textarea"
            rows="3"
            placeholder="Description de l'événement"
          ></textarea>
        </div>

        <div class="modal-actions">
          <Button type="button" @click="closeEventModal" variant="ghost">
            Annuler
          </Button>
          <Button 
            v-if="editingEvent" 
            type="button" 
            @click="deleteEvent" 
            variant="danger"
          >
            🗑️ Supprimer
          </Button>
          <Button type="submit" :loading="saving">
            💾 Enregistrer
          </Button>
        </div>
      </form>
    </Modal>

    <!-- Modal Détails événement -->
    <Modal v-if="showViewModal" @close="closeViewModal">
      <template #header>
        <h3>{{ viewingEvent.title }}</h3>
      </template>

      <div class="event-details">
        <div class="detail-row">
          <strong>Type :</strong>
          <Badge :variant="getEventBadgeVariant(viewingEvent.type)">
            {{ viewingEvent.type }}
          </Badge>
        </div>

        <div class="detail-row">
          <strong>📅 Début :</strong>
          <span>{{ formatEventDate(viewingEvent.startDate) }}</span>
        </div>

        <div v-if="viewingEvent.endDate" class="detail-row">
          <strong>🏁 Fin :</strong>
          <span>{{ formatEventDate(viewingEvent.endDate) }}</span>
        </div>

        <div v-if="viewingEvent.location" class="detail-row">
          <strong>📍 Lieu :</strong>
          <span>{{ viewingEvent.location }}</span>
        </div>

        <div v-if="viewingEvent.description" class="detail-row">
          <strong>📝 Description :</strong>
          <p>{{ viewingEvent.description }}</p>
        </div>
      </div>

      <div class="modal-actions">
        <Button @click="closeViewModal" variant="ghost">
          Fermer
        </Button>
        <Button @click="editEvent(viewingEvent)">
          ✏️ Modifier
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'Calendrier',
  data() {
    return {
      currentDate: new Date(),
      selectedDate: null,
      etapes: [],
      events: [],
      showEventModal: false,
      showViewModal: false,
      editingEvent: null,
      viewingEvent: null,
      saving: false,
      eventForm: {
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        type: 'personnel',
        location: '',
        allDay: false
      }
    }
  },
  computed: {
    currentMonthYear() {
      return this.currentDate.toLocaleDateString('fr-FR', { 
        month: 'long', 
        year: 'numeric' 
      })
    },
    calendarDays() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      
      let startDay = firstDay.getDay()
      startDay = startDay === 0 ? 6 : startDay - 1
      
      const days = []
      
      for (let i = 0; i < startDay; i++) {
        const date = new Date(year, month, -startDay + i + 1)
        days.push({
          day: date.getDate(),
          date: date.toISOString().split('T')[0],
          isCurrentMonth: false,
          isToday: this.isToday(date),
          isSelected: this.isSelected(date)
        })
      }
      
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i)
        days.push({
          day: i,
          date: date.toISOString().split('T')[0],
          isCurrentMonth: true,
          isToday: this.isToday(date),
          isSelected: this.isSelected(date)
        })
      }
      
      const remainingDays = 42 - days.length
      for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(year, month + 1, i)
        days.push({
          day: i,
          date: date.toISOString().split('T')[0],
          isCurrentMonth: false,
          isToday: this.isToday(date),
          isSelected: this.isSelected(date)
        })
      }
      
      return days
    }
  },
  mounted() {
    this.loadEtapes()
    this.loadEvents()
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
    async loadEvents() {
      try {
        const response = await fetch('/api/events')
        this.events = await response.json()
      } catch (error) {
        console.error('Erreur chargement événements:', error)
      }
    },
    getEtapesForDate(date) {
      return this.etapes.filter(e => e.dateLimite === date)
    },
    getEventsForDay(date) {
      return this.events.filter(event => {
        const eventDate = event.startDate.split(' ')[0]
        return eventDate === date
      })
    },
    getDayClasses(day) {
      return {
        'calendar-day': true,
        'other-month': !day.isCurrentMonth,
        'today': day.isToday,
        'selected': day.isSelected,
        'has-events': this.getEventsForDay(day.date).length > 0 || this.getEtapesForDate(day.date).length > 0
      }
    },
    isToday(date) {
      const today = new Date()
      return date.toDateString() === today.toDateString()
    },
    isSelected(date) {
      if (!this.selectedDate) return false
      return date.toDateString() === this.selectedDate.toDateString()
    },
    selectDay(day) {
      this.selectedDate = new Date(day.date)
    },
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1)
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1)
    },
    goToToday() {
      this.currentDate = new Date()
      this.selectedDate = new Date()
    },
    openEventModal() {
      this.editingEvent = null
      this.eventForm = {
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        type: 'personnel',
        location: '',
        allDay: false
      }
      this.showEventModal = true
    },
    closeEventModal() {
      this.showEventModal = false
      this.editingEvent = null
    },
    viewEvent(event) {
      this.viewingEvent = event
      this.showViewModal = true
    },
    closeViewModal() {
      this.showViewModal = false
      this.viewingEvent = null
    },
    editEvent(event) {
      this.closeViewModal()
      this.editingEvent = event
      this.eventForm = {
        title: event.title,
        description: event.description || '',
        startDate: this.formatForInput(event.startDate),
        endDate: event.endDate ? this.formatForInput(event.endDate) : '',
        type: event.type,
        location: event.location || '',
        allDay: event.allDay
      }
      this.showEventModal = true
    },
    async saveEvent() {
      this.saving = true
      
      try {
        const url = this.editingEvent 
          ? `/api/events/${this.editingEvent.id}`
          : '/api/events'
        
        const method = this.editingEvent ? 'PUT' : 'POST'
        
        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.eventForm)
        })
        
        if (!response.ok) throw new Error('Erreur sauvegarde')
        
        await this.loadEvents()
        this.closeEventModal()
      } catch (error) {
        console.error('Erreur sauvegarde événement:', error)
        alert('Erreur lors de la sauvegarde')
      } finally {
        this.saving = false
      }
    },
    async deleteEvent() {
      if (!confirm('Supprimer cet événement ?')) return
      
      try {
        const response = await fetch(`/api/events/${this.editingEvent.id}`, {
          method: 'DELETE'
        })
        
        if (!response.ok) throw new Error('Erreur suppression')
        
        await this.loadEvents()
        this.closeEventModal()
      } catch (error) {
        console.error('Erreur suppression événement:', error)
        alert('Erreur lors de la suppression')
      }
    },
    formatEventDate(dateStr) {
      const date = new Date(dateStr)
      return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    },
    formatForInput(dateStr) {
      const date = new Date(dateStr)
      return date.toISOString().slice(0, 16)
    },
    getEventBadgeVariant(type) {
      const variants = {
        'rendez-vous': 'primary',
        'reunion': 'warning',
        'deadline': 'danger',
        'personnel': 'success'
      }
      return variants[type] || 'gray'
    }
  }
}
</script>

<style scoped>
/* ... Garde tous les styles existants du calendrier ... */

/* Nouveaux styles pour les événements */
.day-events {
  margin-top: var(--space-xs);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.event-pill {
  font-size: 0.7rem;
  padding: 2px 4px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all var(--transition-base);
}

.event-pill:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.event-rendez-vous {
  background: #3b82f6;
  color: white;
}

.event-reunion {
  background: #f59e0b;
  color: white;
}

.event-deadline {
  background: #ef4444;
  color: white;
}

.event-personnel {
  background: #10b981;
  color: white;
}

.calendar-legend {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-md);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  margin-top: var(--space-lg);
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.875rem;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: var(--radius-sm);
}

.event-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.event-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.detail-row {
  display: flex;
  gap: var(--space-sm);
  align-items: flex-start;
}

.detail-row p {
  margin: 0;
  white-space: pre-wrap;
}

.etapes-indicator {
  margin-top: var(--space-xs);
  font-size: 0.7rem;
  color: var(--text-secondary);
}
</style>