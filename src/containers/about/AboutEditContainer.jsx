import { useSelector } from 'react-redux';
import AboutEdit from '../../components/about/AboutEdit';

const AboutEditContainer = () => {
    const { description } = useSelector(({ about }) => ({
        description: about.description,
    }));

    return (
        <>
            <AboutEdit description={description} />
        </>
    );
};

export default AboutEditContainer;
