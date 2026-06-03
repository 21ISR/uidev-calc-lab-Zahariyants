const display = document.querySelector('display');
const buttons = document.querySelectorAll('.button');

let currentExpression = Number(z.innerHTML);

function updateDisplay() {
    display.textContent = currentExpression;
}

function handleButton(button) {
    const value = button.target.textContent;
    if (value === '=') {
        if (z.innerHTML.includes('%'))  {
            const proc = z.innerHTML.split('%')
            currentExpression = eval(proc[0] * proc[1] / 100)
            z.innerHTML = currentExpression
        } else if (currentExpression === '0÷0') {
            currentExpression = ''
            z.innerHTML = 'Нельзя'
        } else {
            let res = eval(z.innerHTML.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-"))
            console.log(res);
            z.innerHTML = res
            currentExpression = res
        }

    } else if (value === "%") {
        currentExpression = eval(z.innerHTML) + "%"
        z.innerHTML = currentExpression
    }
    else if (value === "." && z.innerHTML.at(-1) === ".") {
        return
     
    } else if (value === 'AC') {
        console.log('Очищено');
        currentExpression = ''
        z.innerHTML = '0'
    } else {
        currentExpression += value
        console.log(currentExpression);
        z.innerHTML = currentExpression
    }
};

buttons.forEach(button => {
    button.addEventListener('click', handleButton);
});