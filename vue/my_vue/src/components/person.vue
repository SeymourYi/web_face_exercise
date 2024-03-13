<script  lang="ts" setup name = "person_123">
import useSum from '@/hook/useSum';
import useDog from '@/hook/useDog';
const {sum,changeSum} = useSum()
const {dogList,getdog} = useDog()
</script>

<template>
  <div class="add">名字为：{{ sum.name }}</div>  <br>
  <div class="add">年龄据为：{{ sum.age }}</div><br>
  <div class="add">ci数据为：{{ sum.car.c1 }}</div>
  <div class="add">c2的数据为：{{ sum.car.c2 }}</div>
   <button @click="changeSum">点击增加</button>
   <img v-for="(dog,index) in dogList" :src="dog" alt="" :key="index">
   <button @click="getdog">再来一只狗</button>
</template>

<style scoped>
img{
  height: 300px;
}

</style>
