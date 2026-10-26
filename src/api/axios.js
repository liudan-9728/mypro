import axios from 'axios'


// 设置请求头，请求地址，请求配置等
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // 设置基础URL
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log('--request--',config)
    // 在发送请求之前做些什么，比如添加token等
    // 1、非上传接口包装入参为 {content：any} 
    // 2、导出接口设置请求类型为blob，responseType='blob'，返回二进制文件
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
    // 1、blob文件特殊处理
    // 2、token过期 或者没登录 直接跳转登陆页面 
    // 3、其他错误 提示处理   
    // 有个问题404 找不到页面是怎么处理？ 请求这里处理还是 路由里面处理？
    // 判断是否为404 直接跳转到404页面
    // 如果路由地址不存在的404可以跳路由页面，但是其他情况比如请求的资源找不到也会404，这种情况直接给报错+提示就行了

    // 对响应数据做点什么
    return response; // 直接返回响应数据
  },
  (error) => {
    // 对响应错误做点什么
    // 网络异常
    return Promise.reject(error);
  }
);

export default instance;    