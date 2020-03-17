import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and a button', () => {
    // For this example we are using the full DOM, but in production we'd stick with shallow.
    wrapped = mount(<CommentBox />);
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
    // simulate the HTML element event (not the React onChange)
    wrapped.find('textarea').simulate('change', {
        target: { value: 'hello word!' }
    });

    // Because the setState is asynchronous we cannot wait, so we are going to force the element to re-render.
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('hello word!');
});