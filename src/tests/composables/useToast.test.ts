import { useToast } from '@/lib/composables/useToast.ts'
import { describe, expect, it, vi } from 'vitest'
describe('useToast', () => {
  it('adds a toast with type success', () => {
    const { toasts, showToast } = useToast()

    showToast('Hello World', 'success')

    expect(toasts.value.length).toBe(1)
    expect(toasts.value[0]).toMatchObject({
      message: 'Hello World',
      type: 'success',
    })
  })

  it('removes a toast automatically after 3s', () => {
    vi.useFakeTimers()
    const { toasts, showToast } = useToast()

    showToast('Will disappear', 'success')

    expect(toasts.value.length).toBe(1)
    vi.advanceTimersByTime(3000)
    expect(toasts.value.length).toBe(0)
  })
})
