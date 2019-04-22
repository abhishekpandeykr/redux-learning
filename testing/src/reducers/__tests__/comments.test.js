import commentReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';


it('should return new State', () => {
    const action = {
        type:SAVE_COMMENT,
        payload:'new Comment'
    };
    expect(commentReducer([], action)).toEqual(['new Comment'])
});

it('should handle action of unknown types', () => {
   const newState =  commentReducer([], {});
   expect(newState).toEqual([])
})