'use strict';

const input = document.querySelector('.input-field');
const output = document.querySelector('.output-field');
const swtchBtn = document.querySelector('.swtch-btn');
const copyBtn = document.querySelector('.copy-btn');
const displayNameOutput = document.querySelector('.disp-output');
const displayNameInput = document.querySelector('.disp-input');

let inputValue = 0;
let outputValue = 0;

displayNameInput.textContent = 'px';
displayNameOutput.textContent = 'rem';

//to convert px to rem
//16px = 1rem
//⨉px = ⨉px/16 * 1rem

const convertToRem = () => {
  const conv = (input.value / 16) * 1;
  output.value = conv;
};

//to convert rem to px
//1rem = 16px
//⨉rem = ⨉px * 16px

const convertToPx = () => {
  const conv = input.value * 16;
  output.value = conv;
};

// dispaying the input and output state
const stateValue = () => {
  input.value = inputValue;
  output.value = outputValue;
};

//switching the conversion
swtchBtn.addEventListener('click', () => {
  [inputValue, outputValue] = [outputValue, inputValue];

  stateValue();

  if (
    displayNameInput.textContent === 'rem' &&
    displayNameOutput.textContent === 'px'
  ) {
    displayNameInput.textContent = 'px';
    displayNameOutput.textContent = 'rem';
  } else {
    displayNameInput.textContent = 'rem';
    displayNameOutput.textContent = 'px';
  }
  // console.log(inputValue, outputValue);
});

// convert value according to input display Name
const convertFunction = () => {
  if (displayNameInput.textContent === 'rem') {
    convertToPx();
  } else {
    convertToRem();
  }
};

//on input, convert value
input.addEventListener('input', convertFunction);

//storing the input and output state
input.addEventListener('input', () => {
  inputValue = input.value;
  outputValue = output.value;
});
