import {SAVE_COMMENT, FETCH_COMMENT} from 'actions/types'

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT :
            return [...state, action.payload]
        case FETCH_COMMENT:
            const res = action.payload.data.map(cmnt => cmnt.name)
            return [...state, ...res];
        default:
            return state
    }
}