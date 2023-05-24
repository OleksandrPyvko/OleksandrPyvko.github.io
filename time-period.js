'use strict';

export class TimePeriod {
  constructor(periodSelector) {
    this.periodSelector = periodSelector;
  }

  calculateTime(func) {
     if (this.periodSelector.value === 'days') {
    return func;
  }
  if (this.periodSelector.value === 'hours') {
    return func * 24;
  }
  if (this.periodSelector.value === 'minutes') {
    return func * 24 * 60;
  }
  if (this.periodSelector.value === 'seconds') {
    return func * 24 * 60 * 60;
  }
  localStorage.setItem('periodCalc', periodCalc(func));
};
  }

