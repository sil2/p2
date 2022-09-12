<template>

  <nav class="
        px-6
        py-2
        mx-auto
        md:flex md:justify-between md:items-center
      ">
    <div class="flex items-center justify-between">
      <router-link to="/">
        <LogoSVG class="h-18 w-auto text-center text-white	 fill-current " />
      </router-link>
      <!-- Mobile menu button -->
      <div @click="toggleNav" class="flex md:hidden">
        <button type="button" class="
              text-red-600
              hover:text-red-400
              focus:outline-none focus:text-red-600
            ">
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
            </path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          space-y-2
          bg-white
          p-2
          border rounded-lg
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-1 md:mt-0
        ">

      <router-link @click="toggleNav" v-if="logged_in" tag="li" active-class="text-red-600 "
        inactive-class="text-gray-300" class=" hover:text-red-700  px-2 py-2  font-medium" to="/"
        v-slot="{ href, route, navigate, isActive, isExactActive }">
        {{$t('home')}}
      </router-link>

      <router-link @click="toggleNav" v-if="logged_in" tag="li" active-class="text-red-600 "
        inactive-class="text-gray-300" class=" hover:text-red-700  px-2 py-2  font-medium" to="/profile"
        v-slot="{ href, route, navigate, isActive, isExactActive }">
        {{$t('profile')}}
      </router-link>

      <router-link @click="toggleNav" v-if="!logged_in" tag="li" active-class="text-red-600 "
        inactive-class="text-gray-300" class=" hover:text-red-700 h px-2 py-2 font-medium" to="/register"
        v-slot="{ href, route, navigate, isActive, isExactActive }">
        {{$t('register')}}
      </router-link>

      <router-link @click="toggleNav" v-if="!logged_in" tag="li" active-class="text-red-600"
        inactive-class="text-gray-300" class=" hover:text-red-700  h px-2 py-2  font-medium" to="/login"
        v-slot="{ href, route, navigate, isActive, isExactActive }">
        {{$t('login')}}
      </router-link>

      <a v-if="logged_in"
        :class="[isActive?'text-red-600 text-white' : ' hover:text-red-700 ', 'px-2 py-2  font-medium']"
        @click.prevent="logOut">
        {{$t('logout')}}
      </a>

    </ul>
  </nav>
</template>

<!-- https://www.bezkoder.com/vue-3-authentication-jwt/ -->
<script setup>
import { ref } from 'vue';
import LogoSVG from '@/assets/logo.svg';
import AuthService from '@/services/auth.service'
import { useStorage } from "vue3-storage";
const storage = useStorage();

let logged_in = ref(false);
if (storage.hasKey('auth_token')) {
  logged_in = true
}

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);


function logOut() {
  AuthService.logout();
}



</script>