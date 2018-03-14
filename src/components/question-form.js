import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
/* eslint-disable*/ 
export class QuestionForm extends React.Component {
    onSubmit(values){
      this.checkAnswer(values['answer-input'])
    }

    //doesn't technically check an answer 
    checkAnswer(userAnswer=false){
      this.dispatch(saveQuestionResult((this.props.answer === userAnswer), this.props.id));
    }

    render() {
        let feedback;
        if (this.props.feedback){
            feedback = <div className='feedback'>
                <h2>{this.props.feedback}</h2>
                </div>
        }
        return(
            <form name='question-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className='question-text'>
                <h2>{this.props.text}</h2>
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
    questionId: state.protectedData.data.id,
    text: state.protectedData.data.question,
    answer: state.protectedData.data.answer
});

export default reduxForm({
    form: 'question'
})(connect(mapStateToProps)(QuestionForm));