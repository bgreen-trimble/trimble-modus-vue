import { ref, readonly } from 'vue'

export type ToastType = 'neutral' | 'informal' | 'success' | 'error'

export interface Toast {
  id: string
  title: string
  message: string
  type: ToastType
  duration?: number
  dismissible?: boolean
}

// Global state for toasts
const toasts = ref<Toast[]>([])

export function useToast() {
  const DEFAULT_DURATION = 15000 // 15 seconds per Modus guidelines

  /**
   * Add a new toast to the stack
   */
  const addToast = (
    title: string, 
    message: string, 
    type: ToastType = 'neutral', 
    options: {
      duration?: number,
      dismissible?: boolean
    } = {}
  ) => {
    const id = Date.now().toString()
    const toast: Toast = {
      id,
      title,
      message,
      type,
      duration: options.duration !== undefined ? options.duration : DEFAULT_DURATION,
      dismissible: options.dismissible !== undefined ? options.dismissible : true
    }
    
    toasts.value.push(toast)
    
    // Auto-dismiss after duration (if not 0)
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id)
      }, toast.duration)
    }
    
    return id
  }

  /**
   * Remove a toast by id
   */
  const removeToast = (id: string) => {
    const index = toasts.value.findIndex(toast => toast.id === id)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  /**
   * Convenience method to add a neutral toast
   */
  const neutral = (title: string, message: string, options = {}) => {
    return addToast(title, message, 'neutral', options)
  }

  /**
   * Convenience method to add an informal toast
   */
  const informal = (title: string, message: string, options = {}) => {
    return addToast(title, message, 'informal', options)
  }

  /**
   * Convenience method to add a success toast
   */
  const success = (title: string, message: string, options = {}) => {
    return addToast(title, message, 'success', options)
  }

  /**
   * Convenience method to add an error toast
   */
  const error = (title: string, message: string, options = {}) => {
    return addToast(title, message, 'error', options)
  }

  /**
   * Clear all toasts
   */
  const clearAll = () => {
    toasts.value = []
  }

  return {
    // Expose the toasts as readonly to prevent direct modification
    toasts: readonly(toasts),
    addToast,
    removeToast,
    neutral,
    informal,
    success,
    error,
    clearAll
  }
}
