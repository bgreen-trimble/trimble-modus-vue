<!-- filepath: /Users/bgreen/projects/trimble/trimble-modus-vue/src/views/components/ToastView.vue -->
<template>
  <div class="component-view">
    <h1>Toast</h1>
    <p>
      Toasts provide non-intrusive, short-lasting contextual feedback to the user.
    </p>

    <section>
      <h2>Usage</h2>
      <p>
        Toast notifications can be triggered from anywhere in your application using the
        <code>useToast</code> composable.
      </p>
      <div class="button-group">
        <Button @click="showPrimaryToast" severity="primary">Show Primary Toast</Button>
        <Button @click="showSecondaryToast" severity="secondary">Show Secondary Toast</Button>
        <Button @click="showSuccessToast" severity="success">Show Success Toast</Button>
        <Button @click="showWarningToast" severity="warning">Show Warning Toast</Button>
        <Button @click="showDangerToast" severity="danger">Show Danger Toast</Button>
      </div>
    </section>

    <section>
      <h2>Implementation</h2>
      <p>
        Include the <code>Toaster</code> component in your app's main layout
        and use the <code>useToast</code> composable to manage toasts.
      </p>
      <h3>Installation</h3>
      <pre><code>// In your main App.vue or layout component:
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- Your app content --&gt;
    &lt;Toaster /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Toaster } from 'trimble-modus-vue'
&lt;/script&gt;</code></pre>

      <h3>Usage Example</h3>
      <pre><code>&lt;script setup&gt;
import { useToast } from 'trimble-modus-vue'

const { addToast, primary, secondary, success, warning, danger } = useToast()

function showToast() {
  // Basic usage
  addToast('Title', 'This is a toast message', 'primary')
  
  // With helper methods
  success('Success', 'Operation completed successfully')
  danger('Error', 'Something went wrong')
  
  // With custom options
  secondary('Custom Duration', 'This toast will stay for 5 seconds', { 
    duration: 5000,
    dismissible: true 
  })
  
  // With custom icon
  primary('Custom Icon', 'This toast uses a custom icon', {
    icon: 'info'
  })
}
&lt;/script&gt;</code></pre>
    </section>

    <!-- Make sure the Toaster is included -->
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { Button, Toaster } from '../../components'
import { useToast } from '../../composables/useToast'

const { primary, secondary, success, warning, danger } = useToast()

const showPrimaryToast = () => {
  primary('Primary Toast', 'This is a primary toast message with important information.', {
    icon: 'info'
  })
}

const showSecondaryToast = () => {
  secondary('Secondary Toast', 'This is a secondary toast message with additional context.')
}

const showSuccessToast = () => {
  success('Success!', 'Your action has been completed successfully.')
}

const showWarningToast = () => {
  warning('Warning', 'Please review your information before continuing.')
}

const showDangerToast = () => {
  danger('Error', 'Something went wrong. Please try again.')
}
</script>

<style scoped>
.component-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

section {
  margin: 2rem 0;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
}

h3 {
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem;
}

pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.25rem;
  overflow-x: auto;
}

code {
  font-family: monospace;
}

.dark pre {
  background-color: #333;
  color: #f5f5f5;
}
</style>
