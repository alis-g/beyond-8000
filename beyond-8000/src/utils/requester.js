const BASE_URL = 'https://xjwdjtcpljkqunpicjky.supabase.co/rest/v1/'


export async function request(path ='/', method = 'GET', data = null, opt = {}) {
    const options = {
        headers: {
            apiKey: import.meta.env.VITE_API_KEY
        },
        ...opt
    }

    if(method !== "GET"){
        options.method = method
    }

    if(data){
        options.headers["Content-Type"] = "application/json"
        options.body = JSON.stringify(data)
    }

    const response = await fetch(`${BASE_URL}${path}`, options)

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    if (response.status === 204){
        return null
    }
    return response.json()
}