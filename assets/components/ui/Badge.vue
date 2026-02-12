<template>
  <span :class="badgeClasses">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'success', 'warning', 'danger', 'info', 'gray'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    badgeClasses() {
      return [
        'badge',
        `badge-${this.variant}`,
        `badge-${this.size}`,
        { 'badge-pill': this.pill }
      ]
    }
  }
}
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.badge-pill {
  border-radius: var(--radius-full);
}

/* Sizes */
.badge-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.badge-md {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

.badge-lg {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

/* Variants */
.badge-primary {
  background: linear-gradient(135deg, var(--primary-light), var(--primary));
  color: white;
}

.badge-success {
  background: var(--success);
  color: white;
}

.badge-warning {
  background: var(--warning);
  color: white;
}

.badge-danger {
  background: var(--error);
  color: white;
}

.badge-info {
  background: var(--info);
  color: white;
}

.badge-gray {
  background: var(--gray-200);
  color: var(--text-primary);
}
</style>