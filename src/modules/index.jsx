import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import { all } from 'redux-saga/effects';
import home, { homeSaga } from './home';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    home,
    posts,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), homeSaga(), postsSaga()]);
}

export default rootReducer;
