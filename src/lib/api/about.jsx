import client from './client';

// withCredentials: True for Cookies
export const get_about = () => {
    return client.get('/api/about');
};

// withCredentials: True for Cookies
export const edit_about = ({ id, editor }) => {
    return client.put('/api/about', { id, editor }, { withCredentials: true });
};
