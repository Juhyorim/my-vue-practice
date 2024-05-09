import store from '@/store/index';
​
export function setInterceptors(instance) {
 // 엑시오스 인터셉터
 // 넘겨받은 인스턴스에 인터셉터 정의
 // 요청 전 인터셉터
 instance.interceptors.request.use(
   function(config) {
     // store에 저장된 토큰을 요청 헤더에 싣기
     config.headers.Authorization = store.state.token;
     return config;
  },
   function(error) {
     return Promise.reject(error);
  },
);
​
 // 응답 받기 전 인터셉터
 instance.interceptors.response.use(
   function(response) {
     return response;
  },
   function(error) {
     return Promise.reject(error);
  },
);
 // 인터셉터가 정의된 인스턴스 반환
 return instance;
}