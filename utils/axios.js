import axios from 'axios'
import qs from 'qs'
import constant from './constant.js'
import Vue from 'vue'

// 初始化axios实例
const axiosIns = axios.create()
const vueIns = new Vue()

// 配置动态代理
if (constant.baseUrl) {
    axiosIns.defaults.baseUrl = constant.baseUrl
}
axiosIns.defaults.retry = 1
// 延迟时间
axiosIns.defaults.timeout = 20000
axiosIns.defaults.retryDelay = 1000
// 设置post请求的头信息
axiosIns.defaults.headers['content-type'] = 'application/x-www-form-urlencoded'

// 请求拦截
axiosIns.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 请求响应
axiosIns.interceptors.response.use(function (response) {
    return response
}, function(error) {
    return Promise.reject(error)
})

const ajaxMethod = ['get', 'post']
const Api = {}
ajaxMethod.forEach(method => {
    Api[method] = function (uri, data, config) {
        return new Promise(function(resolve, reject){
            if(method == 'get') {
                data = {params: data}
            } else {
                data = qs.stringify(data)
            }
            axiosIns[method](uri, data, config).then(Response => {
                if (Response.data.code === 200) {
                    resolve(Response.data)
                } else if (Response.data.code === 401) {
                    vueIns.$message.error('登录信息失效')
                    setTimeout(() => {
                        router.push('login')
                    }, 2000)
                } else if (Response.data.code === 400) {
                    vueIns.$message.error(Response.data.msg)
                    reject(Response.data.code)
                }
            }).catch(function (error) {
                throw error
            })
        })
    }
})
export default Api

