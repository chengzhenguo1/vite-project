import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import store from '@store/index.js'


//创建 axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 3000,
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
  const token = store.state.user.token
  config.headers['X-Token'] = token
  return config
}, (error) => {
  return Promise.reject(error);
})

// 添加响应拦截器
service.interceptors.response.use((response) => {
  const res = response.data
  // 如果不是正确的状态码进行相应的处理
  if (res.code !== 20000) {

    ElMessage.error(res.message || 'Error')
    // 50008: 非法请求  500012: 其他客户端已登入   50014: token已过期
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      ElMessageBox.confirm('你已登出,请重新登录', '确认', {
        confirmButtonText: '重新登陆',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清空token
        store.dispatch('user/resetToken').then(() => {
          console.log(store.state.user.token)
          location.reload()
        })
      })
    }
    return Promise.reject(res.message)
  } else {
    return res
  }
}, (error = 'Error') => {
  ElMessage.error(error.message || error)
  return Promise.reject(error)
})

export default service