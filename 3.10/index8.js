// 分时问候


var img = document.querySelector('img');
var div = document.querySelector('div');
var date = new Date();
var h = date.getHours();
if (h < 12) {
    div.innerHTML = "上午好";
} else if (h < 18) {




    div.innerHTML = "下午好";
} else {
    div.innerHTML = "晚上好";
}