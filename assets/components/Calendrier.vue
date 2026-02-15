<template>
  <div class="calendrier">
    <!-- Header -->
    <div class="calendrier-header">
      <div class="header-title">
        <h2>📅 Calendrier</h2>
        <p class="subtitle">Visualise tes échéances et planifie ton projet</p>
      </div>
    </div>

    <!-- Contrôles de navigation -->
    <Card class="calendar-controls">
      <div class="controls-row">
        <Button @click="previousMonth" variant="ghost">
          ← Mois précédent
        </Button>
        
        <h3 class="current-month">{{ currentMonthYear }}</h3>
        
        <Button @click="nextMonth" variant="ghost">
          Mois suivant →
        </Button>
      </div>
      
      <div class="controls-filters">
        <Button 
          @click="goToToday" 
          variant="primary" 
          size="sm"
        >
          📍 Aujourd'hui
        </Button>
        
        <div class="legend">
          <div class="legend-item">
            <span class="legend-dot urgent"></span>
            <span>Urgent</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot normal"></span>
            <span>Normal</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot low"></span>
            <span>Basse</span>
          </div>
        </div>
      </div>
    </Card>

    <!-- Calendrier -->
    <Card class="calendar-grid-container">
      <!-- En-tête des jours -->
      <div class="calendar-header-days">
        <div class="day-name" v-for="day in daysOfWeek" :key="day">
          {{ day }}
        </div>
      </div>

      <!-- Grille du calendrier -->
      <div class="calendar-grid">
        <div 
          v-for="(day, index) in calendarDays" 
          :key="index"
          :class="getDayClasses(day)"
          @click="selectDay(day)"
        >
          <div class="day-number">{{ day.number }}</div>
          
          <div v-if="day.etapes.length > 0" class="day-etapes">
            <div 
              v-for="etape in day.etapes.slice(0, 3)" 
              :key="etape.id"
              :class="['etape-pill', getPriorityClass(etape.priority)]"
              @click.stop="openEtapeDetails(etape)"
            >
              <span class="etape-title">{{ truncate(etape.titre, 20) }}</span>
            </div>
            
            <div v-if="day.etapes.length > 3" class="more-etapes">
              +{{ day.etapes.length - 3 }} autre(s)
            </div>
          </div>
        </div>
      </div>
    </Card>

    <!-- Liste des étapes du jour sélectionné -->
    <Card v-if="selectedDay && selectedDay.etapes.length > 0" class="selected-day-details">
      <template #header>
        <h3 class="chart-title">
          📋 Étapes du {{ formatSelectedDate }}
        </h3>
      </template>
      
      <div class="etapes-list">
        <div 
          v-for="etape in selectedDay.etapes" 
          :key="etape.id"
          class="etape-item"
          @click="goToKanban"
        >
          <div class="etape-header">
            <h4>{{ etape.titre }}</h4>
            <Badge :variant="getPriorityVariant(etape.priority)">
              {{ getPriorityLabel(etape.priority) }}
            </Badge>
          </div>
          
          <p v-if="etape.description" class="etape-description">
            {{ etape.description }}
          </p>
          
          <div class="etape-meta">
            <Badge :variant="getStatusVariant(etape.statut)" size="sm">
              {{ getStatusLabel(etape.statut) }}
            </Badge>
            <Badge v-if="etape.category" variant="gray" size="sm">
              {{ etape.category }}
            </Badge>
          </div>
        </div>
      </div>
    </Card>

    <!-- Stats mensuelles -->
    <div class="monthly-stats">
      <Card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon">📊</div>
          <div class="stat-details">
            <span class="stat-value">{{ monthStats.total }}</span>
            <span class="stat-label">Échéances ce mois</span>
          </div>
        </div>
      </Card>

      <Card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon">⏰</div>
          <div class="stat-details">
            <span class="stat-value">{{ monthStats.thisWeek }}</span>
            <span class="stat-label">Cette semaine</span>
          </div>
        </div>
      </Card>

      <Card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon">🔴</div>
          <div class="stat-details">
            <span class="stat-value">{{ monthStats.urgent }}</span>
            <span class="stat-label">Urgentes</span>
          </div>
        </div>
      </Card>

      <Card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon">⚠️</div>
          <div class="stat-details">
            <span class="stat-value">{{ monthStats.overdue }}</span>
            <span class="stat-label">En retard</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendrier',
  data() {
    return {
      etapes: [],
      currentDate: new Date(),
      selectedDay: null,
      daysOfWeek: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
    }
  },
  computed: {
    currentMonthYear() {
      return this.currentDate.toLocaleDateString('fr-FR', { 
        month: 'long', 
        year: 'numeric' 
      })
    },
    formatSelectedDate() {
      if (!this.selectedDay) return ''
      return this.selectedDay.date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    },
    calendarDays() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      
      // Premier jour du mois
      const firstDay = new Date(year, month, 1)
      // Dernier jour du mois
      const lastDay = new Date(year, month + 1, 0)
      
      // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
      let firstDayOfWeek = firstDay.getDay()
      // Convertir dimanche (0) en 7 pour que lundi soit 1
      firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek
      
      const days = []
      
      // Jours du mois précédent
      const prevMonthLastDay = new Date(year, month, 0).getDate()
      for (let i = firstDayOfWeek - 1; i > 0; i--) {
        const date = new Date(year, month - 1, prevMonthLastDay - i + 1)
        days.push({
          number: prevMonthLastDay - i + 1,
          date: date,
          isCurrentMonth: false,
          isToday: false,
          etapes: this.getEtapesForDate(date)
        })
      }
      
      // Jours du mois actuel
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day)
        const today = new Date()
        const isToday = date.toDateString() === today.toDateString()
        
        days.push({
          number: day,
          date: date,
          isCurrentMonth: true,
          isToday: isToday,
          etapes: this.getEtapesForDate(date)
        })
      }
      
      // Jours du mois suivant pour compléter la grille
      const remainingDays = 42 - days.length // 6 semaines max
      for (let day = 1; day <= remainingDays; day++) {
        const date = new Date(year, month + 1, day)
        days.push({
          number: day,
          date: date,
          isCurrentMonth: false,
          isToday: false,
          etapes: this.getEtapesForDate(date)
        })
      }
      
      return days
    },
    monthStats() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      const monthEtapes = this.etapes.filter(e => {
        if (!e.dateLimite) return false
        const date = new Date(e.dateLimite)
        return date.getFullYear() === year && date.getMonth() === month
      })
      
      // Cette semaine
      const startOfWeek = new Date(today)
      startOfWeek.setDate(today.getDate() - today.getDay() + 1)
      const endOfWeek = new Date(startOfWeek)
      endOfWeek.setDate(startOfWeek.getDate() + 6)
      
      const thisWeek = monthEtapes.filter(e => {
        const date = new Date(e.dateLimite)
        return date >= startOfWeek && date <= endOfWeek
      }).length
      
      return {
        total: monthEtapes.length,
        thisWeek: thisWeek,
        urgent: monthEtapes.filter(e => e.priority === 'urgent').length,
        overdue: monthEtapes.filter(e => {
          const date = new Date(e.dateLimite)
          return date < today && e.statut !== 'done'
        }).length
      }
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
    getEtapesForDate(date) {
      return this.etapes.filter(etape => {
        if (!etape.dateLimite) return false
        const etapeDate = new Date(etape.dateLimite)
        return etapeDate.toDateString() === date.toDateString()
      })
    },
    getDayClasses(day) {
      return [
        'calendar-day',
        { 'other-month': !day.isCurrentMonth },
        { 'today': day.isToday },
        { 'has-etapes': day.etapes.length > 0 },
        { 'selected': this.selectedDay && this.selectedDay.date.toDateString() === day.date.toDateString() }
      ]
    },
    getPriorityClass(priority) {
      const classes = {
        urgent: 'priority-urgent',
        normal: 'priority-normal',
        low: 'priority-low'
      }
      return classes[priority] || 'priority-none'
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
      return labels[priority] || 'Non définie'
    },
    getStatusVariant(statut) {
      const variants = {
        todo: 'gray',
        in_progress: 'warning',
        done: 'success'
      }
      return variants[statut] || 'gray'
    },
    getStatusLabel(statut) {
      const labels = {
        todo: '📝 À faire',
        in_progress: '⏳ En cours',
        done: '✅ Terminé'
      }
      return labels[statut] || statut
    },
    previousMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      )
      this.selectedDay = null
    },
    nextMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      )
      this.selectedDay = null
    },
    goToToday() {
      this.currentDate = new Date()
      this.selectedDay = null
    },
    selectDay(day) {
      if (day.etapes.length > 0) {
        this.selectedDay = day
      }
    },
    openEtapeDetails(etape) {
      this.selectedDay = this.calendarDays.find(day => 
        day.etapes.some(e => e.id === etape.id)
      )
    },
    truncate(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },
    goToKanban() {
      this.$emit('navigate', 'kanban')
    }
  }
}
</script>

