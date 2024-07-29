import type { App } from "vue";
import Sidebar from '../components/Sidebar/sidebar.vue'

export function setComponent(app: App) {
  app.component('Sidebar', Sidebar) 
}