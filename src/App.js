import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RegisterPage from './pages/RegisterPage';
import HomeEditPage from './pages/HomeEditPage';
import PostListPage from './pages/PostListPage';

const App = () => {
    return (
        <div>
            <Helmet>
                <title>Han's Blog</title>
            </Helmet>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home/edit" element={<HomeEditPage />} />
                <Route path="/posts" element={<PostListPage />} />
            </Routes>
        </div>
    );
};

export default App;
