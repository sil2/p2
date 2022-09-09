import { mande } from 'mande'
import { useStorage } from "vue3-storage";
import { defaults } from 'mande'

const storage = useStorage();
defaults.headers.Authorization = 'Bearer ' + storage.getStorageSync('auth_token')

export const apiRequest = {
    get: apiGet(),
    post: apiPost(),
    put: apiPut(),
    delete: apiDelete()
}


function apiGet() {
    return async (url, body) => {
        const api = mande(url)
        return  await  api.get(body);
      //  return handleResponse(response);
    }
}

function apiPost() {
    return async (url, body) => {
        const api = mande(url)
        return  await  api.post(body);
      //  return handleResponse(response);
    }
}

function apiPut() {
    return async (url, body) => {
        const api = mande(url)
        const response = await api.put(body);
        return handleResponse(response);
    }
}

function apiDelete() {
    return async (url, body) => {
        const api = mande(url)
        const response = await api.delete(body);
        return handleResponse(response);
    }
}




async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

console.log('handleResponse(response)',handleResponse(response))
    // check for error response
    if (!response.ok) {
       // const { user, logout } = useAuthStore();
        if ([401, 403].includes(response.status) && user) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            //   logout();
        }

        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
    }

    return data;
    
}

