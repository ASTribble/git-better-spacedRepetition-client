import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SAVE_QUESTION_RESULT_SUCCESS,
    SAVE_QUESTION_RESULT_ERROR
} from '../actions/protected-data';

const initialState = {
    data: '',
    error: null,
    savingQuestion: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    else if(action.type === SAVE_QUESTION_RESULT_SUCCESS){
      return Object.assign({}, state, {
        savingQuestion: false
      });
    } else if (action.type === SAVE_QUESTION_RESULT_ERROR){
      return Object.assign({}, state, {
        saveQuestion: false,
        error: action.error
      });
    }
    return state;
}

