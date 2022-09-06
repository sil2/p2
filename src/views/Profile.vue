<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser}}</strong> Profile
      </h3>
    </header>
  
  
   
  </div>
</template>
<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {

      console.log('user',this.$store.state.auth.user)
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<!--
<template>
    <div>
      <div v-for="post in posts" v-bind:key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </template>
  

  <script>
    export default {
      computed: {
        posts() {
             return this.$store.getters.posts;
          },
      },
      created() {
        this.$store.dispatch('loadPosts');  
      },
    }
    </script>

  -->