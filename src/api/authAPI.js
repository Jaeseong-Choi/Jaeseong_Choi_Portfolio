import api from './api';

// 회원가입
export const register = async (username, email, password) => {
    try {
        const res = await api.post('/dj/registration/', {
            username,
            email,
            password,
        });
        return res.data;
    } catch (err) {
        console.error('회원가입 실패:', err);
        throw err;
    }
};

// 로그인
export const login = async (username, password) => {
    try {
        const res = await api.post('/dj/login/', {
            username,
            password,
        });

        // 토큰 저장
        localStorage.setItem('token', res.data.access);
        return res.data;
    } catch (err) {
        console.error('로그인 실패:', err);
        throw err;
    }
};
