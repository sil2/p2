import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state: () => ({
        data: {},
        logged_in: 0
    })
    
});
