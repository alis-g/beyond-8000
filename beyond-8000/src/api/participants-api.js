import request from "../utils/requester"

export const getAll = () => request('/participants', 'GET')


export const join = (expeditionId, userId) => {
    return request('/participants', 'POST', {
        expedition_id: expeditionId,
        user_id: userId
    })
}

export const remove = (expeditionId, userId) => {
    return request(
        `/participants?expedition_id=eq.${expeditionId}&user_id=eq.${userId}`,
        'DELETE'
    )
}
