<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    hoverable: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: 'md', // sm, md, lg, none
      validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
    }
  },
  computed: {
    cardClasses() {
      return [
        'card',
        `card-padding-${this.padding}`,
        { 'card-hoverable': this.hoverable },
        { 'card-bordered': this.bordered }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all var(--transition-base);
  animation: scaleIn var(--transition-base);
}

.card-hoverable {
  cursor: pointer;
}

.card-hoverable:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-bordered {
  border: 1px solid var(--gray-200);
}

/* Padding variants */
.card-padding-none .card-body {
  padding: 0;
}

.card-padding-sm .card-body {
  padding: var(--space-md);
}

.card-padding-md .card-body {
  padding: var(--space-lg);
}

.card-padding-lg .card-body {
  padding: var(--space-xl);
}

.card-header {
  padding: var(--space-lg);
  border-bottom: 1px solid var(--gray-100);
  font-weight: 600;
  color: var(--text-primary);
}

.card-footer {
  padding: var(--space-lg);
  border-top: 1px solid var(--gray-100);
  background: var(--bg-secondary);
}
</style>