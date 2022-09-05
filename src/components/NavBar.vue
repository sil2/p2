<template>
  <div class="bg-red-600">
    <nav class="
        container
        px-6
        py-2
        mx-auto
        md:flex md:justify-between md:items-center
      ">
      <div class="flex items-center justify-between">
        <router-link to="/" > <LogoSVG class="h-28 w-auto text-center text-white	 fill-current " />
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
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

      

        <div v-if="!currentUser">

          <router-link to="/register" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
              :href="href" @click="navigate">{{$t('register')}}</a>
          </router-link>

          <router-link to="/login" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
              :href="href" @click="navigate">{{$t('login')}}</a>
          </router-link>
        </div>
        <div v-if="currentUser">

      
          <router-link to="/profile" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a :class="[isActive?'bg-red-900 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
              :href="href" @click="navigate">{{ currentUser.username }}</a>
          </router-link>


          <a class="nav-link" @click.prevent="logOut">
             {{$t('logoout')}}
          </a>
        </div>




      </ul>
      <LanguageSelect />
    </nav>


  </div>
</template>

<!-- https://www.bezkoder.com/vue-3-authentication-jwt/ -->
<script>
import { ref } from 'vue';
import LanguageSelect from "@/components/LanguageSelect.vue";
import LogoSVG from '@/assets/Goli.svg';

export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  components: {
    LanguageSelect,
    LogoSVG
  },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};

</script>