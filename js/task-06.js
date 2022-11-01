const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', (event) => {
  if (inputEl.value.length === 6) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
});
