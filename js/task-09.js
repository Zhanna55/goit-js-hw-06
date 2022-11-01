function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorNameEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
const body = document.body;
buttonEl.addEventListener('click', changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor(event);
  colorNameEl.textContent = body.style.backgroundColor;
}
console.log(colorNameEl);
console.log(buttonEl);
console.log(body.style.backgroundColor);
