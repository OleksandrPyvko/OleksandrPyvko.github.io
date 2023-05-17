'use strict';

const periodSelector = document.querySelector('#time-period');



export const periodCalc = (func) => {
  if (periodSelector.value === 'days') {
    return func;
  }
  if (periodSelector.value === 'hours') {
    return func * 24;
  }
  if (periodSelector.value === 'minutes') {
    return func * 24 * 60;
  }
  if (periodSelector.value === 'seconds') {
    return func * 24 * 60 * 60;
  }
  localStorage.setItem('periodCalc', periodCalc(func));
};
