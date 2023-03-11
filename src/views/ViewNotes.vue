<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const storeNotes = useStoreNotes()

function addNote() {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}

function deleteNote(idToDelete) {
  notes.value = notes.value.filter((note) => note.id !== idToDelete)
}
</script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark mb-5 p-4">
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
    </div>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<style></style>
