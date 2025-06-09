<script setup lang="ts">
import { onMounted } from 'vue'
import { useRegistryStore } from '../store/registry'

const store = useRegistryStore()

onMounted(() => {
  store.fetchRegistries()
})
</script>

<template>
  <v-container>
    <v-btn to="/" class="mb-4" color="primary">Logout</v-btn>
    <v-list>
      <v-list-item v-for="r in store.registries" :key="r.id" :to="`/registries/${r.id}`">
        <v-list-item-title>{{ r.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template>
