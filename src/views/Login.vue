<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
          alt="Your Company" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{{$t('login')}}</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-red-600 hover:text-red-500"> {{$t('register')}}</a>
        </p>
      </div>
      <form @submit="handleLogin" :validation-schema="schema" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />

        <div class="-space-y-px rounded-md shadow-sm">
          <label for="email-address" class="sr-only">{{$t('email')}}</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required=""
            class="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="{{$t('email')}}" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="-space-y-px rounded-md shadow-sm">
          <label for="password" class="sr-only">{{$t('password')}}</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required=""
            class="relative block w-full appearance-none  rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            placeholder="{{$t('password')}}" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div>
          <button :disabled="loading" type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            {{$t('login')}}
          </button>
        </div>
      </form>
      <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
        {{ message }}
      </div>
    </div>
  </div>
</template>


   
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  export default {
    name: "Login",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        username: yup.string().required(this.$t('Username is required!!!')),
        password: yup.string().required(this.$t('password is required!!!')),
      });
      return {
        loading: false,
        message: "",
        schema,
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
      if (this.loggedIn) {
        this.$router.push("/profile");
      }
    },
    methods: {
      handleLogin(user) {
        this.loading = true;
        this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/profile");
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      },
    },
  };
  </script>