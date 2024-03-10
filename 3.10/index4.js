// 对象遍历
var obj = {
    name:'高俊达',
    brithday:'2002.8',
    sex:'男',
    edit_time:'2024.3.10'
}
for(var k in obj){
    console.log(k);
    console.log(obj[k]);
    //有点像字典
}