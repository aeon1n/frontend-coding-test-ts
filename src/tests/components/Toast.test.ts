import Toast from '@/components/layout/Toast.vue'
import { useToast } from '@/lib/composables/useToast.ts'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('Toast.vue', () => {
  it('renders toast with correct messages and classes', () => {
    const { toasts, showToast } = useToast()

    showToast('success happened', 'success')
    showToast('error happened', 'error')

    const wrapper = mount(Toast)
    const successToast = wrapper.find('[data-testid="toast-success"]')
    const errorToast = wrapper.find('[data-testid="toast-error"]')

    expect(successToast.exists()).toBe(true)
    expect(successToast.text()).toBe('success happened')

    expect(errorToast.exists()).toBe(true)
    expect(errorToast.text()).toBe('error happened')
  })
})
