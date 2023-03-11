<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const newNote = ref('')
const addEditNoteRef = ref(null)

const storeNotes = useStoreNotes()

function addNote() {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextArea()
}
</script>

<template>
  <div class="notes">
    <AddEditNote ref="addEditNoteRef" v-model="newNote" placeholder="Add a new note">
      <template v-slot:buttons>
        <button class="button is-link has-background-success" :disabled="!newNote" @click="addNote">
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<style></style>
