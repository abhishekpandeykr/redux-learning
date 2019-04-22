import React from 'react'
import {mount} from 'enzyme';
import moxios from 'moxios'
import Root from 'Root';
import App from 'components/App';


beforeEach(() => {
    // before the button is clicked stopped the any axios request
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status:200,
        response:[{name:'fetch Number1'}, {name:'Fetch number2'}]
    })
});

afterEach(() => {
    moxios.uninstall();
})


it('can fetch list of items and render them', (done) => {
    // Attempt to render the entiire app

    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    
    // Find the fetch button and clicks it
    wrapped.find('.fetch-comment').simulate('click')

    // Expect to find a list of comments
    moxios.wait(() => {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2);
        done();
        // this done funtion will tell we are done with the test, execute it
        wrapped.unmount();
    })
    
})