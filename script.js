'use strict';

const counter = document.getElementById('counter');
const minusButton = document.getElementById('minusButton');
const resetButton = document.getElementById('resetButton');
const plusButton = document.getElementById('plusButton');

function app() {
    let sum = 0;
    plusButton.addEventListener('click', () => {
        sum += 1;
        counter.textContent = sum;
    });
    minusButton.addEventListener('click', () => {
        sum -= 1;
        counter.textContent = sum;
    });
    resetButton.addEventListener('click', () => {
        sum = 0;
        counter.textContent = sum;
    });
}

app()