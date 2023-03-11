<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const storeNotes = useStoreNotes()

function addNote() {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>

<template>
  <div class="notes">
    <AddEditNote v-model="newNote">
      <template v-slot:buttons>
        <button class="button is-link has-background-success" :disabled="!newNote" @click="addNote">
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <!-- <div class="card has-background-success-dark mb-5 p-4">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model="newNote"
            class="textarea"
            placeholder="Add new note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div> -->

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<style></style>
