<template>
  <div class="finances">
    <!-- Header -->
    <div class="finances-header">
      <div class="header-title">
        <h2>💰 Gestion Financière</h2>
        <p class="subtitle">Pilote ton budget et ta trésorerie</p>
      </div>
      <div class="header-actions">
        <Button @click="showAddTransactionModal = true" size="lg">
          <span class="icon">➕</span> Nouvelle Transaction
        </Button>
      </div>
    </div>

    <!-- KPI Financiers -->
    <div class="financial-kpis">
      <Card class="kpi-card revenue-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">📈</div>
          <div class="kpi-details">
            <span class="kpi-label">Total Revenus</span>
            <span class="kpi-value">{{ formatCurrency(financialStats.totalRevenue) }}</span>
          </div>
        </div>
      </Card>

      <Card class="kpi-card expense-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">📉</div>
          <div class="kpi-details">
            <span class="kpi-label">Total Dépenses</span>
            <span class="kpi-value">{{ formatCurrency(financialStats.totalExpense) }}</span>
          </div>
        </div>
      </Card>

      <Card class="kpi-card balance-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">💵</div>
          <div class="kpi-details">
            <span class="kpi-label">Solde</span>
            <span :class="['kpi-value', balanceClass]">
              {{ formatCurrency(financialStats.balance) }}
            </span>
          </div>
        </div>
      </Card>

      <Card class="kpi-card budget-card" hoverable>
        <div class="kpi-content">
          <div class="kpi-icon">🎯</div>
          <div class="kpi-details">
            <span class="kpi-label">Budget Restant</span>
            <span class="kpi-value">{{ formatCurrency(financialStats.budgetRemaining) }}</span>
          </div>
        </div>
        <div class="kpi-progress-bar">
          <div class="kpi-progress-fill" :style="{ width: budgetUsedPercentage + '%' }"></div>
        </div>
      </Card>
    </div>

    <!-- Graphiques -->
    <div class="charts-section">
    <Card class="chart-card" padding="none">
        <div class="chart-header-custom">
        <h3 class="chart-title">📊 Répartition des Dépenses</h3>
        </div>
        <div class="chart-container">
        <canvas ref="expenseChart"></canvas>
        </div>
    </Card>

    <Card class="chart-card" padding="none">
        <div class="chart-header-custom">
        <h3 class="chart-title">📈 Évolution Mensuelle</h3>
        </div>
        <div class="chart-container">
        <canvas ref="monthlyChart"></canvas>
        </div>
    </Card>
    </div>

    <!-- Filtres et Transactions -->
    <Card class="transactions-section">
      <template #header>
        <div class="transactions-header">
          <h3 class="chart-title">📋 Historique des Transactions</h3>
          <div class="filters">
            <select v-model="filterType" class="filter-select">
              <option value="all">Tous types</option>
              <option value="revenue">Revenus</option>
              <option value="expense">Dépenses</option>
            </select>
            <select v-model="filterCategory" class="filter-select">
              <option value="all">Toutes catégories</option>
              <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
          </div>
        </div>
      </template>

      <div class="transactions-list">
        <div v-if="filteredTransactions.length === 0" class="empty-state">
          <span class="empty-icon">💸</span>
          <p>Aucune transaction pour le moment</p>
          <Button @click="showAddTransactionModal = true" variant="primary">
            Ajouter une transaction
          </Button>
        </div>

        <div 
          v-for="transaction in filteredTransactions" 
          :key="transaction.id"
          :class="['transaction-item', transaction.type]"
        >
          <div class="transaction-icon">
            {{ transaction.type === 'revenue' ? '📈' : '📉' }}
          </div>
          <div class="transaction-content">
            <div class="transaction-header">
              <h4>{{ transaction.description }}</h4>
              <span :class="['transaction-amount', transaction.type]">
                {{ transaction.type === 'revenue' ? '+' : '-' }}{{ formatCurrency(transaction.amount) }}
              </span>
            </div>
            <div class="transaction-meta">
              <Badge variant="gray" size="sm">{{ transaction.category }}</Badge>
              <span class="transaction-date">{{ formatDate(transaction.date) }}</span>
            </div>
          </div>
          <Button 
            @click="deleteTransaction(transaction)" 
            variant="danger" 
            size="sm"
          >
            🗑️
          </Button>
        </div>
      </div>
    </Card>

    <!-- Budget Prévisionnel -->
    <Card class="budget-section">
      <template #header>
        <div class="budget-header">
          <h3 class="chart-title">🎯 Budget Prévisionnel</h3>
          <Button @click="showBudgetModal = true" variant="ghost" size="sm">
            ⚙️ Configurer
          </Button>
        </div>
      </template>

      <div class="budget-categories">
        <div 
          v-for="cat in budgetCategories" 
          :key="cat.name"
          class="budget-category"
        >
          <div class="budget-cat-header">
            <span class="budget-cat-name">{{ cat.name }}</span>
            <span class="budget-cat-amounts">
              <span class="spent">{{ formatCurrency(cat.spent) }}</span>
              <span class="separator">/</span>
              <span class="planned">{{ formatCurrency(cat.planned) }}</span>
            </span>
          </div>
          <div class="budget-progress-bar">
            <div 
              class="budget-progress-fill" 
              :class="getBudgetProgressClass(cat)"
              :style="{ width: getBudgetPercentage(cat) + '%' }"
            ></div>
          </div>
          <span class="budget-percentage">{{ getBudgetPercentage(cat) }}%</span>
        </div>
      </div>
    </Card>

    <!-- Modal Nouvelle Transaction -->
    <Modal 
      :show="showAddTransactionModal" 
      title="Nouvelle Transaction"
      @close="closeTransactionModal"
      size="md"
    >
      <form @submit.prevent="saveTransaction" class="transaction-form">
        <div class="form-group">
          <label class="form-label">Type <span class="required">*</span></label>
          <select v-model="transactionForm.type" class="form-input" required>
            <option value="revenue">📈 Revenu</option>
            <option value="expense">📉 Dépense</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Description <span class="required">*</span></label>
          <input 
            v-model="transactionForm.description" 
            type="text" 
            class="form-input"
            placeholder="Ex: Achat matériel informatique"
            required
          >
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Montant (€) <span class="required">*</span></label>
            <input 
              v-model.number="transactionForm.amount" 
              type="number" 
              step="0.01"
              class="form-input"
              placeholder="0.00"
              required
            >
          </div>

          <div class="form-group">
            <label class="form-label">Date <span class="required">*</span></label>
            <input 
              v-model="transactionForm.date" 
              type="date" 
              class="form-input"
              required
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Catégorie <span class="required">*</span></label>
          <select v-model="transactionForm.category" class="form-input" required>
            <option value="">Sélectionner...</option>
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Notes</label>
          <textarea 
            v-model="transactionForm.notes" 
            rows="3"
            class="form-input"
            placeholder="Informations complémentaires..."
          ></textarea>
        </div>
      </form>

      <template #footer>
        <Button @click="closeTransactionModal" variant="secondary">
          Annuler
        </Button>
        <Button @click="saveTransaction" :loading="saving" :disabled="saving">
        💾 Enregistrer
        </Button>
      </template>
    </Modal>

    <!-- Modal Configuration Budget -->
    <Modal 
      :show="showBudgetModal" 
      title="Configuration du Budget"
      @close="closeBudgetModal"
      size="lg"
    >
      <div class="budget-config">
        <p class="budget-intro">
          Définis tes objectifs budgétaires par catégorie pour mieux suivre tes dépenses.
        </p>

        <div class="budget-config-list">
          <div v-for="cat in categories" :key="cat" class="budget-config-item">
            <label class="budget-config-label">{{ cat }}</label>
            <input 
              v-model.number="budgetConfig[cat]" 
              type="number" 
              step="100"
              class="form-input"
              placeholder="0"
            >
          </div>
        </div>
      </div>

      <template #footer>
        <Button @click="closeBudgetModal" variant="secondary">
          Annuler
        </Button>
        <Button @click="saveBudgetConfig">
          💾 Enregistrer
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'Finances',
  data() {
    return {
      transactions: [],
      showAddTransactionModal: false,
      showBudgetModal: false,
      saving: false,
      filterType: 'all',
      filterCategory: 'all',
      transactionForm: {
        type: 'expense',
        description: '',
        amount: 0,
        date: new Date().toISOString().split('T')[0],
        category: '',
        notes: ''
      },
      categories: [
        'Formation',
        'Marketing',
        'Matériel',
        'Administratif',
        'Locaux',
        'Frais franchise',
        'Autre'
      ],
      budgetConfig: {
        'Formation': 5000,
        'Marketing': 3000,
        'Matériel': 2000,
        'Administratif': 1000,
        'Locaux': 5000,
        'Frais franchise': 20000,
        'Autre': 1000
      },
      charts: {
        expense: null,
        monthly: null
      }
    }
  },
  computed: {
    financialStats() {
      const totalRevenue = this.transactions
        .filter(t => t.type === 'revenue')
        .reduce((sum, t) => sum + t.amount, 0)
      
      const totalExpense = this.transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)
      
      const balance = totalRevenue - totalExpense
      
      const totalBudget = Object.values(this.budgetConfig).reduce((sum, val) => sum + val, 0)
      const budgetRemaining = totalBudget - totalExpense

      return {
        totalRevenue,
        totalExpense,
        balance,
        budgetRemaining
      }
    },
    balanceClass() {
      return this.financialStats.balance >= 0 ? 'positive' : 'negative'
    },
    budgetUsedPercentage() {
      const totalBudget = Object.values(this.budgetConfig).reduce((sum, val) => sum + val, 0)
      if (totalBudget === 0) return 0
      return Math.min(100, Math.round((this.financialStats.totalExpense / totalBudget) * 100))
    },
    filteredTransactions() {
      return this.transactions
        .filter(t => this.filterType === 'all' || t.type === this.filterType)
        .filter(t => this.filterCategory === 'all' || t.category === this.filterCategory)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    },
    budgetCategories() {
      return this.categories.map(cat => {
        const spent = this.transactions
          .filter(t => t.type === 'expense' && t.category === cat)
          .reduce((sum, t) => sum + t.amount, 0)
        
        return {
          name: cat,
          spent: spent,
          planned: this.budgetConfig[cat] || 0
        }
      })
    }
  },
  mounted() {
    this.loadTransactions()
    this.loadBudgetConfig()
  },
  beforeUnmount() {
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy()
    })
  },
  methods: {
    async loadTransactions() {
        try {
            const response = await fetch('/api/transactions')
            this.transactions = await response.json()
            
            this.$nextTick(() => {
            this.createCharts()
            })
        } catch (error) {
            console.error('Erreur chargement transactions:', error)
        }
        },
    async loadBudgetConfig() {
      const stored = localStorage.getItem('budgetConfig')
      if (stored) {
        this.budgetConfig = JSON.parse(stored)
      }
    },
    async saveTransaction() {
    // Empêcher les doubles clics
    if (this.saving) return
    
    this.saving = true
    
    try {
        const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.transactionForm)
        })
        
        if (!response.ok) {
        throw new Error('Erreur lors de la sauvegarde')
        }
        
        const newTransaction = await response.json()
        this.transactions.push(newTransaction)
        
        this.closeTransactionModal()
        
        this.$nextTick(() => {
        this.createCharts()
        })
    } catch (error) {
        console.error('Erreur sauvegarde transaction:', error)
        alert('Erreur lors de la sauvegarde de la transaction')
    } finally {
        this.saving = false
    }
    },
    async deleteTransaction(transaction) {
        if (!confirm(`Supprimer la transaction "${transaction.description}" ?`)) return
        
        try {
            await fetch(`/api/transactions/${transaction.id}`, { 
            method: 'DELETE' 
            })
            
            this.transactions = this.transactions.filter(t => t.id !== transaction.id)
            
            this.$nextTick(() => {
            this.createCharts()
            })
        } catch (error) {
            console.error('Erreur suppression transaction:', error)
        }
        },
    saveBudgetConfig() {
      localStorage.setItem('budgetConfig', JSON.stringify(this.budgetConfig))
      this.closeBudgetModal()
      
      this.$nextTick(() => {
        this.createCharts()
      })
    },
    closeTransactionModal() {
      this.showAddTransactionModal = false
      this.saving = false
      this.transactionForm = {
        type: 'expense',
        description: '',
        amount: 0,
        date: new Date().toISOString().split('T')[0],
        category: '',
        notes: ''
      }
    },
    closeBudgetModal() {
      this.showBudgetModal = false
    },
    createCharts() {
      this.createExpenseChart()
      this.createMonthlyChart()
    },
    createExpenseChart() {
      const ctx = this.$refs.expenseChart
      if (!ctx) return

      if (this.charts.expense) {
        this.charts.expense.destroy()
      }

      const expenseByCategory = {}
      this.transactions
        .filter(t => t.type === 'expense')
        .forEach(t => {
          expenseByCategory[t.category] = (expenseByCategory[t.category] || 0) + t.amount
        })

      const labels = Object.keys(expenseByCategory)
      const data = Object.values(expenseByCategory)

      this.charts.expense = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(239, 68, 68, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(59, 130, 246, 0.8)',
              'rgba(139, 92, 246, 0.8)',
              'rgba(236, 72, 153, 0.8)',
              'rgba(156, 163, 175, 0.8)'
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
    createMonthlyChart() {
      const ctx = this.$refs.monthlyChart
      if (!ctx) return

      if (this.charts.monthly) {
        this.charts.monthly.destroy()
      }

      // Grouper par mois
      const monthlyData = {}
      this.transactions.forEach(t => {
        const month = new Date(t.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })
        if (!monthlyData[month]) {
          monthlyData[month] = { revenue: 0, expense: 0 }
        }
        if (t.type === 'revenue') {
          monthlyData[month].revenue += t.amount
        } else {
          monthlyData[month].expense += t.amount
        }
      })

      const labels = Object.keys(monthlyData).sort()
      const revenueData = labels.map(m => monthlyData[m].revenue)
      const expenseData = labels.map(m => monthlyData[m].expense)

      this.charts.monthly = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Revenus',
              data: revenueData,
              backgroundColor: 'rgba(16, 185, 129, 0.8)',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 2,
              borderRadius: 8
            },
            {
              label: 'Dépenses',
              data: expenseData,
              backgroundColor: 'rgba(239, 68, 68, 0.8)',
              borderColor: 'rgba(239, 68, 68, 1)',
              borderWidth: 2,
              borderRadius: 8
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('fr-FR')
    },
    getBudgetPercentage(cat) {
      if (cat.planned === 0) return 0
      return Math.min(100, Math.round((cat.spent / cat.planned) * 100))
    },
    getBudgetProgressClass(cat) {
      const percentage = this.getBudgetPercentage(cat)
      if (percentage >= 90) return 'danger'
      if (percentage >= 75) return 'warning'
      return 'success'
    }
  }
}
</script>

