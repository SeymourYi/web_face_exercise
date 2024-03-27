import { defineStore } from "pinia";
import { ref } from 'vue'

export const useTokenStore = defineStore('token', () => {

  const token = ref('')
  const setToken = (newToken) => {
    token.value = newToken
  }
  const removeAToken = () => {
    token.value = ''
  }
  return {
    token, setToken, removeAToken
  }
})