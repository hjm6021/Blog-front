import client from './client';
import qs from 'qs';

export const listPosts = ({ tag }) => {
    const queryString = qs.stringify({
        tag,
    });
    return client.get(`/api/posts?${queryString}`);
};

export const writePost = ({ title, body, tags }) => {
    return client.post('/api/posts', { title, body, tags }, { withCredentials: true });
};

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const updatePost = ({ id, title, body, tags }) => {
    return client.patch(`/api/posts/${id}`, { title, body, tags }, { withCredentials: true });
};
export const removePost = (id) => {
    return client.delete(`/api/posts/${id}`, { withCredentials: true });
};

export const listTags = () => {
    return client.get('/api/tags');
};
