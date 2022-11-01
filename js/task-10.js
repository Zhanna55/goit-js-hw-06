function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
btnCreateEl.addEventListener('click', getAmount);
btnDestroyEl.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}  `;
    fragment.appendChild(div);
  }
  boxesEl.appendChild(fragment);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
