import { ref } from 'vue'
import type { Toast } from '../types/Toast'

const toasts = ref<Toast[]>([])
let id = 0

export function useToast() {
  function showToast(message: string, type: Toast['type']) {
    toasts.value.push({ id: ++id, message, type })

    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }, 3000)
  }

  return { toasts, showToast }
}
