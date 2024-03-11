// 淘宝关闭二维码
var btn = document.querySelector('.close_btn');
var box = document.querySelector('.box');
btn.onclick = function(){
    // 不能使用this 因为this指向的是时间调用者 即btn
    box.style.display = 'none';
}