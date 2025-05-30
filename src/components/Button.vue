<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits<{
  /** Emitted when the button is clicked */
  (e: 'click', event: MouseEvent): void;
}>();

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  type: 'button',
  rounded: 'md'
});

// Computed styles based on props
const buttonClasses = computed(() => {
  const classes = ['inline-flex items-center justify-center transition-colors'];
  
  // Width
  if (props.fullWidth) {
    classes.push('w-full');
  }
  
  // Size classes
  if (props.size === 'sm') {
    classes.push('px-2 py-1 text-xs');
  } else if (props.size === 'md') {
    classes.push('px-4 py-2 text-base');
  } else if (props.size === 'lg') {
    classes.push('px-6 py-3 text-lg');
  }
  
  // Rounded corners
  if (props.rounded === 'none') {
    classes.push('rounded-none');
  } else if (props.rounded === 'sm') {
    classes.push('rounded-sm');
  } else if (props.rounded === 'md') {
    classes.push('rounded');
  } else if (props.rounded === 'lg') {
    classes.push('rounded-lg');
  } else if (props.rounded === 'full') {
    classes.push('rounded-full');
  }
  
  // Variant classes
  if (props.variant === 'primary') {
    classes.push('bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/50');
  } else if (props.variant === 'secondary') {
    classes.push('bg-secondary text-white hover:bg-secondary/90 focus:ring-2 focus:ring-secondary/50');
  } else if (props.variant === 'success') {
    classes.push('bg-success text-white hover:bg-success/90 focus:ring-2 focus:ring-success/50');
  } else if (props.variant === 'danger') {
    classes.push('bg-danger text-white hover:bg-danger/90 focus:ring-2 focus:ring-danger/50');
  } else if (props.variant === 'warning') {
    classes.push('bg-warning text-white hover:bg-warning/90 focus:ring-2 focus:ring-warning/50');
  } else if (props.variant === 'info') {
    classes.push('bg-info text-white hover:bg-info/90 focus:ring-2 focus:ring-info/50');
  } else if (props.variant === 'outline') {
    classes.push('bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary/50');
  } else if (props.variant === 'text') {
    classes.push('bg-transparent text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary/50');
  }
  
  // Disabled state
  if (props.disabled) {
    classes.push('opacity-50 cursor-not-allowed pointer-events-none');
  }
  
  return classes.join(' ');
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <template v-if="loading">
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </template>
    <slot></slot>
  </button>
</template>
