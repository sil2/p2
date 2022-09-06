
//https://www.bezkoder.com/vue-3-authentication-jwt/

import axios from 'axios';
import authHeader from './auth-header';
class UserService {
  getPublicContent() {

    return axios.get(import.meta.env.VITE_GXA_URI  + 'all');
  }
  getUserBoard() {

    return axios.get(import.meta.env.VITE_GXA_URI  + 'user', { headers: authHeader() });
  }
  
}
export default new UserService();