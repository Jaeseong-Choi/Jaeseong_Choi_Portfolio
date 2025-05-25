import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트들을 임포트합니다
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogWrite from './pages/BlogWrite';

function App() {
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
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/write" element={<BlogWrite />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
