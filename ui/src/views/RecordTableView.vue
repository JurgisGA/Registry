<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ id: string }>()
</script>

<template>
  <v-container>
    <h2>Records for Registry {{ props.id }}</h2>
    <!-- placeholder -->
  </v-container>
</template>
