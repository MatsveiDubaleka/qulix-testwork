// @ts-nocheck
let inputSize = document.querySelector('.title-size');

let inputText = document.querySelector('#title-input');

// @ts-ignore

inputText.addEventListener('keydown', () => {
  let size = inputText.value.length;
  if (size < 0) {
    size = 0;
  }
  inputSize.innerHTML = `${size}/100`;
});

inputText.addEventListener('keyup', () => {
  let size = inputText.value.length;
  if (size < 0) {
    size = 0;
  }
  inputSize.innerHTML = `${size}/100`;
});

console.log(
  'Приятного просмотра. Если возникнут какие-нибудь вопросы, то мой телеграмм @MatsveiDubaleka'
);
