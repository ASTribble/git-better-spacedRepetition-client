import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {LoginForm} from './login-form';

describe('<LoginForm/>', () => {

    it('Smoke Test', () => {
        shallow(<LoginForm handleSubmit={jest.fn}/>);
    });
});