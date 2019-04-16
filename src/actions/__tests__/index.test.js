import  {SAVE_COMMENT} from "actions/types";
import {saveComment} from 'actions'

describe('action block', () => {
  it('has a correct Type', () => {
      const action = saveComment();
      expect(action.type).toEqual(SAVE_COMMENT)
  });


  it('has a correct Payload', () => {
      const action = saveComment('New Comment');
      expect(action.payload).toEqual('New Comment')
  })
})
