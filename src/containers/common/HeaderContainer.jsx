import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        try {
            localStorage.removeItem('user');
        } catch (e) {
            console.log('localStorage is not working');
        }
        dispatch(logout());
    };

    return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
