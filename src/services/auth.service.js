//https://www.bezkoder.com/vue-3-authentication-jwt/

import { mande } from 'mande'
import { useStorage } from "vue3-storage";
import router from '@/router'

const storage = useStorage();

class AuthService {


  async getToken(user) {

    try {

      if (storage.hasKey('auth_token')) { // todo expired storage.isExpire('auth_token')
        return storage.getStorageSync('auth_token');
      } else {

        const api = mande('/api/auth/get_token')
        api.options.headers.Authorization = 'Bearer ' + import.meta.env.VITE_GXA_API_TOKEN


        const data = await api.post(user)

        console.log('getToken ', data)
        storage.setStorageSync('auth_token', data.token);
        return data.token

      }
    } catch (error) {
      console.log('getToken error', error)
      reject(error)
    }

  }

  logout() {
    storage.removeStorageSync('auth_token');

    router.push("/login");
  }

  register(user) {

  }
}
export default new AuthService();