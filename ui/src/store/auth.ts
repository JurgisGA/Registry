import { defineStore } from 'pinia'
import api from '../services/api'

interface User {
  id: number
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null as User | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const { data } = await api.post('/api/login', { email, password })
      this.token = data.token
      localStorage.setItem('token', this.token)
      this.user = data.user
    },
    async register(email: string, password: string) {
      const { data } = await api.post('/api/register', { email, password })
      this.token = data.token
      localStorage.setItem('token', this.token)
      this.user = data.user
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    },
  },
})
