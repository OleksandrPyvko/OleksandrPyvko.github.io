'use strict';

import { inputListener } from './date-inputs.js';
import { presetListener } from './presets.js';
import { daysToCount } from './daysToCount.js';
import { periodCalc } from './time-period.js';
import { createRow } from './button.js';


const resultInput = document.querySelector('#result');
const button = document.querySelector('#calculate');


const startApp = () => {
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
