import { reactive, onMounted } from "vue"
export default function () {
  let sum = reactive(
    {
      name: "张三",
      age: 10,
      car: {
        c1: "雅迪",
        c2: "爱玛"
      }
    }
  )
  function changeSum() {
    //  console.log(sum);
    sum.age += 1
  }
  onMounted(() => {
    changeSum()
  })
  return { sum, changeSum }
}