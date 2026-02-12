<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click.self="close">
      <div class="modal-container" :class="`modal-${size}`">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button @click="close" class="modal-close">✕</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md', // sm, md, lg, xl
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--space-md);
}

.modal-container {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  max-height: 90vh;
  overflow-y: auto;
  width: 100%;
}

.modal-sm { max-width: 400px; }
.modal-md { max-width: 600px; }
.modal-lg { max-width: 800px; }
.modal-xl { max-width: 1200px; }

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xl);
  border-bottom: 1px solid var(--gray-100);
}

.modal-header h3 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.5rem;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.modal-close:hover {
  background: var(--gray-100);
  color: var(--text-primary);
}

.modal-body {
  padding: var(--space-xl);
}

.modal-footer {
  padding: var(--space-xl);
  border-top: 1px solid var(--gray-100);
  background: var(--bg-secondary);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-md);
}

/* Animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--transition-base);
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all var(--transition-base);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95) translateY(-20px);
}
</style>