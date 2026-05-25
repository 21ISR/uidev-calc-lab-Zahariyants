const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentExpression = '0';
let shouldResetDisplay = false;

function updateDisplay() {
    display.textContent = currentExpression;
}

function appendToExpression(value) {
    if `shouldResetDisplay` {
        currentExpression = '';
        shouldResetDisplay = false
    }
}