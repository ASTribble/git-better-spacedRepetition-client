import React from 'react';
import {shallow} from 'enzyme';


import LandingPage from './landing-page';

describe('<LandingPage />', () => {
  it('Passes smoke test', () => {
    shallow(<LandingPage />)
  })
})