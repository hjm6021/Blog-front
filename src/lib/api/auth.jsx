import client from './client';

export const login = ({ username, password }) => {
    return client.post('/auth/login', { username, password }, { withCredentials: true });
};

export const check = () => {
    return client.get('/auth/check', { withCredentials: true });
};

export const logout = () => {
    return client.post('/auth/logout', '', { withCredentials: true });
};
