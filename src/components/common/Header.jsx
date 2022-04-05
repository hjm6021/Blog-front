import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .menu {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
        color: ${palette.cyan[9]};
    }
    .right {
        display: flex;
        align-items: center;
    }
`;
const Spacer = styled.div`
    height: 4rem;
`;
const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        Han's Blog
                    </Link>

                    <Link to="/posts" className="menu">
                        Posts
                    </Link>
                    <Link to="/about" className="menu">
                        AboutMe
                    </Link>
                    {user ? (
                        <div className="right">
                            <UserInfo>
                                {user.username} ({user.isAdmin ? 'ADMIN' : 'USER'})
                            </UserInfo>
                            {user.isAdmin ? <Button to="/register">Register</Button> : null}
                            <Button style={{ marginLeft: '0.75rem' }} onClick={onLogout}>
                                LogOut
                            </Button>
                        </div>
                    ) : (
                        <div className="right">
                            <Button to="/login">LogIn</Button>
                        </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;
