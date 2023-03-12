<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import AddEditNote from '@/components/Notes/AddEditNote.vue'

import { useStoreNotes } from '@/stores/storeNotes'

const route = useRoute()

const noteContent = ref('')

const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(route.params.id)

function handleSaceClicked() {
  storeNotes.updateNote(route.params.id, noteContent.value)
}
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
        <button class="button is-link is-light mr-2" @click="$router.back()">Cancel</button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
          @click="handleSaceClicked"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<style></style>
