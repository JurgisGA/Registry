<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirm = ref('')
const store = useAuthStore()
const router = useRouter()

async function submit() {
  if (password.value !== confirm.value) return alert('Passwords do not match')
  try {
    await store.register(email.value, password.value)
    router.push('/registries')
  } catch (e) {
    alert('Registration failed')
  }
}
</script>

<template>
  <v-container class="fill-height" justify="center" align="center">
    <v-card width="400">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" type="password" v-model="password" />
        <v-text-field label="Confirm" type="password" v-model="confirm" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="submit">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
