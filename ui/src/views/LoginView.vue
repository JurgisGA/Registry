<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const store = useAuthStore()
const router = useRouter()

async function submit() {
  try {
    await store.login(email.value, password.value)
    router.push('/registries')
  } catch (e) {
    alert('Login failed')
  }
}
</script>

<template>
  <v-container class="fill-height" justify="center" align="center">
    <v-card width="400">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" type="password" v-model="password" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="submit">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
