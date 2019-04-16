import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// it('shows a Comment Box', () => {
//     const div = document.createElement('div');

//     ReactDOM.render(<App />, div);
//     // Check if this div contains the Comment Box or not
//     expect(div.innerHTML).contain('This is Comment Box')
//     // Our App should know that CommentBOx Exist!

//     // expect(div).toHaveAnInstanceOf(CommentBox)

//     ReactDOM.unmountComponentAtNode(div)
// })

// 1 => If there is common setup and common logic write that down into the BeforeEach helper method

let wrapped ;

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('shows a Comment box with Enzyme', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
})


it('shows a CommentList with Enzyme', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})