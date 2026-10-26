import request from "../utils/requester"

export const getAll = () => request("/expeditions?order=created_at.desc", "GET")

export const create = (data) =>  request('/expeditions', 'POST', data)

export const update = async (expeditionId, data) =>request(`/expeditions?id=eq.${expeditionId}`, 'PUT', data)

export const remove = async (expeditionId) => await request(`/expeditions?id=eq.${expeditionId}`, 'DELETE')
