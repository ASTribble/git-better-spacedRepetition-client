import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions/v2`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            return dispatch(fetchProtectedDataSuccess(res));
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const SAVE_QUESTION_RESULT_REQUEST = 'SAVE_QUESTION_RESULT_REQUEST';
export const saveQuestionResultRequest = () => ({
  type: SAVE_QUESTION_RESULT_REQUEST,
  savingQuestion: true
});

export const SAVE_QUESTION_RESULT_SUCCESS = 'SAVE_QUESTION_RESULT_SUCCESS';
export const saveQuestionResultSuccess = (previousQuestionAnsweredCorrectly) => ({
  type: SAVE_QUESTION_RESULT_SUCCESS,
  savingQuestion: false,
  previousQuestionAnsweredCorrectly
});


export const SAVE_QUESTION_RESULT_ERROR= 'SAVE_QUESTION_RESULT_ERROR';
export const saveQuestionResultError = (error) => ({
  type: SAVE_QUESTION_RESULT_ERROR,
  savingQuestion: false,
  error
});


export const saveQuestionResult = (questionId, answer) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/questions/v2`, {
      method: 'PUT',
      headers: {
          // Provide our auth token as credentials
          'Authorization': `Bearer ${authToken}`,
          'content-type':'application/json',
          'accept':'application/json'
      },
      body: JSON.stringify({questionId: questionId, answer: answer})
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(res => {
        // if feedback is just a function or outcome of the state
        let previousQuestionAnsweredCorrectly = answer;

          return dispatch(
            saveQuestionResultSuccess(previousQuestionAnsweredCorrectly)
          );
      })
      .catch(err => {
          dispatch(saveQuestionResultError(err));
      });
}

export const FETCH_NEXT_QUESTION_SUCCESS = 'FETCH_NEXT_QUESTION_SUCCESS';
export const fetchNextQuestionSuccess = () => ({
  type: FETCH_NEXT_QUESTION_SUCCESS,
  previousQuestionAnsweredCorrectly: null
});

export const fetchNextQuestion = () => (dispatch, getState) => {
  dispatch(fetchNextQuestionSuccess())
  dispatch(fetchProtectedData());
}

