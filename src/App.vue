<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
/* Imports */
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

/* defines */
defineOptions({ name: 'App' })

/* constants & variables */
const logo_src = ref('/img/logo.png')
const app_name = ref('Make Your Burger')
</script>

<style lang="scss">
* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42pix;
  margin-bottom: 30px;
  color: #222;
}
</style>
