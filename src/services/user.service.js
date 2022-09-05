


import axios from 'axios';
import authHeader from './auth-header';
class UserService {
  getPublicContent() {
    console.log('getPublicContent GXA_URI',import.meta.env.GXA_URI)

    return axios.get(import.meta.env.GXA_URI  + 'all');
  }
  getUserBoard() {
    console.log('getUserBoard GXA_URI',import.meta.env.GXA_URI)

    return axios.get(import.meta.env.GXA_URI  + 'user', { headers: authHeader() });
  }
  
}
export default new UserService();