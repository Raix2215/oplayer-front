import {request} from '@/utils/request';

export const login = (data) => request.post('/users/login', data);
export const register = (data) => request.post('/users/reg', data);
export const getLoginStatus = () => request.get('/users/status');
export const updateUserInfo = (data) => request.put('/users/update', data);
export const getUserInfoById = (id) => request.get(`/users/${id}`);