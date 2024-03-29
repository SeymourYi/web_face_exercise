import { ElMessage } from 'element-plus'
//导入
import router from '@/router'

import axios from 'axios'
import { useTokenStore } from '@/stores/token'
const baseURL = 'http://localhost:8080'
const instance = axios.create({ baseURL })
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    //请求前的回调
    const tokenStore = useTokenStore();
    if (tokenStore.token) {
      config.headers.Authorization = tokenStore.token
    }
    return config
  },
  (err) => {
    //请求错误的回调
    Promise.reject(err)
  }
)
//添加拦截器
instance.interceptors.response.use(
  result => {
    //如果业务状态码为零就成功了
    console.log(result.data);
    if (result.data.code === 0) {
      return result.data
    }
    //响应失败
    ElMessage.error(result.data.message ? result.data.message : "失败")
    // alert(result.data.message ? result.data.message : "失败")
    return Promise.reject(result.data)
  },
  err => {
    if (err.response.status === 401) {
      ElMessage.error("请先登录")
      router.push('/login')
    } else {
      ElMessage.error("服务异常")
    }
    return Promise.reject(err);
  }
)
export default instance;