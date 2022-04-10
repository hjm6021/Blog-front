import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/common/Loading';
import About from '../../components/about/About';
import { getAbout } from '../../modules/about';

const AboutContainer = () => {
    const dispatch = useDispatch();
    const { user, description, aboutError, loading } = useSelector(({ user, about, loading }) => ({
        user: user.user,
        description: about.description,
        aboutError: about.aboutError,
        loading: loading['about/GET_ABOUT'],
    }));

    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch]);

    return <>{loading ? <Loading /> : <About user={user} description={description} homeInfoError={aboutError} />}</>;
};

export default AboutContainer;
