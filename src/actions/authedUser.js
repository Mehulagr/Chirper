export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUSer (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}