<style scoped>
.finances {
  padding: var(--space-xl);
  max-width: 1600px;
  margin: 0 auto;
  animation: fadeIn var(--transition-slow);
}

/* Header */
.finances-header {
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
.financial-kpis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.kpi-card {
  background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
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

.revenue-card .kpi-icon { color: var(--success); }
.expense-card .kpi-icon { color: var(--error); }
.balance-card .kpi-icon { color: var(--primary); }
.budget-card .kpi-icon { color: var(--secondary); }

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
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.kpi-value.positive { color: var(--success); }
.kpi-value.negative { color: var(--error); }

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

/* Charts */
.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.chart-card {
  min-height: 400px;
  overflow: hidden; /* Ajoute cette ligne */
}

.chart-title {
  margin: 0;
  font-size: 1.125rem;
  color: var(--text-primary);
  font-weight: 600;
  position: relative; /* Ajoute cette ligne */
  z-index: 10; /* Ajoute cette ligne */
}

.chart-container {
  padding: var(--space-lg);
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Transactions */
.transactions-section {
  margin-bottom: var(--space-xl);
}

.transactions-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.filters {
  display: flex;
  gap: var(--space-sm);
}

.filter-select {
  padding: var(--space-sm) var(--space-md);
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

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  max-height: 600px;
  overflow-y: auto;
}

.transaction-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border-left: 4px solid transparent;
  transition: all var(--transition-base);
}

.transaction-item.revenue {
  border-left-color: var(--success);
}

.transaction-item.expense {
  border-left-color: var(--error);
}

.transaction-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.transaction-icon {
  font-size: 2rem;
}

.transaction-content {
  flex: 1;
}

.transaction-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-sm);
  gap: var(--space-md);
}

