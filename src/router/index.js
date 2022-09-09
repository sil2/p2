import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import { useStorage } from "vue3-storage";

const storage = useStorage();

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/profile', name: 'Profile', component: Profile},
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach(async (to) => {
 
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login','/','/about','/register'];
  
  const authRequired = !publicPages.includes(to.path);

  



  if (authRequired && !storage.hasKey('auth_token')) {
      return '/login';
  }
});

export default router