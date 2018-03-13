import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';

export class QuestionForm extends React.Component {

    render() {
        return(
            <form id='question-form'>
                <div id='question-text'>
                </div>
                {feedback}
                <Field
                    component={Input}
                    type='text'
                    name='answer-input'
                    id='answer-input'
                    validate={[required, nonEmpty]}
                />
                <button 
                    type='submit'
                    disabled={this.props.pristine || this.props.submitting}
                >
                Submit Answer
                </button>

            </form>
        )
    }
}
export default reduxForm({
    form: 'question'
})(QuestionForm);