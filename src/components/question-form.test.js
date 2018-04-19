import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests';

import {QuestionForm} from './question-form';

describe('<QuestionForm/>', () => {

    it('Smoke Test', () => {
        shallow(<QuestionForm handleSubmit={jest.fn}/>);
    });
});