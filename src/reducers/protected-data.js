import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SAVE_QUESTION_RESULT_SUCCESS,
    SAVE_QUESTION_RESULT_ERROR,
    FETCH_NEXT_QUESTION_SUCCESS,
    FETCH_NEXT_QUESTION_ERROR
} from '../actions/protected-data';

const initialState = {
    data: '',
    error: null,
    savingQuestion: null,
    previousQuestionAnsweredCorrectly: null
};


const feedBack = (result, answer) => {
  console.log('the result was ', result, ' and the answer was ', answer)
  let feedback;
  if(answer) feedback = `Good job!`
  else feedback = `Sorry the correct answer was: ${answer}`
  return feedback;
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null,
            previousQuestionAnsweredCorrectly: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error, 
            previousQuestionAnsweredCorrectly: null
        });
    }
    else if(action.type === SAVE_QUESTION_RESULT_SUCCESS){
      console.log('state.data in saveQuestionResult:', state.data);
      if(action.previousQuestionAnsweredCorrectly){
        return Object.assign({}, state, {
          data: {...state.data, timesAsked: state.data.timesAsked + 1, correct: state.data.timesAsked + 1},
          savingQuestion: false,
          previousQuestionAnsweredCorrectly: action.previousQuestionAnsweredCorrectly
        });
      }
      else{
        return Object.assign({}, state, {
          data: {...state.data, timesAsked: state.data.timesAsked + 1},
          savingQuestion: false,
          previousQuestionAnsweredCorrectly: action.previousQuestionAnsweredCorrectly
        });
    }
    } else if (action.type === SAVE_QUESTION_RESULT_ERROR){
      return Object.assign({}, state, {
        saveQuestion: false,
        error: action.error,
        previousQuestionAnsweredCorrectly: null
      });
    } else if (action.type === FETCH_NEXT_QUESTION_SUCCESS){
      return Object.assign({}, state, {
        previousQuestionAnsweredCorrectly: null
      })
    }
    return state;
}

