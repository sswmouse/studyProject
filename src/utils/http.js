import axios from 'axios';
import { Message } from 'element-ui';

// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API || '/',
    timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';

        // 默认开启错误提示
        if (typeof config.showErrorMessage === 'undefined') {
            config.showErrorMessage = true;
        }

        return config;
    },
    error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            const err = new Error(`请求错误：${response.status}`);
            if (response.config.showErrorMessage) {
                Message.error(err.message);
            }
            return Promise.reject(err);
        }
    },
    error => {
        let errMsg = '';

        if (error.response) {
            errMsg = `请求失败：${error.response.status} ${error.response.statusText}`;
        } else if (error.code === 'ECONNABORTED') {
            errMsg = '请求超时，请稍后再试';
        } else {
            errMsg = error.message || '请求出错';
        }

        if (error.config && error.config.showErrorMessage !== false) {
            Message.error(errMsg);
        }

        return Promise.reject(error);
    }
);

// 封装函数式调用
function request(options) {
    const { url, method = 'get', params, data, ...rest } = options;

    const config = {
        url,
        method,
        ...rest
    };

    if (method.toLowerCase() === 'get') {
        config.params = params || data; // get 请求用 params
    } else {
        config.data = data || params;   // 非 get 请求用 data
    }

    return service(config);
}

export default request;