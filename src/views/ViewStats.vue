<script setup>
import { ref } from 'vue'

import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'

import { useWatchCharacters } from '@/use/useWatchCharacters'

const loveNoteballs = ref('')

const storeNotes = useStoreNotes()

// watch
useWatchCharacters(loveNoteballs, 10)
</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      v-autofocus
      class="input"
      type="text"
      maxlength="10"
      placeholder="Do you love noteballs?"
    />
  </div>
</template>

<style></style>
