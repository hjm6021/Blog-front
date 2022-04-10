import styled from 'styled-components';
import Responsive from '../common/Responsive';
import MDEditor from '@uiw/react-md-editor';
import ActionButtons from '../../containers/about/ActionButtons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { edit_about } from '../../lib/api/about';

const AboutEditBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AboutEdit = ({ description }) => {
    const [editor, setEditor] = useState(description);
    const [error, setError] = useState(null);

    const { id } = useSelector(({ about }) => ({ id: about.id }));
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate(-1);
    };
    const onClickEdit = async () => {
        try {
            await edit_about({ id, editor });
            setError(null);
            navigate('/about');
        } catch (error) {
            if (!error.status) {
                setError('Internet Connection Failed');
            }
            if (error.response.status === 401) {
                setError('Authentication Failed');
            } else if (error.response.status === 403) {
                setError('No Permission');
            }
        }
    };
    return (
        <AboutEditBlock>
            <MDEditor height={700} value={editor} onChange={setEditor} />
            <ActionButtons onClickBack={onClickBack} onClickEdit={onClickEdit} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </AboutEditBlock>
    );
};

export default AboutEdit;
