import axios from 'axios';

export default {
    state: () => ({
        posts: [],
    }),

    getters: {
        posts: state => {
            return state.posts;
          }
    },

    mutations: {
        SET_ITEMS (state, posts) {
            state.posts = posts
          }
    },

    actions: {
        async loadPosts ({ commit }) {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
                commit('SET_ITEMS', response.data)
             }
             catch (error) {
              console.log('post.js',error);
            }
          }
    },
}
