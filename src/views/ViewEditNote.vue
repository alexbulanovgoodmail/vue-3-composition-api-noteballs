<script setup>
import { ref } from 'vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const noteContent = ref('')
</script>

<template>
  <div class="edit-note">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      label="Edit note"
      bgColor="link"
      placeholder="Edit note"
    >
      <template v-slot:buttons>
        <button class="button is-link is-light" @click="$router.back()">Cancel</button>
        <button class="button is-link has-background-link" :disabled="!noteContent">
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<style></style>
