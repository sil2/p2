<template>
 <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt="Your Company" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-red-600 hover:text-red-500">register</a>
        </p>
      </div>
      <form  @submit="handleRegister" :validation-schema="schema" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
         
            <label for="username" class="sr-only">Name</label>
            <input id="username" name="email" type="text"  required="" class="relative block w-full appearance-none r rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" placeholder="Name" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="-space-y-px rounded-md shadow-sm">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" placeholder="Email address" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="-space-y-px rounded-md shadow-sm">
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none  rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm" placeholder="Password" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
      

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            <ErrorMessage name="username" class="error-feedback" />
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-red-600 hover:text-red-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button :disabled="loading" type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-red-500 group-hover:text-red-400" aria-hidden="true" />
            </span>
            Sign in
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
    name: "Register",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        username: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
        email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
        password: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!")
          .max(40, "Must be maximum 40 characters!"),
      });
      return {
        successful: false,
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
    mounted() {
      if (this.loggedIn) {
        this.$router.push("/profile");
      }
    },
    methods: {
      handleRegister(user) {
        this.message = "";
        this.successful = false;
        this.loading = true;
        this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      },
    },
  };
  </script>