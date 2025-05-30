import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트들을 임포트합니다
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogWrite from './pages/BlogWrite';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
    // posts 상태를 상위에서 관리 (localStorage 연동)
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    });

    // 글 추가 함수
    const addPost = (post) => {
        const newPosts = [post, ...posts];
        setPosts(newPosts);
        localStorage.setItem('posts', JSON.stringify(newPosts));
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">홈</Link>
                        </li>
                        <li>
                            <Link to="/blog">블로그 목록</Link>
                        </li>
                        <li>
                            <Link to="/write">글쓰기</Link>
                        </li>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/register">회원가입</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<BlogList posts={posts} />} />
                    <Route path="/write" element={<BlogWrite addPost={addPost} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
