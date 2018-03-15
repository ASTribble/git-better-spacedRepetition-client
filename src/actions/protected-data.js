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
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {console.log(res[0]);
            return dispatch(fetchProtectedDataSuccess(res[0]));
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const sendAnswerResponse = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            'Authorization': `Bearer ${authToken}`,
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({questionId: 3, answer: true})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return dispatch(fetchProtectedData());
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

