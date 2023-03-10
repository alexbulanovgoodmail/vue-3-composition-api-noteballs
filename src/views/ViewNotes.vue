<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ex laboriosam incidunt quo consequuntur quibusdam nisi sit officia dignissimos nulla illum quaerat, maiores corrupti a veritatis quisquam rerum harum consectetur!'
  },
  {
    id: 'id2',
    content: 'This is a shorter note! Woo!'
  }
])

function addNote() {
  let currentNew = new Date().getTime()
  let id = currentNew.toString()

  let note = {
    id,
    content: newNote.value
  }

  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
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

    <Note v-for="note in notes" :key="note.id" />
  </div>
</template>

<style></style>
