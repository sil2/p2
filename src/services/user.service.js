
//https://www.bezkoder.com/vue-3-authentication-jwt/

import { useUserStore } from '@/stores/user.store'
import { useStorage } from "vue3-storage";
import { apiRequest } from '@/helpers/api-request';

const storage = useStorage();

class UserService {

  async get() {

    try {

      const user = useUserStore()
      if (user.logged_in == 0) {
        console.log('user.service.js request started ', storage.getStorageSync('auth_token'))

        const response = await apiRequest.get('/api/get')
        console.log('UserService 3 response ', response)

        user.data = response
        user.logged_in = 1

        return user
      }
    } catch (error) {

      console.log('user.service.js (29) error', error);

      throw error
    }
  }
}

export default new UserService();