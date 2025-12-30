<template>
  <div id="main-banner">
    <h1>{{ t('title') }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'Banner' })

const { t } = useI18n()
</script>

<style scoped lang="scss">
#main-banner {
  background-image: url('/img/burger.jpg');
  background-position: 0 -250px;
  background-size: cover;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px 40px;
  }
}
</style>
