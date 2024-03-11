// axios 携带参数

// http://hmajax.itheima.net/api/city
// axios({
//   url: 'http://hmajax.itheima.net/api/city',
//   params: {
//     pname: '湖南省'
//   }
// }).then(result => {
//   const p = document.querySelector(".my_p");
//   const result_ = result.data.list.join('<br>');
//   console.log(result_);
//   p.innerHTML = result_;
// })


const city = document.querySelector(".shengfen");
const Township = document.querySelector(".chengshi");
const btn = document.querySelector(".btn");
btn.addEventListener(
  "click", () => {
    let pname = city.value;
    let cname = Township.value;
    axios({
      url: 'http://hmajax.itheima.net/api/area',
      params: {
        pname: pname,
        cname: cname,
      }
    }).then(result => {
      const p = document.querySelector(".cname");
      const result_ = result.data.list.join('<br>');
      console.log(result_);
      p.innerHTML = result_;
    })


  }
)






axios({
  url: 'http://hmajax.itheima.net/api/area',
  params: {
    pname: '湖南省',
    cname: '长沙市'

  }
}).then(result => {
  const p = document.querySelector(".my_p");
  const result_ = result.data.list.join('<br>');
  console.log(result_);
  p.innerHTML = result_;
})