import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';

export class QuestionForm extends React.Component {


    render() {
        let feedback;
        if (this.props.feedback){
            feedback = <div className='feedback'>{this.props.feedback}</div>
        }
        return(
            <form id='question-form'>
                <div className='question-text'>
                Question:
                {this.props.text}
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

const mapStateToProps = (state, props) => ({
    text: state.protectedData.data.text,
    answer: state.protectedData.data.answer
});

export default reduxForm({
    form: 'question'
})(connect(mapStateToProps)(QuestionForm));