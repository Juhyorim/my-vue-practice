import './assets/main.css'
import { createApp } from 'vue'; // Vue 3에서는 createApp만 가져옵니다.
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Axios 설정
axios.defaults.baseURL = 'http://your-api-url.com';

// Axios 인터셉터 - 요청 설정
axios.interceptors.request.use(
  function(config) {
    // JWT 토큰을 가져오는 로직을 여기에 구현하세요.
    const token = localStorage.getItem('jwtToken'); // 예시: 로컬 스토리지에서 토큰을 가져옵니다.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰을 추가합니다.
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Vue 인스턴스에 Axios를 추가합니다.
const app = createApp(App);

// axios를 Vue 인스턴스에 추가합니다.
app.config.globalProperties.$http = axios;

// router를 Vue 인스턴스에 추가합니다.
app.use(router);

// 앱을 #app 요소에 마운트합니다.
app.mount('#app');