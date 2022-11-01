let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecrement.addEventListener('click', (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
btnIncrement.addEventListener('click', (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
