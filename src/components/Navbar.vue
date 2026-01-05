<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>
    <div id="greet">
      <p>{{ t('greet', { user: 'Mike' }) }}</p>
    </div>
    <router-link to="/">{{ t('nav.home') }}</router-link>
    <router-link to="/pedidos">{{ t('nav.pedidos') }}</router-link>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
defineOptions({ name: 'Navbar' })
defineProps<{ logo: string; alt: string }>()

const { t, locale, availableLocales } = useI18n()
</script>

<style scoped lang="scss">
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  #greet {
    margin-right: 20px;
  }

  #logo-url {
    margin: auto;
    margin-left: 0;
  }

  a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: 0.5s;
  }

  a:hover {
    color: #fff;
  }

  p {
    color: #fcba03;
    margin-right: 20px;
  }
}

#logo {
  width: 40px;
  height: 40px;
}

.locale-changer {
  margin: 0;

  select {
    background-color: #333;
    color: #fcba03;
    border: none;
    padding: 5px 10px;
    font-size: 16px;
  }
}
</style>