.transaction-header h4 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.transaction-amount {
  font-size: 1.25rem;
  font-weight: 700;
}

.transaction-amount.revenue {
  color: var(--success);
}

.transaction-amount.expense {
  color: var(--error);
}

.transaction-meta {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.transaction-date {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.empty-state {
  text-align: center;
  padding: var(--space-2xl);
  color: var(--text-light);
}

.empty-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: var(--space-md);
  opacity: 0.5;
}

/* Budget */
.budget-section {
  margin-bottom: var(--space-xl);
}

.budget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.budget-categories {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.budget-category {
  padding: var(--space-lg);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
}

.budget-cat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-sm);
}

.budget-cat-name {
  font-weight: 600;
  color: var(--text-primary);
}

.budget-cat-amounts {
  font-size: 0.875rem;
}

.spent {
  font-weight: 700;
  color: var(--text-primary);
}

.separator {
  color: var(--text-secondary);
  margin: 0 var(--space-xs);
}

.planned {
  color: var(--text-secondary);
}

.budget-progress-bar {
  height: 12px;
  background: var(--gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-xs);
}

.budget-progress-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.budget-progress-fill.success { background: var(--success); }
.budget-progress-fill.warning { background: var(--warning); }
.budget-progress-fill.danger { background: var(--error); }

.budget-percentage {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
}

/* Forms */
.transaction-form {
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

/* Budget Config */
.budget-config {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.budget-intro {
  color: var(--text-secondary);
  margin: 0;
}

.budget-config-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.budget-config-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.budget-config-label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .charts-section {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .budget-config-list {
    grid-template-columns: 1fr;
  }
}
</style>