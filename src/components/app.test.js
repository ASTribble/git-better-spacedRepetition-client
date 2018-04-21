import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {App} from './app';

describe('<App/>', () => {

    it('Smoke Test', () => {
        shallow(<App/>);
    });
});