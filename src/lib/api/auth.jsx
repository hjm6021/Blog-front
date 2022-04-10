import client from './client';

export const login = ({ username, password }) => {
    return client.post('/api/auth/login', { username, password }, { withCredentials: true });
};

export const check = () => {
    return client.get('/api/auth/check', { withCredentials: true });
};

export const logout = () => {
    return client.post('/api/auth/logout', '', { withCredentials: true });
};

export const register = ({ username, password }) => {
    return client.post('/api/auth/register', { username, password }, { withCredentials: true });
};
