import { defineStore } from "pinia";

export const userCountStore = defineStore('count', {
  state() {
    return {
      sum: 6
    }
  },
})