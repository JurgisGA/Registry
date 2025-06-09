import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { lightTheme, darkTheme } from './styles/theme'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: { lightTheme, darkTheme },
  },
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
