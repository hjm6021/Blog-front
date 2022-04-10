import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import { all } from 'redux-saga/effects';
import home, { homeSaga } from './home';
import posts, { postsSaga } from './posts';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import about, { aboutSaga } from './about';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    home,
    posts,
    write,
    post,
    about,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), homeSaga(), postsSaga(), writeSaga(), postSaga(), aboutSaga()]);
}

export default rootReducer;
