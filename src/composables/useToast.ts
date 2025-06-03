import { ref, readonly } from 'vue'

export type ToastSeverity = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export interface Toast {
  id: string
  title: string
  message: string
  severity: ToastSeverity
  icon?: string
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
    severity: ToastSeverity = 'primary', 
    options: {
      icon?: string,
      duration?: number,
      dismissible?: boolean
    } = {}
  ) => {
    const id = Date.now().toString()
    const toast: Toast = {
      id,
      title,
      message,
      severity,
      icon: options.icon,
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
   * Convenience method to add a primary toast
   */
  const primary = (title: string, message: string, options = {}) => {
    return addToast(title, message, 'primary', options)
  }

  /**
   * Convenience method to add a secondary toast
   */
  const secondary = (title: string, message: string, options = {}) => {
    return addToast(title, message, 'secondary', options)
  }

  /**
   * Convenience method to add a success toast
   */
  const success = (title: string, message: string, options = {}) => {
    const defaultOptions = { icon: 'check_circle' };
    return addToast(title, message, 'success', { ...defaultOptions, ...options })
  }

  /**
   * Convenience method to add a warning toast
   */
  const warning = (title: string, message: string, options = {}) => {
    const defaultOptions = { icon: 'warning' };
    return addToast(title, message, 'warning', { ...defaultOptions, ...options })
  }

  /**
   * Convenience method to add a danger toast
   */
  const danger = (title: string, message: string, options = {}) => {
    const defaultOptions = { icon: 'error' };
    return addToast(title, message, 'danger', { ...defaultOptions, ...options })
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
    primary,
    secondary,
    success,
    warning,
    danger,
    clearAll
  }
}
