import api from './api';

// 글 목록 불러오기
export const getPostList = async () => {
    try {
        const res = await api.get('/blog/');
        return res.data;
    } catch (err) {
        console.error('글 목록 불러오기 실패:', err);
        throw err;
    }
};

// 글 상세 조회
export const getPost = async (postId) => {
    try {
        const res = await api.get(`/blog/${postId}/`);
        return res.data;
    } catch (err) {
        console.error('글 상세 조회 실패:', err);
        throw err;
    }
};

// 글 작성
export const createPost = async (title, content) => {
    try {
        const res = await api.post('/blog/', {
            title,
            content,
        });
        return res.data;
    } catch (err) {
        console.error('글 작성 실패:', err);
        throw err;
    }
};

// 글 수정
export const updatePost = async (postId, title, content) => {
    try {
        const res = await api.put(`/blog/${postId}/`, {
            title,
            content,
        });
        return res.data;
    } catch (err) {
        console.error('글 수정 실패:', err);
        throw err;
    }
};

// 글 삭제
export const deletePost = async (postId) => {
    try {
        await api.delete(`/blog/${postId}/`);
    } catch (err) {
        console.error('글 삭제 실패:', err);
        throw err;
    }
};
