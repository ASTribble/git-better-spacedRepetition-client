import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import { saveQuestionResult, fetchNextQuestion } from '../actions/protected-data'
/* eslint-disable*/ 
export class QuestionForm extends React.Component {
    onSubmit(values){
      const answer = this.props.answer ===values['answer-input'];
      const id = this.props.questionId; 
      this.props.dispatch(saveQuestionResult(id, answer));
    }

    fetchNextQuestion(values){
      const answerInput = document.querySelector('#answer-input');
      answerInput.value = '';
      this.props.dispatch(fetchNextQuestion());
    }
    render() {
        let nextButton =  <button type="button" onClick={e => this.fetchNextQuestion()}> Next </button>
        
        let feedback = this.props.previousQuestionAnsweredCorrectly
        let submitButton =  <button 
                    type='submit'
                    disabled={this.props.pristine || this.props.submitting || this.props.showNextButton}
                    >
                Submit Answer
                </button>

        return(
            <form name='question-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className='question-text'>
                <h2>{this.props.text}</h2>
                </div>
                {feedback !== null ? feedback ? <p className='feedback'>Correct!</p> :<div> <p className='feedback'>Incorrect.</p> <p className='answer'>The correct answer was: {this.props.answer}</p></div> : ''}
                <Field
                    component={Input}
                    type='text'
                    name='answer-input'
                    id='answer-input'
                    validate={[required, nonEmpty]}
                />
                {feedback === null ? submitButton : ''}
                {feedback !== null ? nextButton : ''}
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
    questionId: state.protectedData.data._id,
    text: state.protectedData.data.question,
    answer: state.protectedData.data.answer,
  previousQuestionAnsweredCorrectly: state.protectedData.previousQuestionAnsweredCorrectly
});

export default reduxForm({
    form: 'question'
})(connect(mapStateToProps)(QuestionForm));