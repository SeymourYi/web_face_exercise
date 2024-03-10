// 计时器
function conutDown(time) {
    var nowTime = +new Date();
    var inputTime = +new Date(time);
    time = (inputTime - nowTime) / 1000;
    var d = parseInt(time /60 /60 /24);
    var h= parseInt(time /60 /60 %24);
    var m= parseInt(time /60 %60);
    var s= parseInt(time %60);
    return d+ "天"+h+"小时"+m+"分钟"+s+"秒";
}
console.log("现在是"+Date());
console.log(conutDown("2024-7-1 00:00:00"));
