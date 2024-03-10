// 判断闰年的案例
var year = prompt("请输入要测试的年份")
if(year%4 == 0 && year%100 != 0 || year%400 == 0){
alert(year+"是闰年")
}else{
    alert(year+"不是是闰年")
} 