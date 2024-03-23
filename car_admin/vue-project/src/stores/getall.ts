import { defineStore } from "pinia";
import axios, { type AxiosResponse } from "axios";
export const useGetallStore = defineStore('getall', {
  actions: {
    async getalla() {
      try {
        const response = await axios.get<any, AxiosResponse<any, any>>('http://localhost:8080/student/getall');
        // console.log(response.data.data);
        let res = response.data.data[0]
        console.log(res.name);
        if (true) {
          this.sum = res.student_id
          this.sum++
        }
        // console.log(this.sum);
        // return response;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

  },
  state() {
    return {
      sum: 6,
      sum1: 6,
      sum2: 6,
      sum3: 6,
    };
  },
  //翻十倍 对数据进行同步修改
  getters: {

    bigSum: (state): number => {
      // ten_up: state => state.sum1 * 10
      return state.sum * 2;
    },
    lessSum: (state): number => {
      return state.sum / 10;
    },
    texaat: state => state.sum + 1,

  }
});






