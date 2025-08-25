import { useToast } from '@/lib/composables/useToast.ts'
import { beforeEach, describe, expect, it, vi } from 'vitest'
describe('useToast', () => {
  const { toasts, showToast } = useToast()

  beforeEach(() => {
    toasts.value = []
  })

  it('adds a toast with type success', () => {
    showToast('Hello World', 'success')

    expect(toasts.value.length).toBe(1)
    expect(toasts.value[0]).toMatchObject({
      message: 'Hello World',
      type: 'success',
    })
  })

  it('removes a toast automatically after 3s', () => {
    vi.useFakeTimers()

    showToast('Will disappear', 'success')

    expect(toasts.value.length).toBe(1)
    vi.advanceTimersByTime(3000)
    expect(toasts.value.length).toBe(0)
  })
})
