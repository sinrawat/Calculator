let expression = "";

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (expression === "") return;
    const lastChar = expression.slice(-1);
    if ("+-*/%".includes(lastChar)) return;
    expression += operator;
    updateDisplay();
}

