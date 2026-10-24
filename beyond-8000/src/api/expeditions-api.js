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

export const join = (expeditionId, userId, accessToken) => {
    return request('/participants', 'POST', {
        expedition_id: expeditionId,
        user_id: userId
    },{
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