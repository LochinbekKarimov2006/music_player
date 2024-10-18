import axios from 'axios';

// Spotify uchun axios instance yaratamiz
const axiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',  // Spotify API bazaviy URL
  timeout: 1000,
});

axiosInstance.interceptors.request.use((config) => {
  // Local storage'dan tokenni olish va so'rovga qo'shish
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers['Authorization'] = token;  // Bearer token qo'shish
  }
  return config;
});

export default axiosInstance;
