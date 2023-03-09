<script setup>
/* imports */
import NavBar from '@/components/Layout/NavBar.vue'
</script>

<template>
  <NavBar />
  <!-- <RouterLink class="button" to="/"> Notes</RouterLink> |
  <RouterLink class="button" to="stats">Stats</RouterLink> -->
  <RouterView></RouterView>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
