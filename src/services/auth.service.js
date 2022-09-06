//https://www.bezkoder.com/vue-3-authentication-jwt/

import axios from 'axios';
import { useStorage } from "vue3-storage";

class AuthService {

  getToken(){
    //is expired? is exists? ./
    storage.setStorageSync("locale", 'mytoken');

  }
  login(user) {

    getToken();
    //1 set request to get the token.
    //2 save token into local storage.
    //3 autorisationv request////
    //console.log('VITE_GXA_URI',import.meta.env.VITE_GXA_URI)

    return axios
      .post(import.meta.env.VITE_GXA_URI + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(import.meta.env.VITE_GXA_URI  + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();