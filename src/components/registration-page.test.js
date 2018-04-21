import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {RegistrationPage} from './registration-page';

describe('<RegistrationPage/>', () => {

    it('Smoke Test', () => {
        shallow(<RegistrationPage />);
    });
});