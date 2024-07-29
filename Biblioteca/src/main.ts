import './output.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { setComponent } from './modules/component.module';
import { setComponentIcons } from './modules/component-icon.module'
import { setComponentPrime } from './modules/component-primevue.module'

const app = createApp(App)
app.use(PrimeVue, { unstyled: true });
app.use(router)
setComponent(app)
setComponentIcons(app)
setComponentPrime(app)
app.mount('#app')
