import PostList from '../../components/posts/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listPosts } from '../../modules/posts';
import Loading from '../../components/common/Loading';

const PostListContainer = () => {
    const dispatch = useDispatch();
    const { posts, error, loading, user } = useSelector(({ posts, loading, user }) => ({
        posts: posts.posts,
        error: posts.error,
        loading: loading['posts/LIST_POSTS'],
        user: user.user,
    }));

    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);

    return <>{!loading ? <PostList posts={posts} error={error} user={user} /> : <Loading />}</>;
};

export default PostListContainer;
