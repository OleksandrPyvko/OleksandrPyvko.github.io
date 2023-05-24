'use strict';

import { inputListener } from './date-inputs.js';
import { daysToCount } from './daysToCount.js';
import { createRow } from './button.js';
import { TimePeriod } from './time-period.js';
import { Presets } from './presets.js';

const resultInput = document.querySelector('#result');
const button = document.querySelector('#calculate');
const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const selectorElement = document.querySelector('#preset');


const timePeriod = new TimePeriod(
  document.querySelector('#time-period')
);

const presets = new Presets(
  document.querySelector('#start-date'),
  document.querySelector('#end-date'),
  document.querySelector('#preset')
);


const checkInputs = () => {
  if (startDate.value !== '') {
    button.disabled = false;
    button.classList.remove('disabled');
    button.innerHTML = 'Порахувати';
  } else {
    button.disabled = true;
    button.classList.add('disabled');
    button.innerHTML = 'Оберіть дату';
  }
};

const startApp = () => {
  checkInputs();
  selectorElement.addEventListener('change', () => {
    if (selectorElement.value === 'month') {
      endDate.value = presets.month();
    } else if (selectorElement.value === 'week') {
      endDate.value = presets.week();
    } else {
      return;
    }
  });
  console.log(selectorElement.value);
  startDate.addEventListener('input', checkInputs);

  inputListener();

  daysToCount();
  timePeriod.calculateTime(daysToCount());

  button.addEventListener('click', () => {
    resultInput.value = timePeriod.calculateTime(daysToCount());
  });

  createRow();
};

document.addEventListener('DOMContentLoaded', startApp);
