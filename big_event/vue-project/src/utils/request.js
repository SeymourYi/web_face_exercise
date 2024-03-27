import { ElMessage } from 'element-plus'
//导入
import axios from 'axios'
const baseURL = 'http://localhost:8080'
const instance = axios.create({ baseURL })

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
    alert('服务异常')
    return Promise.reject(err);
  }
)
export default instance;