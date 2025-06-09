import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import RegistryListView from '../views/RegistryListView.vue'
import RecordTableView from '../views/RecordTableView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/registries', component: RegistryListView },
  { path: '/registries/:id', component: RecordTableView, props: true },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
