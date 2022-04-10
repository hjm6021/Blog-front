import client from './client';

export const uploadImage = (formData) => {
    return client.post('/images', formData);
};
