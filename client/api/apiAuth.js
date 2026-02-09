import axiosInstance from '../utils/axiosConfig';

export const authAPI = {
  login: async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },
  
  register: async (userData) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  },
  
  logout: async () => {
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
  },
  
  getProfile: async () => {
    const response = await axiosInstance.get('/auth/profile');
    return response.data;
  },
  
  // Add more API calls as needed
};