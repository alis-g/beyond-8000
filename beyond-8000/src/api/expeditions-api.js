import request from "../utils/requester"

export const getAll = ( accessToken) => {
    return request("/expeditions?order=created_at.desc", "GET", null, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    })
}

export const create = (data, accessToken) => {
    return request('/expeditions', 'POST', data, {
        headers:{
            ...getAuthHeader(accessToken)
        }
    })
}

export const update = async (expeditionId, data, accessToken) =>{
    return request(`/expeditions?id=eq.${expeditionId}`, 'PUT', data, {
        headers:{
            ...getAuthHeader(accessToken)
        }
    })
}

export const remove = async (expeditionId, accessToken) => {
    return await request(`/expeditions?id=eq.${expeditionId}`, 'DELETE', null, {
        headers:{
            ...getAuthHeader(accessToken)
        }
    })
}
function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    };
}