import request from '@/utils/request.js'
export const ArticleCategoryListService = () => {
  return request.get('/category')
}