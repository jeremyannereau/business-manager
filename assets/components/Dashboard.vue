<template>
  <div class="dashboard">
    <!-- Header -->
    <div class="dashboard-header">
      <div class="header-title">
        <h2>📊 Tableau de Bord</h2>
        <p class="subtitle">Vue d'ensemble de votre projet entrepreneurial</p>
      </div>
      <div class="header-date">
        <Badge variant="primary" size="lg">{{ currentDate }}</Badge>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="kpi-grid">
      <Card class="kpi-card total-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">📋</div>
          <div class="kpi-details">
            <span class="kpi-label">Total Étapes</span>
            <span class="kpi-value">{{ stats.total }}</span>
          </div>
        </div>
      </Card>

      <Card class="kpi-card progress-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">⏳</div>
          <div class="kpi-details">
            <span class="kpi-label">En Cours</span>
            <span class="kpi-value">{{ stats.inProgress }}</span>
          </div>
        </div>
      </Card>

      <Card class="kpi-card done-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">✅</div>
          <div class="kpi-details">
            <span class="kpi-label">Terminées</span>
            <span class="kpi-value">{{ stats.done }}</span>
          </div>
        </div>
      </Card>

      <Card class="kpi-card completion-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">🎯</div>
          <div class="kpi-details">
            <span class="kpi-label">Progression</span>
            <span class="kpi-value">{{ stats.completionRate }}%</span>
          </div>
        </div>
        <div class="kpi-progress-bar">
          <div class="kpi-progress-fill" :style="{ width: stats.completionRate + '%' }"></div>
        </div>
      </Card>
    </div>

    <!-- Charts Grid -->
    <div class="charts-grid">
      <!-- Graphique en anneau - Statuts -->
      <Card class="chart-card">
        <template #header>
          <h3 class="chart-title">📊 Répartition par Statut</h3>
        </template>
        <div class="chart-container">
          <canvas ref="statusChart"></canvas>
        </div>
      </Card>

      <!-- Graphique en barres - Catégories -->
      <Card class="chart-card">
        <template #header>
          <h3 class="chart-title">📁 Étapes par Catégorie</h3>
        </template>
        <div class="chart-container">
          <canvas ref="categoryChart"></canvas>
        </div>
      </Card>

      <!-- Graphique en barres - Priorités -->
      <Card class="chart-card">
        <template #header>
          <h3 class="chart-title">🔥 Répartition par Priorité</h3>
        </template>
        <div class="chart-container">
          <canvas ref="priorityChart"></canvas>
        </div>
      </Card>

      <!-- Timeline - Prochaines échéances -->
      <Card class="chart-card timeline-card">
        <template #header>
          <h3 class="chart-title">📅 Prochaines Échéances (30 jours)</h3>
        </template>
        <div class="timeline-container">
          <div v-if="upcomingEtapes.length === 0" class="empty-timeline">
            <span class="empty-icon">📅</span>
            <p>Aucune échéance dans les 30 prochains jours</p>
          </div>
          <div v-else class="timeline-list">
            <div 
              v-for="etape in upcomingEtapes" 
              :key="etape.id"
              class="timeline-item"
              :class="getTimelineClass(etape.dateLimite)"
            >
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4 class="timeline-title">{{ etape.titre }}</h4>
                <div class="timeline-meta">
                  <Badge :variant="getDateBadgeVariant(etape.dateLimite)" size="sm">
                    {{ formatDateRelative(etape.dateLimite) }}
                  </Badge>
                  <Badge v-if="etape.category" variant="gray" size="sm">
                    {{ etape.category }}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <!-- Étapes urgentes -->
    <Card v-if="urgentEtapes.length > 0" class="urgent-card">
      <template #header>
        <h3 class="chart-title">🔴 Étapes Urgentes</h3>
      </template>
      <div class="urgent-list">
        <div 
          v-for="etape in urgentEtapes" 
          :key="etape.id"
          class="urgent-item"
          @click="goToKanban"
        >
          <div class="urgent-icon">⚠️</div>
          <div class="urgent-content">
            <h4>{{ etape.titre }}</h4>
            <p v-if="etape.description">{{ etape.description }}</p>
            <div class="urgent-meta">
              <Badge variant="danger" size="sm">Urgent</Badge>
              <Badge v-if="etape.dateLimite" variant="warning" size="sm">
                Échéance : {{ formatDate(etape.dateLimite) }}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'Dashboard',
  data() {
    return {
      etapes: [],
      charts: {
        status: null,
        category: null,
        priority: null
      }
    }
  },
  computed: {
    stats() {
      const total = this.etapes.length
      const todo = this.etapes.filter(e => e.statut === 'todo').length
      const inProgress = this.etapes.filter(e => e.statut === 'in_progress').length
      const done = this.etapes.filter(e => e.statut === 'done').length
      const completionRate = total > 0 ? Math.round((done / total) * 100) : 0

      return { total, todo, inProgress, done, completionRate }
    },
    upcomingEtapes() {
      const today = new Date()
      const in30Days = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)
      
      return this.etapes
        .filter(e => e.dateLimite && e.statut !== 'done')
        .filter(e => {
          const deadline = new Date(e.dateLimite)
          return deadline >= today && deadline <= in30Days
        })
        .sort((a, b) => new Date(a.dateLimite) - new Date(b.dateLimite))
        .slice(0, 5)
    },
    urgentEtapes() {
      return this.etapes
        .filter(e => e.priority === 'urgent' && e.statut !== 'done')
        .slice(0, 3)
    },
    currentDate() {
      return new Date().toLocaleDateString('fr-FR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
  },
  mounted() {
    this.loadEtapes()
  },
  beforeUnmount() {
    // Détruire les graphiques avant de détruire le composant
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy()
    })
  },
  methods: {
    async loadEtapes() {
      try {
        const response = await fetch('/api/etapes')
        this.etapes = await response.json()
        
        // Attendre le prochain tick pour être sûr que les canvas sont montés
        this.$nextTick(() => {
          this.createCharts()
        })
      } catch (error) {
        console.error('Erreur chargement étapes:', error)
      }
    },
    createCharts() {
      this.createStatusChart()
      this.createCategoryChart()
      this.createPriorityChart()
    },
    createStatusChart() {
      const ctx = this.$refs.statusChart
      if (!ctx) return

      if (this.charts.status) {
        this.charts.status.destroy()
      }

      this.charts.status = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['À Faire', 'En Cours', 'Terminé'],
          datasets: [{
            data: [this.stats.todo, this.stats.inProgress, this.stats.done],
            backgroundColor: [
              'rgba(245, 158, 11, 0.8)',  // Orange
              'rgba(139, 92, 246, 0.8)',   // Violet
              'rgba(16, 185, 129, 0.8)'    // Vert
            ],
            borderColor: [
              'rgba(245, 158, 11, 1)',
              'rgba(139, 92, 246, 1)',
              'rgba(16, 185, 129, 1)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 15,
                font: { size: 12 }
              }
            }
          }
        }
      })
    },
    createCategoryChart() {
      const ctx = this.$refs.categoryChart
      if (!ctx) return

      if (this.charts.category) {
        this.charts.category.destroy()
      }

      // Compter les étapes par catégorie
      const categoryCounts = {}
      this.etapes.forEach(etape => {
        const cat = etape.category || 'Sans catégorie'
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
      })

      const labels = Object.keys(categoryCounts)
      const data = Object.values(categoryCounts)

      this.charts.category = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Nombre d\'étapes',
            data: data,
            backgroundColor: 'rgba(102, 126, 234, 0.8)',
            borderColor: 'rgba(102, 126, 234, 1)',
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1 }
            }
          }
        }
      })
    },
    createPriorityChart() {
      const ctx = this.$refs.priorityChart
      if (!ctx) return

      if (this.charts.priority) {
        this.charts.priority.destroy()
      }

      const urgent = this.etapes.filter(e => e.priority === 'urgent').length
      const normal = this.etapes.filter(e => e.priority === 'normal').length
      const low = this.etapes.filter(e => e.priority === 'low').length
      const none = this.etapes.filter(e => !e.priority).length

      this.charts.priority = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Urgent', 'Normal', 'Basse', 'Non définie'],
          datasets: [{
            label: 'Nombre d\'étapes',
            data: [urgent, normal, low, none],
            backgroundColor: [
              'rgba(239, 68, 68, 0.8)',    // Rouge
              'rgba(245, 158, 11, 0.8)',   // Orange
              'rgba(16, 185, 129, 0.8)',   // Vert
              'rgba(156, 163, 175, 0.8)'   // Gris
            ],
            borderColor: [
              'rgba(239, 68, 68, 1)',
              'rgba(245, 158, 11, 1)',
              'rgba(16, 185, 129, 1)',
              'rgba(156, 163, 175, 1)'
            ],
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1 }
            }
          }
        }
      })
    },
    formatDate(dateString) {
      if (!dateString) return ''
      return new Date(dateString).toLocaleDateString('fr-FR')
    },
    formatDateRelative(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      const today = new Date()
      const diffTime = date - today
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays < 0) return 'En retard'
      if (diffDays === 0) return "Aujourd'hui"
      if (diffDays === 1) return 'Demain'
      if (diffDays <= 7) return `Dans ${diffDays} jours`
      return this.formatDate(dateString)
    },
    getDateBadgeVariant(dateString) {
      if (!dateString) return 'gray'
      const date = new Date(dateString)
      const today = new Date()
      const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24))
      
      if (diffDays < 0) return 'danger'
      if (diffDays <= 3) return 'warning'
      return 'info'
    },
    getTimelineClass(dateString) {
      const variant = this.getDateBadgeVariant(dateString)
      return `timeline-${variant}`
    },
    goToKanban() {
      this.$emit('navigate', 'kanban')
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: var(--space-xl);
  max-width: 1600px;
  margin: 0 auto;
  animation: fadeIn var(--transition-slow);
}

/* Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-xl);
  flex-wrap: wrap;
  gap: var(--space-lg);
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

/* KPI Cards */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.kpi-card {
  background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
  border: none;
}

.kpi-content {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.kpi-icon {
  font-size: 3rem;
  line-height: 1;
}

.kpi-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.kpi-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.kpi-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.total-card .kpi-icon { color: var(--primary); }
.progress-card .kpi-icon { color: var(--warning); }
.done-card .kpi-icon { color: var(--success); }
.completion-card .kpi-icon { color: var(--secondary); }

.kpi-progress-bar {
  margin-top: var(--space-md);
  height: 8px;
  background: var(--gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.kpi-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: var(--radius-full);
  transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

/* Charts Grid */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.chart-card {
  min-height: 350px;
}

.chart-title {
  margin: 0;
  font-size: 1.125rem;
  color: var(--text-primary);
  font-weight: 600;
}

.chart-container {
  padding: var(--space-lg);
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Timeline */
.timeline-card {
  grid-column: 1 / -1;
}

.timeline-container {
  padding: var(--space-lg);
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.timeline-item {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  border-left: 4px solid transparent;
}

.timeline-item:hover {
  background: var(--bg-secondary);
  transform: translateX(4px);
}

.timeline-danger { border-left-color: var(--error); }
.timeline-warning { border-left-color: var(--warning); }
.timeline-info { border-left-color: var(--info); }

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  margin-top: 6px;
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.timeline-title {
  margin: 0 0 var(--space-sm) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.timeline-meta {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.empty-timeline {
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

/* Urgent List */
.urgent-card {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
}

.urgent-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.urgent-item {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: white;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  border-left: 4px solid var(--error);
}

.urgent-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.urgent-icon {
  font-size: 2rem;
  line-height: 1;
}

.urgent-content {
  flex: 1;
}

.urgent-content h4 {
  margin: 0 0 var(--space-xs) 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.urgent-content p {
  margin: 0 0 var(--space-sm) 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.urgent-meta {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
  
  .kpi-grid {
    grid-template-columns: 1fr;
  }
}
</style>