<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

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
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
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
