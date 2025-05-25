import React from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
    // 임시 데이터
    const posts = [
        {
            id: 1,
            title: '첫 번째 블로그 포스트',
            date: '2024-03-20',
            summary: '이것은 첫 번째 블로그 포스트의 요약입니다.',
        },
        {
            id: 2,
            title: '두 번째 블로그 포스트',
            date: '2024-03-21',
            summary: '이것은 두 번째 블로그 포스트의 요약입니다.',
        },
    ];

    return (
        <div className="blog-list">
            <h1>블로그 글 목록</h1>
            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h2>{post.title}</h2>
                        <p className="date">{post.date}</p>
                        <p className="summary">{post.summary}</p>
                        <Link to={`/blog/${post.id}`}>자세히 보기</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;
