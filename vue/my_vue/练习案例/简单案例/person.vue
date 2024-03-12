<script  lang="ts">
 
export default{
  name:'person',
  data() {
    return {
      name:'张三',
      age:18,
      tel:'123123445'
    }
  },
methods: {
  showTel(){
    alert(this.tel)
  },
  changeName(){ 
    this.name = "李四"
  },
  changeAge(){
     this.age ++
  }
},

}
</script>

<template>
  <div class="app">123123</div>
    <div class="person">
      <h3>名字：{{ name }}</h3>
      <h3>年龄：{{ age }}</h3>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改性别</button>
      <button @click="showTel">查看联系方式</button>
    </div>

</template>

<style scoped>

</style>
