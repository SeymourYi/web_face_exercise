// 乘法口诀
var str = "";
for(var i=1; i<=9;i++){
  for(j = 1; j<=i;j++){
   var ans=i*j;
   str += j + "×" +i + "=" + ans+'\t';
  }
  str += '\n';
}
console.log(str);