<template>
  <div class="app">
    <Header />
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
</script>

<style>
body {
  margin: 0;
  background-color: #474141bb;
  font-family: 'Segoe UI', sans-serif;
}
.app {
  min-height: 100vh;
}
.content {
  padding: 2rem;
  text-align: center;
}
</style>
