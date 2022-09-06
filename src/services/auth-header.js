//https://www.bezkoder.com/vue-3-authentication-jwt/
import { useStorage } from "vue3-storage";
const storage = useStorage();

export default function authHeader() {
      return { Authorization: 'Bearer ' +  storage.getStorageSync('auth_token') };
  }
  