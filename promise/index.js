// http://hmajax.itheima.net/api/province
const p = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest;
  xhr.open('get', ' http://hmajax.itheima.net/api/province')
  xhr.addEventListener('loadend', () => {
    // console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(JSON.parse(xhr.response))
    } else {
      reject(new Error(xhr.response))
    }
  })
  xhr.send();
})
p.then(
  result => {
    console.log(result);
  }
).catch(
  error => {
    console.log(error);
  }
)
