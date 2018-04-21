import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {Dashboard} from './dashboard';

describe('<Dashboard/>', () => {

    it('Smoke Test', () => {
        shallow(<Dashboard dispatch={jest.fn}/>);
    });
});