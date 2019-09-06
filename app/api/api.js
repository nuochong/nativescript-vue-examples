import axios from 'axios';

// axios 配置
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.get['Content-Type'] = 'text/json'; //配置请求头
axios.defaults.headers.delete['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.put['Content-Type'] = 'application/json'; //配置请求头

// 当实例创建时设置默认配置
//const base = process.env.API_HOST + '/api/xxx/';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d60c006f81908124e0fcc23/example';

export default {
  //getTest: params => axios.get(`${base}disease_menu`,params),
  postTest: params => axios.post(`/upload`, params)
  // diseaseList: params => axios.get(`${base}disease_list`,params),
};

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // config.setHeaders([
    //     // 在这里设置请求头与携带token信息
    // ]);
    console.log('我拦截了请求', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//http response 拦截器:返回状态判断（添加响应拦截器）
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);
