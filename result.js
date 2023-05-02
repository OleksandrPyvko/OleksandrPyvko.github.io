'use strict';

const resultInput = document.querySelector('#result');

export const displayResult = (func) => {
    const time = func;
    resultInput.value = time;
}