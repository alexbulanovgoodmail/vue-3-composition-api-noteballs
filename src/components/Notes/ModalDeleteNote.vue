<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const modalCardRef = ref(null)

/*
  emits
*/
const emit = defineEmits(['update:modelValue'])
/*
  close modal
*/
function closeModal() {
  emit('update:modelValue', false)
}

onClickOutside(modalCardRef, closeModal)

/*
  keyboard control
*/
function handleKeyboard(event) {
  if (event.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>

<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger">Delete</button>
      </footer>
    </div>
  </div>
</template>

<style></style>
