import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    // For this example we are using the full DOM, but in production we'd stick with shallow.
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});


describe('the textarea', () => {
    beforeEach(() => {
        // simulate the HTML element event (not the React onChange)
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        // Because the setState is asynchronous we cannot wait, so we are going to force the element to re-render.
        wrapped.update();
    });
    
    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('when form is submitted, text area gets emptied', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    
        wrapped.find('form').simulate('submit');
        wrapped.update();
    
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});