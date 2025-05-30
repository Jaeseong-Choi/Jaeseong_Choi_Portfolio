import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hufs-mutsa-13th.store/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// 요청 시 토큰 자동 첨부
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
