import React from 'react';
import {shallow} from 'enzyme';


import LoginForm from './login-form';

describe('<LoginForm />', () => {
  it('Passes smoke test', () => {
    shallow(<LoginForm />)
  })
})