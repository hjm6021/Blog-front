import PostList from '../../components/posts/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listPosts, listTags } from '../../modules/posts';
import Loading from '../../components/common/Loading';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

const PostListContainer = () => {
    const dispatch = useDispatch();
    const { posts, error, loading, user, tags } = useSelector(({ posts, loading, user }) => ({
        posts: posts.posts,
        tags: posts.tags,
        error: posts.error,
        loading: loading['posts/LIST_POSTS'],
        user: user.user,
    }));
    const location = useLocation();

    useEffect(() => {
        dispatch(listTags());
    }, [dispatch]);

    useEffect(() => {
        const { tag } = qs.parse(location.search, { ignoreQueryPrefix: true });
        dispatch(listPosts({ tag }));
    }, [dispatch, location]);

    return <>{!loading ? <PostList tags={tags} posts={posts} error={error} user={user} /> : <Loading />}</>;
};

export default PostListContainer;
