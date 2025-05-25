import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogWrite() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 실제 저장 로직을 구현할 수 있습니다
        console.log('저장된 글:', { title, content });
        // 저장 후 블로그 목록 페이지로 이동
        navigate('/blog');
    };

    return (
        <div className="blog-write">
            <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows="10"
                    />
                </div>
                <button type="submit">저장하기</button>
            </form>
        </div>
    );
}

export default BlogWrite;
