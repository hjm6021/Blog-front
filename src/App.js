import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const App = () => {
    return (
        <div>
            <Helmet>
                <title>Han's Blog</title>
            </Helmet>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default App;
