

const restUrl = 'https://xjwdjtcpljkqunpicjky.supabase.co/rest/v1'
const authUrl = 'https://xjwdjtcpljkqunpicjky.supabase.co/auth/v1'


async function baseRequest(url, path ='/', method = 'GET', data = null, opt = {}) {
    const options = {
        ...opt,
        headers: {
            ...opt.headers,
            apiKey: import.meta.env.VITE_API_KEY,
            Prefer: 'return=representation'
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

    if(!response.ok){
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