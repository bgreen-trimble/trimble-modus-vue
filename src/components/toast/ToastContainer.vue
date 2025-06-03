<!-- filepath: /Users/bgreen/projects/trimble/trimble-modus-vue/src/components/toast/ToastContainer.vue -->
<template>
  <Teleport to="body">
    <div class="modus-toast-container" v-if="toasts.length">
      <Toast
        v-for="toast in toasts"
        :key="toast.id"
        :id="toast.id"
        :title="toast.title"
        :message="toast.message"
        :type="toast.type"
        :dismissible="toast.dismissible"
        @dismiss="removeToast"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToast } from '../../composables/useToast'
import Toast from './Toast.vue'

const { toasts, removeToast } = useToast()
</script>
