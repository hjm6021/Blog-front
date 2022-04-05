import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import MDEditor from '@uiw/react-md-editor';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;
const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;
const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
`;

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TagsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    .tagLogo {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 2rem;
        margin-right: 1rem;
        margin-top: 0.5rem;
    }
`;

const PostItem = ({ post }) => {
    const { title, body, tags, user, publishedDate, _id } = post;
    return (
        <PostItemBlock>
            <h2>
                <Link to={`/posts/${_id.$oid}`}>{title}</Link>
            </h2>
            <SubInfo user={user} publishedDate={new Date(publishedDate.$date).toLocaleDateString()} />
            <Tags tags={tags} />
            <MDEditor.Markdown style={{ marginTop: '2rem' }} source={body} />
        </PostItemBlock>
    );
};

const PostList = ({ posts, error, user }) => {
    const tags =
        posts &&
        posts
            .map((post) => {
                return post.tags;
            })
            .flat();

    const tagsWithoutDuplication = tags && tags.filter((item, index) => tags.indexOf(item) === index);

    return (
        <PostListBlock>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            <TopWrapper>
                <TagsWrapper>
                    <div className="tagLogo">Tag : </div>
                    {tagsWithoutDuplication && <Tags tags={tagsWithoutDuplication} />}
                </TagsWrapper>
                <WritePostButtonWrapper>
                    {user && user.isAdmin && (
                        <Button cyan to="/write">
                            New Post
                        </Button>
                    )}
                </WritePostButtonWrapper>
            </TopWrapper>
            <div>{posts && posts.map((post) => <PostItem post={post} key={post._id.$oid} />)}</div>
        </PostListBlock>
    );
};

export default PostList;
