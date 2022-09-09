
//https://www.bezkoder.com/vue-3-authentication-jwt/

import { useUserStore } from '@/stores/user.store'
import { storeToRefs } from 'pinia'
import { mande } from 'mande'
import AuthService from '@/services/auth.service'
import { useStorage } from "vue3-storage";
import { reactive } from 'vue'
import { apiRequest } from '@/helpers/api-request';

const storage = useStorage();

class UserService {

  get() {

    try {   

    //  const { user } = storeToRefs(useUserStore())
      const user = useUserStore()
    // const  user  = storeToRefs(useUserStore())
      console.log('UserService 1 ', user)
      // console.log('UserService 2 ', user.$state)
      AuthService.getToken();

      if (user.logged_in == 0) {
      console.log('ApiRequest')

      apiRequest.get('/api/get').then(response => {

        console.log('UserService 3 response ', response)
        /* * /
         user.$patch({
           data: response,
           logged_in: 1,
         })
         /**/

        user.data = response
        user.logged_in = 1
        /**/
        console.log('UserService 4', user)


        console.log('UserService get 2', user)
        // return user;
      }
      )

      // showTooltip(`Welcome back ${this.userData.name}!`)
       }
    } catch (error) {

      console.log('error', error)
      //  showTooltip(error)
      // let the form component display the error
      return error
    }
  }
}

export default new UserService();