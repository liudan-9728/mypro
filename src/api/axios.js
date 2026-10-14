import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // 设置基础URL
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，比如添加token等
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    // 对响应数据做点什么
    return response; // 直接返回响应数据
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;    