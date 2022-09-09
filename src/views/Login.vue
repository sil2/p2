<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="">
        <LogoSVG class="m-auto text-center h-40 text-red-600 fill-current " />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{{ $t('login') }}</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}

          <router-link to="/register" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <a class="font-medium text-red-600 hover:text-red-500" :href="href">{{$t('register')}}</a>
          </router-link>

        </p>
      </div>
      <Form @submit="handleLogin" :validation-schema="schema" class="mt-8 space-y-6" action="#" method="POST">
        <Field type="hidden" name="remember" value="true" />

        <div class="-space-y-px rounded-md shadow-sm">
          <label for="email-address" class="sr-only">{{ $t('email') }}</label>
          <Field id="email-address" name="email" type="email" autocomplete="email" required=""
            class="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            :placeholder="$t('email')" />
          <ErrorMessage name="email" class="pt-1 text-red-500 text-xs" />
        </div>
        <div class="-space-y-px rounded-md shadow-sm">
          <label for="password" class="sr-only">{{ $t('password') }}</label>
          <Field id="password" name="password" type="password" autocomplete="password" required=""
            class="relative block w-full appearance-none  rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            :placeholder="$t('password')" />
          <ErrorMessage name="password" class="pt-1 text-red-500 text-xs" />
        </div>
        <div>
          <button :disabled="loading" type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            {{ $t('login') }}
          </button>
        </div>
      </Form>
      <div v-if="message" class="alert">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import LogoSVG from '@/assets/logo.svg';
import * as yup from "yup";
import { ref, computed, onMounted } from 'vue'
import AuthService from '@/services/auth.service'
import UserService from '@/services/user.service'

import { useStorage } from "vue3-storage";
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.store'
import { useRouter } from 'vue-router';

const router = useRouter();
const user = storeToRefs(useUserStore())

const storage = useStorage();

const schema = yup.object().shape({
  email: yup
    .string()
    .required('email is required!!!') //vue-i18n
    .email('Email is invalid!'),
  password: yup.string().required('password is required!!!'),
});

const loading = ref(false)
const message = ref()


onMounted(async () => {

  if (storage.hasKey('auth_token')) {

    router.push("/");
  }
})

function handleLogin(user) {
  //loading = true;
  console.log('user', user)
  AuthService.login(user)
  UserService.get()
  console.log('torage.hasKey(auth_token)', storage.hasKey('auth_token'))

  router.push("/profile")
  console.log('profile')

}

</script>