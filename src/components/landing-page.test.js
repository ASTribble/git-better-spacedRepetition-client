import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {LandingPage} from './landing-page';

describe('<LandingPage/>', () => {

    it('Smoke Test', () => {
        shallow(<LandingPage/>);
    });
});