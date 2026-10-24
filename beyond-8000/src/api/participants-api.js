import request from "../utils/requester"

export const getAll = (accessToken) => {
    return request.apply('/participants', 'GET', null), {
        headers: {
            ...getAuthHeader(accessToken)
        }
    }
}

export const join = (expeditionId, userId, accessToken) => {
    return request('/participants', 'POST', {
        expedition_id: expeditionId,
        user_id: userId
    }, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    })
}

export const remove = (expeditionId, userId, accessToken) => {
    return request(
        `/participants?expedition_id=eq.${expeditionId}&user_id=eq.${userId}`,
        'DELETE',
        null,{
            headers:{
                ...getAuthHeader(accessToken)
            }
        }
    )
}
function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    }
}