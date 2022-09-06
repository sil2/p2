//https://www.bezkoder.com/vue-3-authentication-jwt/

import axios from 'axios';
import { useStorage } from "vue3-storage";
import authHeader from './auth-header';

const storage = useStorage();

class AuthService {

  getToken(user) {

    //is expired? is exists? ./
    if (storage.hasKey('auth_token')) { // todo expired storage.isExpire('auth_token')
      return storage.getStorageSync('auth_token');
    } else {
      return axios
        .post('/api/auth/get_token', {
          email: user.email,
          password: user.password
        }, { headers: { Authorization: 'Bearer ' + (import.meta.env.VITE_GXA_API_TOKEN) } })
        .then(response => {


          if (response.data.token) {
            storage.setStorageSync('auth_token', response.data.token);
          }

          //return response.data;
        });
    }

  }
  
  async login(user) {

    this.getToken(user);
    //getToken();
    //1 set request to get the token.
    //2 save token into local storage.
    //3 autorisationv request////
    //console.log('VITE_GXA_URI',import.meta.env.VITE_GXA_URI)
    console.log('auth_token',storage.getStorageSync('auth_token'))

    const response = await axios
      .get('/api/get',{ headers: authHeader() });
    if (response.data) {
      console.log('/api/get',response.data)
      storage.setStorageSync('user', JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    storage.removeStorageSync('user');
    storage.removeStorageSync('user');
  }
  register(user) {
    return axios.post(import.meta.env.VITE_GXA_URI + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();