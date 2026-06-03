const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let currentExpression = Number(display.innerHTML);

function handleButton(button) {
    const value = button.target.textContent;
    if (value === '=') {
        if (display.innerHTML.includes('%'))  {
            const proc = display.innerHTML.split('%')
            currentExpression = eval(proc[0] * proc[1] / 100)
            display.innerHTML = currentExpression
        } else if (currentExpression === '0÷0') {
            currentExpression = ''
            display.innerHTML = 'На ноль делить нельзя'
        } else {
            let res = eval(display.innerHTML.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-"))
            console.log(res);
            display.innerHTML = res
            currentExpression = res
        }

    } else if (value === "%") {
        currentExpression = eval(display.innerHTML) + "%"
        display.innerHTML = currentExpression
    }
    else if (value === "." && display.innerHTML.at(-1) === ".") {
        return
     
    } else if (value === 'AC') {
        console.log('Очищено');
        currentExpression = ''
        display.innerHTML = '0'
    } else {
        currentExpression += value
        console.log(currentExpression);
        display.innerHTML = currentExpression
    }
};

buttons.forEach(button => {
    button.addEventListener('click', handleButton);
});

function updateDisplay() {
    display.textContent = currentExpression;
}