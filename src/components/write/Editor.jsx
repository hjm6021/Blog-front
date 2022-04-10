import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';

const EditorBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 3rem;
`;
const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[4]};
    margin-bottom: 2rem;
    width: 100%;
`;

const Editor = ({ title, body, onChangeField }) => {
    const [editor, setEditor] = useState(body);

    const onChangeTitle = (e) => {
        onChangeField({ key: 'title', value: e.target.value });
    };

    useEffect(() => {
        onChangeField({ key: 'body', value: editor });
    }, [editor, onChangeField]);

    return (
        <EditorBlock>
            <TitleInput placeholder="TITLE" value={title} onChange={onChangeTitle} />
            <MDEditor height={500} value={editor} onChange={setEditor} />
        </EditorBlock>
    );
};

export default Editor;
