// @ts-nocheck
let inputSize = document.querySelector('.title-size');

let inputText = document.querySelector('#title-input');

// @ts-ignore

inputText.addEventListener('keydown', () => {
  let size = inputText.value.length;
  console.log(
    '🚀 ~ file: index.js ~ line 10 ~ inputText.addEventListener ~ size',
    size
  );
  if (size < 0) {
    size = 0;
  }
  inputSize.innerHTML = `${size}/100`;
});

inputText.addEventListener('keyup', () => {
  let size = inputText.value.length;
  console.log(
    '🚀 ~ file: index.js ~ line 10 ~ inputText.addEventListener ~ size',
    size
  );
  if (size < 0) {
    size = 0;
  }
  inputSize.innerHTML = `${size}/100`;
});
