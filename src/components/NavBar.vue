<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 text-white  mb-3">
        <div class="lg:flex flex-grow items-center" >

            <ul class="flex flex-col lg:flex-row list-none ml-auto">
                <li class="nav-item"><router-link to="/">Home</router-link></li>
                <li class="nav-item"><router-link to="about">About</router-link></li>
                <li class="nav-item"><router-link to="login">Login</router-link></li>
          </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>