import {AUTH_USER, AUTH_ERROR} from '../action/types'

const INITIAL_STATE = {
    authenticated: null,
    errorMessage: null
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {...state, authenticated:action.payload}
        case AUTH_ERROR:
            return {...state, errorMessage:action.payload}
        default:
            return state
    }
}