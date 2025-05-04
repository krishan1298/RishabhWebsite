import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
