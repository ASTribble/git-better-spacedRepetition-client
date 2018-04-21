import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {RegistrationForm} from './registration-form';

describe('<RegistrationForm/>', () => {

    it('Smoke Test', () => {
        shallow(<RegistrationForm handleSubmit={jest.fn}/>);
    });
});