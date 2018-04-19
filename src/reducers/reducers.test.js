import protectedDataReducer from './protected-data';
import {
    fetchProtectedDataSuccess, 
    fetchProtectedDataError,
    saveQuestionResultSuccess,
    saveQuestionResultError,
    fetchNextQuestionSuccess
} from '../actions/protected-data';

describe('protectedDataReducer', () => {

    const question = {
        question: 'question 0',
        answer: 'answer 0',
        next: 1,
        timesAsked: 4,
        correct: 3
        }


    it('Should set initial state when nothing is passed in', () => {
        const state = protectedDataReducer(undefined, {type: '_NO_ACTION'});
        expect(state).toEqual(
            {
                data: '',
                error: null,
                savingQuestion: null,
                previousQuestionAnsweredCorrectly: null
            }
        );
    });

    it('Should return the current state on an unknown action', () => {
        const currentState = {};
        const state = protectedDataReducer(currentState, {type: '_UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('fetchProtectedDataSuccess', () => {

        it('Should add data', () => {
            let state;
            state = protectedDataReducer(state, fetchProtectedDataSuccess(question));
            expect(state.data).toEqual(question);
        });
    });

    describe('fetchProtectedDataSuccess', () => {

        it('Should add data', () => {
            let state;
            state = protectedDataReducer(state, fetchProtectedDataSuccess(question));
            expect(state.data).toEqual(question);
        });
    });

    describe('fetchProtectedDataError', () => {

        it('Should add and error', () => {
            let state;
            const error = 'It all went terribly wrong.';

            state = protectedDataReducer(state, fetchProtectedDataError(error));
            expect(state.error).toEqual(error);
        });
    });

    describe('saveQuestionResultSuccess', () => {

        it('Should increase timesAsked', () => {
            let state = {
                data: {timesAsked: 2}
            }
            state = protectedDataReducer(state, saveQuestionResultSuccess(true));
            expect(state.data.timesAsked).toEqual(3);
        });

        it('Should increase correct if true', () => {
            let state = {
                data: {correct: 2}
            }
            state = protectedDataReducer(state, saveQuestionResultSuccess(true));
            expect(state.data.correct).toEqual(3);
        });

        it('Should not increase correct if false', () => {
            let state = {
                data: {correct: 2}
            }
            state = protectedDataReducer(state, saveQuestionResultSuccess(false));
            expect(state.data.correct).toEqual(2);
        });

    });

    describe('saveQuestionResultError', () => {

        it('Should set an error', () => {
            
            const error = 'It is worse than you think.';
            let state;

            state = protectedDataReducer(state, saveQuestionResultError(error));
            expect(state.error).toEqual(error);
        });
    });

    describe('fetchNextQuestionSuccess', () => {

        it('Should set previousQuestionAnsweredCorrectly to null', () => {
            let state;
            state = protectedDataReducer(state, fetchNextQuestionSuccess());
            expect(state.previousQuestionAnsweredCorrectly).toEqual(null);
        });
    });

});