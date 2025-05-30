import api from './api';

// 회원가입
export const register = async (username, email, password) => {
    try {
        const response = await api.post('/dj/registration/', {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('회원가입 에러:', error.response?.data || error.message);
        throw error;
    }
};

// 로그인
export const login = async (username, password) => {
    try {
        const response = await api.post('/dj/login/', {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('로그인 에러:', error.response?.data || error.message);
        throw error;
    }
};

// 로그아웃
export const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
};

// 현재 로그인 상태 확인
export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};
