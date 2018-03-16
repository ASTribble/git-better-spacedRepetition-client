import React from 'react';
import {shallow} from 'enzyme';


import HeaderBar from './header-bar';

describe('<HeaderBar />', () => {
  it('Passes smoke test', () => {
    shallow(<HeaderBar />)
  })
})