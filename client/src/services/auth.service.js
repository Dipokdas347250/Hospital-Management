import api from './axios';

export const registerUser = async (payload) => api.post('/auth/register', payload);
export const loginUser = async (payload) => api.post('/auth/login', payload);
export const getMe = async () => api.get('/auth/me');
