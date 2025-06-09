import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import LoginView from '../../src/views/LoginView.vue'
import { describe, it, expect, vi } from 'vitest'
import api from '../../src/services/api'
vi.mock('../../src/services/api')

describe('LoginView', () => {
  it('submits credentials', async () => {
    const wrapper = mount(LoginView, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    ;(api.post as any).mockResolvedValue({ data: { token: 't', user: { id: 1, email: 'a' } } })
    await wrapper.find('button').trigger('click')
    expect(api.post).toHaveBeenCalled()
  })
})
