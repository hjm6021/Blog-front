import ImageUpload from '../../components/write/ImageUpload';
import { useState } from 'react';
import { uploadImage } from '../../lib/api/image';

const ImageUploadContainer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [url, setUrl] = useState(null);

    const onSelectedImage = (e) => {
        setSelectedImage(e.target.files[0]);
        setUrl(null);
    };

    const onUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedImage);
        try {
            const response = await uploadImage(formData);
            setUrl(response.data);
            setSelectedImage(null);
        } catch (e) {
            if (e.response.status === 409) {
                setUrl('Change the file name.');
                return;
            }
            setUrl('Error!');
        }
    };

    return (
        <>
            <ImageUpload onSelectedImage={onSelectedImage} onUpload={onUpload} url={url} />
        </>
    );
};

export default ImageUploadContainer;
