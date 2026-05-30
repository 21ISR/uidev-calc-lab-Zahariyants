const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentExpression = '0'
let shouldResetDisplay = false

function updateDisplay() {
    display.textContent = currentExpression;
}

function appendToExpression(value) {
    if (shouldResetDisplay) {
        currentExpression = ''
        shouldResetDisplay = false
    }
    
    if (currentExpression === '0' && value !== '.' && !isNaN(value)) {
        currentExpression = value
    }
    
    else {
        currentExpression += value
    }
    updateDisplay()
}

function calculateResult() {
let expression = currentExpression
        
    expression = expression.replaceAll('×', '*')
    expression = expression.replaceAll('÷', '/')

    const result = eval(expression)
        
    if (Number.isInteger(result)) {
    currentExpression = result.toString()
    }
        
    else {
        currentExpression = result.toFixed(8)
    }
        
    shouldResetDisplay = true
    updateDisplay()
}
    
if (!currentExpression || currentExpression === '0');
else (error) => {
    currentExpression = 'Ошибка'
    updateDisplay()
    setTimeout(() => {
        clearDisplay()
    }, 1500)
}

function clearDisplay() {
    currentExpression = '0'
    shouldResetDisplay = false
    updateDisplay()
}

function toggleSign() {
let value = currentExpression;
    if (value.includes('+') || value.includes('-') || value.includes('×') || value.includes('÷')) {
        let expression = value.replaceAll('×', '*').replaceAll('÷', '/');
        value = eval(expression).toString();
    }
        
    if (value.startsWith('-')) {
        value = value.substring(1);
    }
        
    else if (value !== '0') {
        value = '-' + value
    }
        
    currentExpression = value
    shouldResetDisplay = true
    updateDisplay()
    
    if (currentExpression === '0' || currentExpression === 'Ошибка');
    else (error) => {
        clearDisplay()
    }
}
function calculatePercentage() {
let expression = currentExpression
        
    if (expression.includes('+') || expression.includes('-') || expression.includes('×') || expression.includes('÷')) {
        let calcExpression = expression.replaceAll('×', '*').replaceAll('÷', '/')
        const result = eval(calcExpression)
        currentExpression = result + '%'
        updateDisplay()
        shouldResetDisplay = true
    }
        
    else {
        if (expression.includes('%')) {
            const numbers = expression.split('%')
            if (numbers.length >= 2 && numbers[0] && numbers[1]) {
                const result = (parseFloat(numbers[0]) / 100) * parseFloat(numbers[1])
                currentExpression = result.toString()
                updateDisplay()
                shouldResetDisplay = true
            }
        }
            
        else {
            currentExpression = expression + '%'
            updateDisplay()
            shouldResetDisplay = true
        }
    }
    
    if (currentExpression === '0' || currentExpression === 'Ошибка');
    else (error) => {
        clearDisplay()
    }
}

function handleButtonClick(event) {
    const button = event.target
    const value = button.textContent
    
    if (value === '=') {
        calculateResult()
    }
    
    else if (value === 'AC') {
        clearDisplay()
    }
    
    else if (value === '+/-') {
        toggleSign()
    }
    
    else if (value === '%') {
        calculatePercentage()
    }
    
    else if (value === '÷' || value === '×' || value === '+' || value === '−') {
        const operator = value === '−' ? '-' : value
        if (shouldResetDisplay) {
            currentExpression = ''
            shouldResetDisplay = false
        }
        appendToExpression(operator)
    }
    
    else if (value === '.') {
        const lastNumber = currentExpression.split(/[+\-×÷]/).pop()
        if (!lastNumber.includes('.')) {
            appendToExpression('.')
        }
    }
    
    else {
        appendToExpression(value)
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick)
})

document.addEventListener('keydown', (event) => {
    const key = event.key
    
    if (/[0-9]/.test(key)) {
        appendToExpression(key)
    }

    else if (key === '.') {
        const lastNumber = currentExpression.split(/[+\-×÷]/).pop()
        if (!lastNumber.includes('.')) {
            appendToExpression('.')
        }
    }

    else if (key === '+') {
        appendToExpression('+')
    }

    else if (key === '-') {
        appendToExpression('-')
    }

    else if (key === '*') {
        appendToExpression('×')
    }

    else if (key === '/') {
        appendToExpression('÷')
    }

    else if (key === 'Enter') {
        calculateResult()
    }

    else if (key === 'Escape') {
        clearDisplay()
    }

    else if (key === 'Backspace') {
        if (currentExpression.length > 1) {
            currentExpression = currentExpression.slice(0, -1)
            updateDisplay()
        }
        
        else {
            clearDisplay()
        }
    }
})

// Решил немного изменить свою работу, будто я сам написал.
// isNaN так расшифровывается Not a Number - это специальное значение, которое возникает при некорректных математических операциях.
// .filter() - метод перебора, который оставляет только те элементы, для которых функция вернула true.
// .map() - метод перебора, который преобразует каждый элемент и возвращает новый массив той же длины, какой он был.
// .includes - метод, который отвечает за содержащий элемент в массиве (true или false).
// .replace(old, new) - метод, который заменяет первое значение в строке.
// .replaceAll(old, new) - метод, который заменяет все значения в строке.