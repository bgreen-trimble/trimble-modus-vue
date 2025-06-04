<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-10">
      <h1 class="tm-h1 mb-4">Trimble Modus Vue Components</h1>
      <p class="tm-body mb-6">
        Welcome to the Trimble Modus Vue component library, an implementation of the Trimble Modus Design System for
        Vue.js applications.
        This library provides a comprehensive set of UI components that follow Trimble's design guidelines, ensuring
        consistency and
        usability across all Trimble products.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <Card class="p-6" aria-labelledby="modus-design-heading">
        <template #title>
          <div class="flex items-center gap-2">
            <span class="modus-icons text-tm-blue" aria-hidden="true">design_services</span>
            <h2 id="modus-design-heading" class="tm-h2">Modus Design System</h2>
          </div>
        </template>
        <p class="tm-body mb-4">
          The Modus Design System provides a unified language for Trimble's digital products, incorporating
          brand guidelines, accessibility standards, and best practices for user experience.
        </p>
        <p class="tm-body mb-2">Key features:</p>
        <ul class="list-disc pl-6 tm-body">
          <li>Consistent UI patterns across products</li>
          <li>Accessibility built-in (WCAG 2.1 AA)</li>
          <li>Responsive and adaptable components</li>
          <li>Tailwind-powered styling system</li>
        </ul>
      </Card>

      <Card class="p-6" aria-labelledby="vue-implementation-heading">
        <template #title>
          <div class="flex items-center gap-2">
            <span class="modus-icons text-tm-blue" aria-hidden="true">code</span>
            <h2 id="vue-implementation-heading" class="tm-h2">Vue.js Implementation</h2>
          </div>
        </template>
        <p class="tm-body mb-4">
          This library is built using Vue 3 with the Composition API, TypeScript, and Tailwind CSS to provide
          a modern, maintainable, and type-safe component library.
        </p>
        <p class="tm-body mb-2">Implementation benefits:</p>
        <ul class="list-disc pl-6 tm-body">
          <li>Type-safe props and events</li>
          <li>Composition API for flexible component logic</li>
          <li>Dark mode support with system preference detection</li>
          <li>Built with performance and bundle size in mind</li>
        </ul>
      </Card>
    </div>

    <div class="mb-10">
      <h2 class="tm-h2 mb-4">Getting Started</h2>
      <p class="tm-body mb-4">
        Explore the components and foundations through the navigation menu to learn how to use the Modus Vue library in
        your
        projects.
        Each component page includes examples, props documentation, and usage guidelines.
      </p>

      <div class="bg-tm-gray-100 dark:bg-tm-gray-8 p-4 rounded-lg mb-6">
        <h3 id="installation-heading" class="tm-h3 mb-2">Installation</h3>
        <div class="bg-tm-gray-2 dark:bg-tm-gray-10 p-3 rounded font-mono text-sm" role="region"
          aria-labelledby="installation-heading" tabindex="0">
          npm install @trimble-oss/modus-vue
        </div>
      </div>

      <div class="bg-tm-gray-100 dark:bg-tm-gray-8 p-4 rounded-lg">
        <h3 id="usage-heading" class="tm-h3 mb-2">Basic Usage</h3>
        <div class="bg-tm-gray-2 dark:bg-tm-gray-10 p-3 rounded font-mono text-sm whitespace-pre-wrap" role="region"
          aria-labelledby="usage-heading" tabindex="0">
          import { Button, Card, Menu } from '@trimble-oss/modus-vue';

          // Register globally
          app.component('Button', Button);

          // Or use in components
          export default {
          components: {
          Button,
          Card
          }
          }</div>
      </div>
    </div>
    <div>
      <h2 id="available-components-heading" class="tm-h2 mb-4">Available Components</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4" role="list" aria-labelledby="available-components-heading">
        <div v-for="component in componentList" :key="component.name"
          class="p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg hover:bg-tm-gray-100 dark:hover:bg-tm-gray-10 transition-colors cursor-pointer"
          @click="navigateTo(component.path)" @keydown.enter="navigateTo(component.path)"
          @keydown.space.prevent="navigateTo(component.path)" tabindex="0" role="listitem"
          :aria-label="`${component.name} component: ${component.description}`">
          <div class="flex items-center gap-2 mb-2">
            <span class="modus-icons text-tm-blue" aria-hidden="true">{{ component.icon }}</span>
            <h3 class="tm-h3">{{ component.name }}</h3>
          </div>
          <p class="tm-body text-sm">{{ component.description }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {  Card } from '@/components';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  console.log(`Navigating to: ${path}`);
  router.push({ path: path });
};

const componentList = [
  {
    name: 'Button',
    path: 'button-view',
    icon: 'component',
    description: 'Interactive elements for user actions'
  },
  {
    name: 'Card',
    path: 'card-view',
    icon: 'dashboard',
    description: 'Container for related content and actions'
  },
  {
    name: 'Menu',
    path: 'menu-view',
    icon: 'menu',
    description: 'Navigation and action menus with popup support'
  },
  {
    name: 'Navbar',
    path: 'navbar-view',
    icon: 'web',
    description: 'Application header navigation component'
  },
  {
    name: 'Switch',
    path: 'switch-view',
    icon: 'toggle_on',
    description: 'Toggle control for binary options'
  },
  {
    name: 'Slider',
    path: 'slider-view',
    icon: 'tune',
    description: 'Range input for selecting numeric values'
  },
  {
    name: 'Tabs',
    path: 'tabs-view',
    icon: 'tab',
    description: 'Organize and navigate between related content'
  },
  {
    name: 'Toast',
    path: 'toast-view',
    icon: 'notification_important',
    description: 'Display temporary notifications or messages'
  },
  {
    name: 'Tooltip',
    path: 'tooltip-view',
    icon: 'info',
    description: 'Display informative text when hovering over elements'
  }
];
</script>