import client from './client';

export const uploadImage = (formData) => {
    return client.post('/api/images', formData);
};
