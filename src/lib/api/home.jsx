import client from './client';

// withCredentials: True for Cookies
export const get_homeInfo = () => {
    return client.get('/api/home');
};

// withCredentials: True for Cookies
export const edit_homeInfo = ({ id, editor }) => {
    return client.put('/api/home', { id, editor }, { withCredentials: true });
};
