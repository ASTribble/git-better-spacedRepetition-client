import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {HeaderBar} from './header-bar';

describe('<HeaderBar/>', () => {

    it('Smoke Test', () => {
        shallow(<HeaderBar/>);
    });
});