<style scoped>
.calendrier {
  padding: var(--space-xl);
  max-width: 1600px;
  margin: 0 auto;
  animation: fadeIn var(--transition-slow);
}

/* Header */
.calendrier-header {
  margin-bottom: var(--space-xl);
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

/* Controls */
.calendar-controls {
  margin-bottom: var(--space-xl);
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.current-month {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: capitalize;
}

.controls-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.legend {
  display: flex;
  gap: var(--space-lg);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.legend-dot.urgent { background: var(--error); }
.legend-dot.normal { background: var(--warning); }
.legend-dot.low { background: var(--success); }

/* Calendar Grid */
.calendar-grid-container {
  margin-bottom: var(--space-xl);
}

.calendar-header-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: var(--gray-200);
  border: 1px solid var(--gray-200);
  border-bottom: none;
}

.day-name {
  background: var(--bg-primary);
  padding: var(--space-md);
  text-align: center;
  font-weight: 600;
  color: var(--text-secondary);
  font-size: 0.875rem;
  text-transform: uppercase;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: var(--gray-200);
  border: 1px solid var(--gray-200);
  min-height: 600px;
}

.calendar-day {
  background: var(--bg-primary);
  padding: var(--space-sm);
  min-height: 100px;
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.calendar-day:hover {
  background: var(--bg-secondary);
}

.calendar-day.other-month {
  opacity: 0.3;
}

.calendar-day.today {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
}

.calendar-day.today .day-number {
  background: var(--primary);
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.calendar-day.selected {
  background: var(--primary-light);
  border: 2px solid var(--primary);
}

.day-number {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.day-etapes {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.etape-pill {
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all var(--transition-base);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.etape-pill:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.priority-urgent { background: var(--error); }
.priority-normal { background: var(--warning); }
.priority-low { background: var(--success); }
.priority-none { background: var(--gray-400); }

.etape-title {
  font-size: 0.7rem;
}

.more-etapes {
  font-size: 0.7rem;
  color: var(--text-secondary);
  padding: 2px;
  text-align: center;
  font-weight: 600;
}

/* Selected Day Details */
.selected-day-details {
  margin-bottom: var(--space-xl);
}

.etapes-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.etape-item {
  padding: var(--space-lg);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  border-left: 4px solid var(--primary);
}

.etape-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.etape-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);
}

.etape-header h4 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.etape-description {
  margin: 0 0 var(--space-md) 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.etape-meta {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

/* Monthly Stats */
.monthly-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.stat-card {
  background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
}

.stat-content {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.stat-icon {
  font-size: 3rem;
  line-height: 1;
}

.stat-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .calendar-grid {
    min-height: 400px;
  }
  
  .calendar-day {
    min-height: 60px;
    padding: var(--space-xs);
  }
  
  .day-name {
    font-size: 0.75rem;
    padding: var(--space-sm);
  }
  
  .current-month {
    font-size: 1.25rem;
  }
  
  .controls-row {
    flex-direction: column;
    gap: var(--space-md);
  }
}
</style>