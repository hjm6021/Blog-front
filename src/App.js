import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RegisterPage from './pages/RegisterPage';
import HomeEditPage from './pages/HomeEditPage';
import PostListPage from './pages/PostListPage';
import PostWritePage from './pages/PostWritePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import AboutEditPage from './pages/AboutEditPage';

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
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about/edit" element={<AboutEditPage />} />
                <Route path="/posts" element={<PostListPage />} />
                <Route path="/posts/write" element={<PostWritePage />} />
                <Route path="/posts/:postId" element={<PostPage />} />
            </Routes>
        </div>
    );
};

export default App;
