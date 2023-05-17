'use strict';

const date1 = document.querySelector('#start-date');
const date2 = document.querySelector('#end-date');


const daysToCountSelector = document.querySelector('#days-to-count');

const countDays = (firstDate, secondDate) => {
  const startDate = new Date(firstDate.value);
  const endDate = new Date(secondDate.value);
  if (daysToCountSelector.value === 'all-days') {
    const difference = endDate - startDate;
    const result = Math.floor(difference / (1000 * 60 * 60 * 24));
    return result;
  }
};

const workingDays = (firstDate, secondDate) => {
  const startDate = new Date(firstDate.value);
  const endDate = new Date(secondDate.value);
  let counter = 0;
  let currentDate = startDate;
  while (currentDate < endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      counter++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return counter;
};

const weekends = (firstDate, secondDate) => {
  const startDate = new Date(firstDate.value);
  const endDate = new Date(secondDate.value);
  let counter = 0;
  let currentDate = startDate;
  while (currentDate < endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek == 0 || dayOfWeek == 6) {
      counter++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return counter;
};


export const daysToCount = () => {
  if (daysToCountSelector.value === 'all-days') {
    return countDays(date1,date2)
  } if (daysToCountSelector.value === 'working-days') {
    return workingDays(date1, date2);
  } if (daysToCountSelector.value === 'weekends') {
    return weekends(date1, date2);
  }
}