//https://www.bezkoder.com/vue-3-authentication-jwt/

import { mande } from 'mande'
import { useStorage } from "vue3-storage";

const storage = useStorage();

class AuthService {

  getToken(user) {

    //is expired? is exists? ./
    if (storage.hasKey('auth_token')) { // todo expired storage.isExpire('auth_token')
      return storage.getStorageSync('auth_token');
    } else {

      const api = mande('/api/auth/get_token')
      api.options.headers.Authorization = 'Bearer ' + import.meta.env.VITE_GXA_API_TOKEN

      console.log('user',user)
      api.post(user).then(response => {
        if (response.token) {
          storage.setStorageSync('auth_token', response.token);
          return response.token
        } else {
          throw new Error('No useer found');
        }
      });
    }

  }

  async login(user) {
      
      this.getToken(user);

     
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