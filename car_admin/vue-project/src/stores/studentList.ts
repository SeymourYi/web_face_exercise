import { defineStore } from "pinia"

export const usestudentlist = defineStore('studentlist', {



  state() {
    return {
      studentlist: JSON.parse(localStorage.getItem('studentList') as string)
    }
  }
})