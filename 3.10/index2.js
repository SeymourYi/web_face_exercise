// 冒泡排序
var arr = [4,5,3,1,2];
for (var i = 0;i<arr.length;i++){
    for(var j = 0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            var temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr)