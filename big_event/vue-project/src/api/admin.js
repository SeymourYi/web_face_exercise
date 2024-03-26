import request from '@/utils/request.js'
//这是为什么啊
export const userRegisterservice = (registerData) => {
  const params = new URLSearchParams()
  for (let key in registerData) {
    params.append(key, registerData[key]);
  }

  return request.post('user/login', params);
}
export const adminLoginService = (loginData) => {
  const params = new URLSearchParams();
  for (let key in loginData) {
    params.append(key, loginData[key])
  }
  return request.post('/user/login', params)//草 原来是你这个jiba写错了
}