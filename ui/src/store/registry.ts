import { defineStore } from 'pinia'
import api from '../services/api'

export interface Registry {
  id: number
  name: string
  description: string
}

export const useRegistryStore = defineStore('registry', {
  state: () => ({
    registries: [] as Registry[],
  }),
  actions: {
    async fetchRegistries() {
      const { data } = await api.get('/api/registries')
      this.registries = data
    },
  },
})
