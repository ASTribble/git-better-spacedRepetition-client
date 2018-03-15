import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import {checkAnswer} from '../helper-functions';
import { sendAnswerResponse} from '../actions/protected-data';

export class QuestionForm extends React.Component {
    onSubmit(values){
        this.props.dispatch(sendAnswerResponse());
        checkAnswer(values['answer-input']);
    }

    render() {
        let feedback;
        let question;
        if (this.props.loading){
            question = 'Loading question...'
        }else {
            question = this.props.question
        }
        if (this.props.feedback){
            feedback = <div className='feedback'>
                <h2>{this.props.feedback}</h2>
                </div>
        }
        return(
            <form name='question-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className='question-text'>
                <h2>{question}</h2>
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
    question: state.protectedData.data.question,
    answer: state.protectedData.data.answer,
    loading: state.protectedData.loading
});

export default reduxForm({
    form: 'question'
})(connect(mapStateToProps)(QuestionForm));