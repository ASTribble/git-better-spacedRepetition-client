import React from 'react';
import {shallow} from 'enzyme';


import QuestionForm from './question-form';

describe('<QuestionForm />', () => {
  it('Passes smoke test', () => {
    shallow(<QuestionForm />)
  })
})