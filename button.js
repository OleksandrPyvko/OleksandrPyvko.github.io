'use strict';

const button = document.querySelector('#calculate');
const table = document.querySelector('.result-table');
const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const timePeriod = document.querySelector('#time-period');
const resultInput = document.querySelector('#result');

// Load data from LS
window.addEventListener('load', () => {
  const exDataString = localStorage.getItem('localData');
  if (exDataString !== null) {
    const exData = JSON.parse(exDataString);
    exData.slice(-10).forEach((obj) => {
      const row = createRowElement(obj);
      table.appendChild(row);
    });
  }
});

//Creating row
const createRowElement = (data) => {
  const row = document.createElement('div');
  row.innerHTML = `
     <div class="start-row">${data.st}</div>
    <div class="end-row">${data.en}</div>
    <div class="period-row">${data.period}</div>
    <div class="output-row">${data.result}</div>
  `;
  row.classList.add('result-row');
  return row;
};



const start = () => {
  const rows = document.querySelectorAll('.result-row');
  if (rows.length >= 10) {
    table.removeChild(rows[0]);
  }

  const st = startDate.value;
  const en = endDate.value;
  const selectedOption = timePeriod.options[timePeriod.selectedIndex];
  const result = resultInput.value;
  const period = selectedOption.text;
  const dataObj = { st, en, period, result };

  let exData = [];
  const exDataString = localStorage.getItem('localData');

  if (exDataString !== null) {
    const exDataObj = JSON.parse(localStorage.getItem('localData'));
    exData = Object.values(exDataObj);
  }

  exData.push(dataObj);
  const updatedDataString = JSON.stringify(exData);
  localStorage.setItem('localData', updatedDataString);

  const row = createRowElement(dataObj);
  table.appendChild(row);
};

export const createRow = () => {
  button.addEventListener('click', start);
};
