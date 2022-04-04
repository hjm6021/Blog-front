import styled from 'styled-components';
import Responsive from '../common/Responsive';

const HomeBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const Home = () => {
    return <HomeBlock>Home</HomeBlock>;
};

export default Home;
