import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ImageUploadBlock = styled.div`
    span {
        color: ${palette.cyan[5]};
    }
`;

const ImageUpload = ({ onSelectedImage, onUpload, url }) => {
    return (
        <ImageUploadBlock>
            <span>Image : </span>
            <input type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" name="image" onChange={onSelectedImage}></input>
            <button type="button" onClick={onUpload}>
                Upload
            </button>
            <span style={{ marginLeft: '1rem' }}>{url}</span>
        </ImageUploadBlock>
    );
};

export default ImageUpload;
