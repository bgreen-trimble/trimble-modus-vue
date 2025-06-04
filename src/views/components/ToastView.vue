<!-- filepath: /Users/bgreen/projects/trimble/trimble-modus-vue/src/views/components/ToastView.vue -->
<template>
  <div class="component-view">
    <h1 class="tm-h1 mb-2">Toast Showcase</h1>
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
      <h2>Positioning</h2>
      <p>
        Toasts can be positioned in different areas of the screen. Use the <code>position</code> option to control where
        toasts appear.
      </p>
      <div class="position-container">
        <div class="grid-3x3">
          <Button @click="showToastPosition('top-left')" size="small">Top Left</Button>
          <Button @click="showToastPosition('top-center')" size="small">Top Center</Button>
          <Button @click="showToastPosition('top-right')" size="small">Top Right</Button>
          <Button @click="showToastPosition('center')" size="small">Center</Button>
          <div></div>
          <Button @click="showToastPosition('bottom-right')" size="small">Bottom Right</Button>
          <Button @click="showToastPosition('bottom-left')" size="small">Bottom Left</Button>
          <Button @click="showToastPosition('bottom-center')" size="small">Bottom Center</Button>
        </div>
      </div>
    </section>

    <section>
      <h2>Persistent Toasts</h2>
      <p>
        Create persistent toasts that don't automatically timeout by setting <code>duration: 0</code>.
        These toasts will remain visible until the user manually dismisses them.
      </p>
      <div class="button-group">
        <Button @click="showPersistentToast" severity="primary">Show Persistent Toast</Button>
        <Button @click="showPersistentWarning" severity="warning">Show Persistent Warning</Button>
        <Button @click="showPersistentError" severity="danger">Show Persistent Error</Button>
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
  
  // With position
  warning('Position Example', 'This toast appears in the top-left corner', {
    position: 'top-left'
  })
  
  // Persistent toast that won't auto-dismiss
  primary('Persistent Toast', 'This toast will remain until manually dismissed', {
    duration: 0,
    icon: 'pin'
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
import type { ToastPosition } from '../../composables/useToast'

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

const showToastPosition = (position: ToastPosition) => {
  success(`${position} Toast`, `This toast appears in the ${position} position.`, {
    position,
    icon: 'place'
  })
}

// Persistent toast examples
const showPersistentToast = () => {
  primary('Persistent Notification', 'This toast will remain on screen until you manually close it.', {
    duration: 0,
    icon: 'pin',
    position: 'top-right'
  })
}

const showPersistentWarning = () => {
  warning('Ongoing Process', 'A background process is running. This notification will stay until complete.', {
    duration: 0,
    icon: 'timelapse',
    position: 'bottom-right'
  })
}

const showPersistentError = () => {
  danger('Connection Lost', 'Unable to connect to the server. Please check your internet connection.', {
    duration: 0,
    icon: 'wifi_off',
    position: 'top-center'
  })
}
</script>

<style scoped>
.component-view {
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

.position-container {
  margin: 1.5rem 0;
}

.grid-3x3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: 300px;
  border: 1px dashed var(--color-tm-gray-5);
  padding: 1rem;
  border-radius: 0.5rem;
}

.grid-3x3>button:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.grid-3x3>button:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}

.grid-3x3>button:nth-child(3) {
  grid-column: 3;
  grid-row: 1;
}

.grid-3x3>button:nth-child(4) {
  grid-column: 2;
  grid-row: 2;
}

.grid-3x3>button:nth-child(6) {
  grid-column: 3;
  grid-row: 3;
}

.grid-3x3>button:nth-child(7) {
  grid-column: 1;
  grid-row: 3;
}

.grid-3x3>button:nth-child(8) {
  grid-column: 2;
  grid-row: 3;
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

.dark .grid-3x3 {
  border-color: var(--color-tm-gray-7);
}
</style>
