import React from 'react';
import {shallow} from 'enzyme';


import {Dashboard} from './dashboard';

describe('<Dashboard />', () => {
  it('Passes smoke test', () => {
    const callback = jest.fn;
    this.props.dispatch = callback;
    shallow(<Dashboard />)
  })
})