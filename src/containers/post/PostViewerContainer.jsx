import PostViewer from '../../components/posts/PostViewer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { readPost, unloadPost } from '../../modules/post';
import PostActionButtons from '../../components/posts/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { useNavigate } from 'react-router-dom';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer = () => {
    const postId = useParams().postId;
    const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
        user: user.user,
    }));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(readPost(postId));
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    const onEdit = () => {
        dispatch(setOriginalPost(post));
        navigate('/posts/write');
    };

    const onRemove = async () => {
        try {
            await removePost(postId);
            navigate('/posts');
        } catch (e) {
            console.log(e);
        }
    };

    const isAdmin = user && user.isAdmin;
    return <PostViewer post={post} error={error} loading={loading} actionButtons={isAdmin && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />} />;
};

export default PostViewerContainer;
