<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'default' | 'primary' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}>(), {
  variant: 'default',
  padding: 'md',
  shadow: 'md',
  rounded: 'md',
  interactive: false
});

// Computed styles based on props
const cardClasses = computed(() => {
  const classes = ['overflow-hidden transition-all duration-200'];
  
  // Padding
  if (props.padding === 'none') {
    classes.push('p-0');
  } else if (props.padding === 'sm') {
    classes.push('p-3');
  } else if (props.padding === 'md') {
    classes.push('p-4');
  } else if (props.padding === 'lg') {
    classes.push('p-6');
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
  }
  
  // Shadow
  if (props.shadow === 'none') {
    classes.push('shadow-none');
  } else if (props.shadow === 'sm') {
    classes.push('shadow-sm');
  } else if (props.shadow === 'md') {
    classes.push('shadow');
  } else if (props.shadow === 'lg') {
    classes.push('shadow-lg');
  }
  
  // Variant
  if (props.variant === 'default') {
    classes.push('bg-surface');
  } else if (props.variant === 'primary') {
    classes.push('bg-primary text-white');
  } else if (props.variant === 'outlined') {
    classes.push('bg-surface border border-border');
  }
  
  // Interactive
  if (props.interactive) {
    classes.push('cursor-pointer hover:shadow-lg hover:-translate-y-1');
  }
  
  return classes.join(' ');
});
</script>

<template>
  <div :class="cardClasses">
    <slot></slot>
  </div>
</template>
