import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';

const initialState = {
    posts: null,
    error: null,
    tags: [],
};

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes('posts/LIST_POSTS');
const [LIST_TAGS, LIST_TAGS_SUCCESS, LIST_TAGS_FAILURE] = createRequestActionTypes('posts/LIST_TAGS');

export const listPosts = createAction(LIST_POSTS);
export const listTags = createAction(LIST_TAGS);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
const listTagsSaga = createRequestSaga(LIST_TAGS, postsAPI.listTags);

export function* postsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
    yield takeLatest(LIST_TAGS, listTagsSaga);
}

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => {
            return produce(state, (draft) => {
                draft.posts = posts;
            });
        },
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => {
            return produce(state, (draft) => {
                draft.error = error;
            });
        },
        [LIST_TAGS_SUCCESS]: (state, { payload: tags }) => {
            return produce(state, (draft) => {
                draft.tags = tags;
            });
        },
        [LIST_TAGS_FAILURE]: (state, { payload: error }) => {
            return produce(state, (draft) => {
                draft.error = error;
            });
        },
    },
    initialState
);

export default posts;
