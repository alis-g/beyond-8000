import { authRequest } from "../utils/requester"


export const register = async({email, password}) => {
    return authRequest('/signup', 'POST', {email, password})
}