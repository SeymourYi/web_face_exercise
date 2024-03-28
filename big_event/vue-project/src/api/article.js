import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token'

export const ArticleCategoryListService = () => {
  return request.get('/category')
}