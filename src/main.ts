import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import portugues from './langs/pt-br'
import english from './langs/en-us'
import espanol from './langs/es-uy'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'es-UY',
  fallbackLocale: 'en-US',
  messages: {
    'pt-BR': portugues.messages,
    'en-US': english.messages,
    'es-UY': espanol.messages,
  },
}) // vou colocar todas essas mensagens depois em arquivos separados

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
