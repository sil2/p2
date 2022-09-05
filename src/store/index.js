import {createStore} from 'vuex'

import user from '../store/modules/user'
import post from '../store/modules/post'
import { auth } from "./auth.module";
const store = createStore({
    modules: {
        user,
        post,
        auth,
    }
})

export default store
