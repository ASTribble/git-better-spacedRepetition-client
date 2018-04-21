import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import Tracker from './tracker';

describe('<Tracker/>', () => {

    it('Smoke Test', () => {
        shallow(<Tracker/>);
    });
});