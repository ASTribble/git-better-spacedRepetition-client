import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SAVE_QUESTION_RESULT_SUCCESS,
    SAVE_QUESTION_RESULT_ERROR,
    FETCH_NEXT_QUESTION_SUCCESS
} from '../actions/protected-data';


const initialState = {
    data: '',
    error: null,
    savingQuestion: null,
    previousQuestionAnsweredCorrectly: null
};


export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
      return Object.assign({}, state, {
          data: action.data,
          error: null,
          previousQuestionAnsweredCorrectly: null
      });
  } 
  else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
      return Object.assign({}, state, {
          error: action.error, 
          previousQuestionAnsweredCorrectly: null
      });
  }
  else if(action.type === SAVE_QUESTION_RESULT_SUCCESS){
  
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
  } 
  else if (action.type === SAVE_QUESTION_RESULT_ERROR){
    return Object.assign({}, state, {
      saveQuestion: false,
      error: action.error,
      previousQuestionAnsweredCorrectly: null
    });
  } 
  else if (action.type === FETCH_NEXT_QUESTION_SUCCESS){
    return Object.assign({}, state, {
      previousQuestionAnsweredCorrectly: null
    });
  }

  return state;
}

