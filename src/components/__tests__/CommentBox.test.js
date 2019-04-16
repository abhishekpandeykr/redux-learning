import React from 'react';
import {mount} from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped
// Crete a Fake DOM for testing each It Statement
beforeEach(() => {
     // mount returns the fake DOM which is created by jsdom
     wrapped = mount(
         <Root>
             <CommentBox />
         </Root>
     );
});

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('This textarea', () => {

    beforeEach(() => {
                // find the text area, simulate an event on textarea,
        // while triggering the event it should be html event
        // we have passed the target.value as change event of input
        wrapped.find('textarea').simulate('change', {
            target:{value:'new Comment'}
        })

    })
    it('has a input where users can type in', () => {
        // after simultating the update . re-render the component uisng enzyme's update;
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new Comment')
    });

    it('when form is submitted text area get emptied', () => {
        // wrapped.find('textarea').simulate('change', {
        //     target:{value:'new Comment'}
        // })

        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })

})