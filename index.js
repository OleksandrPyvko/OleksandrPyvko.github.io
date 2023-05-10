'use strict';

import { inputListener } from './date-inputs.js';
import { presetListener } from './presets.js';
import { daysToCount } from './daysToCount.js';
import { periodCalc } from './time-period.js';
import { createRow } from './button.js';



const resultInput = document.querySelector('#result');
const button = document.querySelector('#calculate');
const startDate = document.querySelector('#start-date');

const checkInputs = () => {
  if (startDate.value !== '') {
    button.disabled = false;
    button.classList.remove('disabled');
    button.innerHTML = 'Порахувати';
  } else {
    button.disabled = true;
    button.classList.add('disabled');
    button.innerHTML = 'Оберіть дату'
  }
}; 

const startApp = () => {
  checkInputs();
 
  startDate.addEventListener('input', checkInputs);

  console.log(startDate.value);
  inputListener();
  presetListener();
  daysToCount();
  periodCalc(daysToCount());

  button.addEventListener('click', () => {
    resultInput.value = periodCalc(daysToCount());
  });

  createRow();
};

document.addEventListener('DOMContentLoaded', startApp);

