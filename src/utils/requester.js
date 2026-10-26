

const restUrl = import.meta.env.VITE_SUPABASE_REST_URL
const authUrl = import.meta.env.VITE_SUPABASE_AUTH_URL


async function baseRequest(url, path ='/', method = 'GET', data = null, opt = {}) {
    const options = {
        ...opt,
        headers: {
            ...opt.headers,
            apiKey: import.meta.env.VITE_API_KEY,
            Prefer: 'return=representation',
            ...getAuthHeader()
        },
        
    }

    if(method !== "GET"){
        options.method = method
    }

    if(data){
        options.headers["Content-Type"] = "application/json"
        options.body = JSON.stringify(data)
    }

    const response = await fetch(`${url}${path}`, options)

    if (!response.ok) {
    if (response.status === 401) {
        localStorage.removeItem("auth");
        window.location.href = "/login";
    }

    throw new Error(`HTTP error! status: ${response.status}`)
}
    if(response.status === 204){
        return null
    }
    

    return response.json()
}

export default async function request(path='/', method = "GET", data = null, opt = {}) {
    return baseRequest(restUrl, path, method, data, opt)
}

export const authRequest = async(path='/', method = "GET", data = null, opt = {}) => {
    
    return baseRequest(authUrl, path, method, data, opt)
}

function getAuthHeader() {
    const auth = localStorage.getItem("auth");
    const accessToken = auth ? JSON.parse(auth)?.access_token : null;

    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    };
}
