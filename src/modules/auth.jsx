import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authApi from '../lib/api/auth';

const initialState = {
    login: {
        username: '',
        password: '',
    },
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    auth: null,
    authError: null,
    registerSuccess: null,
    registerError: null,
};

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');

export const chagneInput = createAction(CHANGE_INPUT, ({ form, key, value }) => ({ form: form, key: key, value: value }));
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const login = createAction(LOGIN, ({ username, password }) => ({ username: username, password: password }));
export const register = createAction(REGISTER, ({ username, password }) => ({ username: username, password: password }));

export function* authSaga() {
    yield takeLatest(REGISTER, createRequestSaga(REGISTER, authApi.register));
    yield takeLatest(LOGIN, createRequestSaga(LOGIN, authApi.login));
}

const auth = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: { form, key, value } }) => {
            return produce(state, (draft) => {
                draft[form][key] = value;
            });
        },
        [INITIALIZE_FORM]: (state, { payload: form }) => {
            return produce(state, (draft) => {
                draft[form] = initialState[form];
            });
        },
        [LOGIN_SUCCESS]: (state, { payload: auth }) => {
            return produce(state, (draft) => {
                draft.auth = auth;
                draft.authError = null;
            });
        },
        [LOGIN_FAILURE]: (state, { payload: error }) => {
            return produce(state, (draft) => {
                draft.auth = null;
                draft.authError = error;
            });
        },
        [REGISTER_SUCCESS]: (state, { payload: auth }) => {
            return produce(state, (draft) => {
                draft.registerSuccess = auth;
            });
        },
        [REGISTER_FAILURE]: (state, { payload: error }) => {
            return produce(state, (draft) => {
                draft.registerError = error;
            });
        },
    },
    initialState
);

export default auth;
