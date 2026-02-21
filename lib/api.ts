import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8091';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || 'dev-insights-key-2026';

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error('Erro de autenticação: API Key inválida');
        }
        return Promise.reject(error);
    }
);
