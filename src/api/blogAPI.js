import axios from 'axios';

// 인증 없이 사용할 axios 인스턴스 생성
const publicApi = axios.create({
    baseURL: 'https://hufs-mutsa-13th.store/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 글 목록 불러오기
export const getPostList = async () => {
    try {
        const response = await publicApi.get('/blog/');
        return response.data;
    } catch (error) {
        console.error('게시글 목록 조회 에러:', error.response?.data || error.message);
        throw error;
    }
};

// 글 상세 조회
export const getPost = async (id) => {
    try {
        const response = await publicApi.get(`/blog/${id}/`);
        return response.data;
    } catch (error) {
        console.error('게시글 조회 에러:', error.response?.data || error.message);
        throw error;
    }
};

// 글 작성 (인증 없이)
export const createPost = async (title, content) => {
    try {
        const response = await publicApi.post('/blog/', {
            title,
            content,
        });
        return response.data;
    } catch (error) {
        console.error('게시글 작성 에러:', error.response?.data || error.message);
        throw error;
    }
};

// 글 수정 (이 부분은 인증 필요할 수 있으니 기존대로 둡니다)
export const updatePost = async (id, title, content) => {
    try {
        const response = await publicApi.put(`/blog/${id}/`, {
            title,
            content,
        });
        return response.data;
    } catch (error) {
        console.error('게시글 수정 에러:', error.response?.data || error.message);
        throw error;
    }
};

// 글 삭제 (이 부분도 인증 필요할 수 있으니 기존대로 둡니다)
export const deletePost = async (id) => {
    try {
        const response = await publicApi.delete(`/blog/${id}/`);
        return response.data;
    } catch (error) {
        console.error('게시글 삭제 에러:', error.response?.data || error.message);
        throw error;
    }
};
