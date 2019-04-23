import {FETCH_DATA, LOAD_ERROR} from '../action/types'

const INITIAL_STATE = {
    data: [],
    errorMessage: null
}
export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_DATA:
            return{...state, data: action.payload}
        case LOAD_ERROR:
            return {...state, data:action.payload};
        default:
            return state;
    }
}