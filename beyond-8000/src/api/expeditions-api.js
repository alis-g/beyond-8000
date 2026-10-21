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

function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    };
}