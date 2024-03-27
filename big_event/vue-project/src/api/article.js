import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token'

export const ArticleCategoryListService = () => {
  const tokenStore = useTokenStore();
  return request.get('/category', {
    headers: {
      'Authorization': tokenStore.token
    }
  })
}