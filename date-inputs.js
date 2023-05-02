'use strict';

//Date inputs
const date1 = document.querySelector('#start-date');
const date2 = document.querySelector('#end-date');

export const inputListener = () => {
  date1.addEventListener('change', () => {
    date2.min = date1.value;
  });

  date1.addEventListener('change', () => {
    if (date2.value < date1.value) {
      date2.value = date1.value;
    }
  });
};
