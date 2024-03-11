// axios测试

axios({
  url: 'http://hmajax.itheima.net/api/province'
}).then(result => {
  // console.log(result);
  // console.log(result.data.list);
  // console.log(result.data.list.join('<br>'));
  const count = result.data.list.join('<br>');
  console.log(count);
  const p = document.querySelector(".my-p");
  p.innerHTML = count;
}) 