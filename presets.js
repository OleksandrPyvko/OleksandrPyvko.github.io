'use strict';

const date1 = document.querySelector('#start-date');
const date2 = document.querySelector('#end-date');
const selector = document.querySelector('#preset');

//Preset Selector
export const presetListener = () => {
  const month = () => {
    const inputDate = new Date(date1.value);
    const monthLater = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth() + 1,
      inputDate.getDate()
    );
    const formattedDate = monthLater.toISOString().substring(0, 10);
    return formattedDate;
  };

  const week = () => {
    const inputDate = new Date(date1.value);
    const weekLater = new Date(inputDate.getTime() + 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .substring(0, 10);
    return weekLater;
  };

  selector.addEventListener('change', () => {
    if (selector.value === 'month') {
      date2.value = month();
      console.log('changed');
    }
  });

  selector.addEventListener('change', () => {
    if (selector.value === 'week') {
      date2.value = week();
      console.log('changed');
    }
  });
};
