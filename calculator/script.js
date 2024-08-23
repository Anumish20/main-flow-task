const display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    if (!/[\+\-\*\/%]$/.test(display.innerText)) {
        display.innerText += ` ${operator} `;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function toggleSign() {
    if (display.innerText !== '0' && display.innerText !== 'Error') {
        display.innerText = display.innerText.startsWith('-') ?
            display.innerText.slice(1) : '-' + display.innerText;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/%/g, '/100'));
    } catch (error) {
        display.innerText = 'Error';
    }
}
