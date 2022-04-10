import Responsive from '../components/common/Responsive';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import EditorContainer from '../containers/write/EditorContainer';
import { Helmet } from 'react-helmet-async';
import ImageUploadContainer from '../containers/write/ImageUploadContainer';

const PostWritePage = () => {
    return (
        <Responsive>
            <Helmet>
                <title>Write a Post - Han's Blog</title>
            </Helmet>
            <EditorContainer />
            <TagBoxContainer />
            <ImageUploadContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    );
};

export default PostWritePage;
