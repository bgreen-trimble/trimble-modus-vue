<!-- filepath: /Users/bgreen/projects/trimble/trimble-modus-vue/src/components/toast/Toaster.vue -->
<template>
  <Teleport to="body">
    <div class="modus-toaster" v-if="toasts.length">
      <Toast
        v-for="toast in toasts"
        :key="toast.id"
        :id="toast.id"
        :title="toast.title"
        :message="toast.message"
        :severity="toast.severity"
        :icon="toast.icon"
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
