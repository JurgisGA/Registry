<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue', 'save'])
const name = ref('')
const description = ref('')
const dialog = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit('update:modelValue', v),
})
</script>

<template>
  <v-dialog v-model="dialog" persistent>
    <v-card width="500">
      <v-card-title>Create Registry</v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="name" />
        <v-text-field label="Description" v-model="description" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="$emit('save', { name, description })">Save</v-btn>
        <v-btn text @click="dialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
