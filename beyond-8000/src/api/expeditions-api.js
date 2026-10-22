import request from "../utils/requester"

export const getAll = () => {
    
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
function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    };
}