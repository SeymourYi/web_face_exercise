// 定时器
// function abc() {
//   console.log("123");
// }
// setInterval(abc, 1000)
//轮播图
const sliderData = [
  { url: '/image/420_1.webp', title: "第1张", color: "rgba(100,56,34)" },
  { url: '/image/420_2.webp', title: "第2张", color: "rgba(100,56,34)" },
  { url: '/image/420_3.webp', title: "第3张", color: "rgba(100,56,34)" },
  { url: '/image/420_4.webp', title: "第4张", color: "rgba(100,56,34)" },
];
const slider_img = document.querySelector(".slider-img");
const slider_text = document.querySelector(".slider-footer");
let i = 0;

function loog() {
  let url = sliderData[i].url;
  let title = sliderData[i].title;
  slider_img.src = "http://127.0.0.1:5500/3.11" + url;
  slider_text.innerHTML = title
  i++;
  if (i >= sliderData.length) {
    i = 0; // Reset i to 0 when it reaches the end of sliderData
  }
}

setInterval(loog, 2000);