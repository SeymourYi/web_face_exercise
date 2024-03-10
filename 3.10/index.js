// 查询水果案例
var fruit = prompt('请输入查询的')
switch(fruit){
    case "苹果" :
        alert("苹果的价格为3.5/斤");
        break;
    case "梨" :
            alert("梨的价格为3.5/斤");
            break;
    case "臭豆腐" :
                alert("臭豆腐的价格为3.5/斤");
                break;
    case "鲱鱼罐头" :
                    alert("鲱鱼罐头不是水果");
                    break;
    case "香蕉" :
                        alert("香蕉的价格为3.5/斤");
                        break;
    default:
        alert("没有此水果")                               
}