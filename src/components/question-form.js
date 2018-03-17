import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import { saveQuestionResult, fetchNextQuestion } from '../actions/protected-data';
import Tracker from './tracker';
import './question-form.css';

export class QuestionForm extends React.Component {

    onSubmit(values, feedback){

        if ( feedback === null){
            const answer = this.props.answer === values['answer-input'];
            const id = this.props.questionId; 
            console.log('submitted line 17');
            return this.props.dispatch(saveQuestionResult(id, answer));
        }
        console.log('did not submit line 20');
        return;
    }

    fetchNextQuestion(values){
        console.log('went to get the next question');
        this.props.dispatch(this.props.reset('questionForm'));
        this.props.dispatch(fetchNextQuestion());
    }

    render() {
        let nextButton =  
            <button 
                type="button" 
                onClick={() => this.fetchNextQuestion()}
            > 
                Next
            </button>
        
        let feedback = this.props.previousQuestionAnsweredCorrectly
        let submitButton =  
            <button 
                type='submit'
                disabled={this.props.pristine || this.props.submitting || this.props.showNextButton}
            >
                Submit Answer
            </button>

        return(
            <form 
                name='questionForm' 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values, feedback))}
            >
                <div className='question-text'>
                <h2 className='question'>{this.props.text}</h2>
                </div>
                {feedback !== null ? feedback ? <div className='feedback-div'> <p className='feedback'>Correct!</p> </div>:<div className='feedback-div'> <p className='feedback'>Incorrect.</p> <p className='answer'>The correct answer was: {this.props.answer}</p></div> : ''}
                
                <Field
                    component={Input}
                    type='text'
                    name='answer-input'
                    id='answer-input'
                    ref={input => this.input = input}
                    className='form-input'
                    validate={[required, nonEmpty]}
                    
                />

                {feedback === null ? submitButton : ''}
                {feedback !== null ? nextButton : ''}
                {feedback !== null ? <Tracker timesAsked={this.props.timesAsked} correct={this.props.correct}/> : ''}
                
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
    questionId: state.protectedData.data._id,
    text: state.protectedData.data.question,
    answer: state.protectedData.data.answer,
    correct: state.protectedData.data.correct,
    timesAsked: state.protectedData.data.timesAsked,
  previousQuestionAnsweredCorrectly: state.protectedData.previousQuestionAnsweredCorrectly
});

export default reduxForm({
    form: 'question'
})(connect(mapStateToProps)(QuestionForm));