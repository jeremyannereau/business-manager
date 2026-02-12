<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary', // primary, secondary, success, danger, ghost
      validator: (value) => ['primary', 'secondary', 'success', 'danger', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'md', // sm, md, lg
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn-${this.variant}`,
        `btn-${this.size}`,
        { 'btn-disabled': this.disabled || this.loading }
      ]
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  font-family: var(--font-sans);
  text-decoration: none;
  white-space: nowrap;
}

/* Sizes */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Variants */
.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover:not(.btn-disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active:not(.btn-disabled) {
  transform: translateY(0);
}

.btn-secondary {
  background: var(--gray-100);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover:not(.btn-disabled) {
  background: var(--gray-200);
}

.btn-success {
  background: var(--success);
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-success:hover:not(.btn-disabled) {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.btn-danger {
  background: var(--error);
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-danger:hover:not(.btn-disabled) {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-ghost:hover:not(.btn-disabled) {
  background: var(--primary);
  color: white;
}

/* Disabled */
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

/* Spinner */
.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>