<template>
  <div class="user-menu">
    <div v-if="user" class="user-info" @click="toggleDropdown">
      <div class="user-avatar">
        {{ userInitials }}
      </div>
      <div class="user-details">
        <span class="user-name">{{ user.prenom }} {{ user.nom }}</span>
        <span class="user-email">{{ user.email }}</span>
      </div>
      <span class="dropdown-icon">▼</span>
    </div>

    <div v-if="showDropdown" class="dropdown-menu" @click.stop>
      <div class="dropdown-header">
        <div class="user-avatar large">
          {{ userInitials }}
        </div>
        <div class="user-info-full">
          <strong>{{ user.prenom }} {{ user.nom }}</strong>
          <span>{{ user.email }}</span>
        </div>
      </div>

      <div class="dropdown-divider"></div>

      <a href="#" @click.prevent="goToProfile" class="dropdown-item">
        <span class="item-icon">👤</span>
        <span>Mon profil</span>
      </a>

      <a href="#" @click.prevent="goToSettings" class="dropdown-item">
        <span class="item-icon">⚙️</span>
        <span>Paramètres</span>
      </a>

      <div class="dropdown-divider"></div>

      <a href="/logout" class="dropdown-item logout">
        <span class="item-icon">🚪</span>
        <span>Déconnexion</span>
      </a>
    </div>

    <div v-if="showDropdown" class="dropdown-overlay" @click="closeDropdown"></div>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  data() {
    return {
      user: null,
      showDropdown: false
    }
  },
  computed: {
    userInitials() {
      if (!this.user) return ''
      const prenom = this.user.prenom || ''
      const nom = this.user.nom || ''
      return (prenom.charAt(0) + nom.charAt(0)).toUpperCase()
    }
  },
  mounted() {
    this.loadUser()
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    async loadUser() {
      try {
        const response = await fetch('/api/auth/user')
        if (response.ok) {
          const data = await response.json()
          this.user = data.user
        }
      } catch (error) {
        console.error('Erreur chargement utilisateur:', error)
      }
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    closeDropdown() {
      this.showDropdown = false
    },
    handleClickOutside(event) {
      const userMenu = this.$el
      if (!userMenu.contains(event.target)) {
        this.closeDropdown()
      }
    },
    goToProfile() {
      this.$emit('navigate', 'profile')
      this.closeDropdown()
    },
    goToSettings() {
      this.$emit('navigate', 'settings')
      this.closeDropdown()
    }
  }
}
</script>

<style scoped>
.user-menu {
  position: relative;
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  backdrop-filter: blur(10px);
}

.user-info:hover {
  background: rgba(255, 255, 255, 0.2);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: white;
}

.user-avatar.large {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.user-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
}

.user-email {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-icon {
  font-size: 0.7rem;
  color: white;
  margin-left: var(--space-sm);
  transition: transform var(--transition-base);
}

.user-info:hover .dropdown-icon {
  transform: translateY(2px);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + var(--space-sm));
  right: 0;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2xl);
  min-width: 280px;
  z-index: 1000;
  animation: slideDown var(--transition-base);
  border: 1px solid var(--gray-200);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-header {
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.user-info-full {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.user-info-full strong {
  font-size: 1rem;
  color: var(--text-primary);
}

.user-info-full span {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.dropdown-divider {
  height: 1px;
  background: var(--gray-200);
  margin: var(--space-xs) 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  color: var(--text-primary);
  text-decoration: none;
  transition: all var(--transition-base);
  font-size: 0.95rem;
  font-weight: 500;
}

.dropdown-item:hover {
  background: var(--bg-secondary);
}

.dropdown-item.logout {
  color: var(--error);
}

.dropdown-item.logout:hover {
  background: rgba(239, 68, 68, 0.1);
}

.item-icon {
  font-size: 1.25rem;
}

.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

@media (max-width: 768px) {
  .user-email {
    display: none;
  }
  
  .dropdown-menu {
    right: -10px;
  }
}
</style>