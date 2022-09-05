import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import BoardUser from '@/views/BoardUser.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'


const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/profile', name: 'Profile', component: Profile},
  {path: '/partner', name: 'BoardUser', component: BoardUser},
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router