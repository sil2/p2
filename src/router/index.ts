import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Profile from '@/pages/Profile.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register }
]

export let extendedRoutes: any = null;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/about', '/register'];

  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !storage.hasKey('auth_token')) {
    return '/login';
  }
});


export default router