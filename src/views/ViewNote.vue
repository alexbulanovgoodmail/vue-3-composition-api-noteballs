<script setup></script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark mb-5 p-4">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add new note"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Add New Note</button>
        </div>
      </div>
    </div>

    <div v-for="i in 3" class="card mb-4">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ex laboriosam incidunt
          quo consequuntur quibusdam nisi sit officia dignissimos nulla illum quaerat, maiores
          corrupti a veritatis quisquam rerum harum consectetur!
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<style></style>
