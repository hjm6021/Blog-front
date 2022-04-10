import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as aboutAPI from '../lib/api/about';

const initialState = {
    id: null,
    description: '',
    aboutError: null,
};

const [GET_ABOUT, GET_ABOUT_SUCCESS, GET_ABOUT_FAILURE] = createRequestActionTypes('home/GET_ABOUT');

export const getAbout = createAction(GET_ABOUT);

export function* aboutSaga() {
    yield takeLatest(GET_ABOUT, createRequestSaga(GET_ABOUT, aboutAPI.get_about));
}

const about = handleActions(
    {
        [GET_ABOUT_SUCCESS]: (state, { payload: about }) => {
            return produce(state, (draft) => {
                draft.id = about._id;
                draft.description = about.description;
                draft.aboutError = null;
            });
        },
        [GET_ABOUT_FAILURE]: (state, { payload: error }) => {
            return produce(state, (draft) => {
                draft.id = null;
                draft.description = '';
                draft.aboutError = error;
            });
        },
    },
    initialState
);

export default about;
