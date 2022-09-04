import {createStore} from 'vuex'

import user from '../store/modules/user'
import post from '../store/modules/post'

const store = createStore({
    modules: {
        user,
        post
    }
})

export default store