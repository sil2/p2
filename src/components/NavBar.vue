<template>

  <div class="">
    <nav class="
        container
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
              focus:outline-none focus:text-red-400
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
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-1 md:mt-0
        ">

        <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
          <a :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
            :href="href" @click="navigate">{{$t('home')}}</a>
        </router-link>

        <router-link to="/about" v-slot="{ href, route, navigate, isActive, isExactActive }">
          <a :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
            :href="href" @click="navigate">{{$t('about')}}</a>
        </router-link>


          <router-link to="/register" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a v-if="!logged_in" :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
              :href="href" @click="navigate">{{$t('register')}}</a>
          </router-link>

          <router-link to="/login" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
              :href="href" @click="navigate">{{$t('login')}}</a>
          </router-link>
       

          <router-link to="/profile" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a v-if="!logged_in" :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
              :href="href" @click="navigate">Profile</a>
          </router-link>

          
          <a v-if="!logged_in" :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"  @click.prevent="logOut">
            {{$t('logoout')}}
          </a>
      </ul>
    </nav>
  </div>
</template>

<!-- https://www.bezkoder.com/vue-3-authentication-jwt/ -->
<script setup>
import { ref } from 'vue';
import LogoSVG from '@/assets/logo.svg';
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.store'
import { useStorage } from "vue3-storage";

const storage = useStorage();
const user = storeToRefs(useUserStore())

let logged_in = ref(false);
if (storage.hasKey('auth_token')) {
  logged_in =true
}

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

//const user = computed(() => useAuthStore.user)

function logOut() {
  // this.$store.dispatch('auth/logout');
  this.$router.push('/login');
}



</script>