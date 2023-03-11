<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="card has-background-success-dark mb-5 p-4">
    <div class="field">
      <div class="control">
        <textarea
          ref="newNoteRef"
          :value="modelValue"
          class="textarea"
          placeholder="Add new note"
          @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<style></style>
