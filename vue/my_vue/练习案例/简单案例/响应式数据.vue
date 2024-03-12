<script  lang="ts" setup name = "person_123">
import { ref } from 'vue';//引入响应式数据
 
// export default{
//   name:'person',
  // setup(){
    let name = ref('张三')  //响应式数据
    let age = ref(18)
    let tel= 123123445

    // npm i vite-plugin-vue-setup-extend -D
    // 在vite.config.ts中要引入
     function changeName() {
      console.log(name);
      
      
     }
     function changeAge() {
      console.log(age);
       age.value +=1 //ref后此处要加.value
}
function showTel() {
  console.log(tel);
  
}
// return{name,age,changeName,changeAge,showTel}
// }}
//   data() {
//     return {
//       name:'张三',
//       age:18,
//       tel:'123123445'
//     }
//   },
// methods: {
//   showTel(){
//     alert(this.tel)
//   },
//   changeName(){ 
//     this.name = "李四"
//   },
//   changeAge(){
//      this.age ++
//   }
// },

// }
</script>

<template>
  <div class="app">
    <div class="person">
      <h3>名字：{{ name }}</h3>
      <h3>年龄：{{ age }}</h3>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="showTel">查看联系方式</button>
    </div>
    </div>

</template>

<style scoped>

</style>
