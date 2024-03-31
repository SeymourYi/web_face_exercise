import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token'

export const ArticleCategoryListService = () => {
  // const tokenStore = useTokenStore();
  // return request.get('/category', {
  //   headers: {
  //     'Authorization': tokenStore.token
  //   }
  // })
  // return request.get('/category')
  return request.get('/student/getall')

}
export const ArticleCategoryAddService = (category) => {
  return request.post('/student/add', category)
}
export const ArticleCategoryundataService = (category) => {
  return request.patch('/student/updatePwd', category)
}
export const getStudentSearchSservice = (Conditions) => {

  return request.get('/student/search', { params: Conditions },)

  // return await axios.get('http://localhost:8080/student/search', { params: { Conditions } }
}
export const ArticleCategoryOpertionDeletService = (category) => {
  return request.post('/student/Delet', category)
}
export const ArticleCategoryOpertionproveService = (category) => {
  return request.post('/student/prove', category)
}