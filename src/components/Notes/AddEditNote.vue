<script setup></script>

<template>
  <div class="card has-background-success-dark mb-5 p-4">
    <div class="field">
      <div class="control">
        <textarea ref="newNoteRef" class="textarea" placeholder="Add new note"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
        <!-- <button class="button is-link has-background-success">Add New Note</button> -->
      </div>
    </div>
  </div>
</template>

<style></style>
