import {ONE_ABILITY, LOAD_ERROR} from '../action/types'

const INITIAL_STATE = {
    abilities:{},
    errorMessage:null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ONE_ABILITY:
            return {...state, data:action.payload}
        case LOAD_ERROR:
            return {...state, data:action.payload}
        default:
            return state
    }
} 