// function changeBgColor() {
//   const getRandomColor = Math.floor(Math.random() * 16777216).toString(16);
//   document.body.style.backgroundColor = "#" + getRandomColor;
// }

const image = document.getElementById("image");

function callImage() {
  document.body.innerHTML += `<img src="${image.value}">`;
}
