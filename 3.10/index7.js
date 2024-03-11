// 统计出现次数最多的字符
var str='abcoefoxyozzopp';
var o = {};
for(var i=0 ;i<=str.length;i++){
    var a=str.charAt(i);
    if(o[a]){
        o[a]++
    }else{
        o[a]=1
    }
}
console.log(o);
var max = 0
for(var k in o){
    if(max<o[k]){
       max=o[k];
    }
}
for(var k in o){
if(max == o[k]){
    console.log(k+"出现的最多");
}
}