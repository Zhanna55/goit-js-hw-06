const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(outputEl);

inputEl.addEventListener('input', (event) => {
  if (!inputEl.value) {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputEl.value;
  }
});
