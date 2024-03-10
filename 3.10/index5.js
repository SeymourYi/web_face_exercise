// 猜数游戏
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min
}
var random =getRandom(1,10);
console.log(Math.random());
while(true){
    var num = prompt("输入一个你猜的数(1-10之间)（必须填入一个数字 不能是字母，符号，文字。。。）")
    if(num == random){
        alert("你猜对了");
        alert("游戏结束");
        break;
    }if (num>random) {
        alert("你猜的太大了")
    }else{
        alert("你猜的太小了")
    }
}