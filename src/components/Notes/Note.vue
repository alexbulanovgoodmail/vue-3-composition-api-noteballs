<script setup>
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const storeNotes = useStoreNotes()

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

function handleDeleteClicked() {
  storeNotes.deleteNote(props.note.id)
}
</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="mt-2 has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked">Delete</a>
    </footer>
  </div>
</template>

<style></style>
