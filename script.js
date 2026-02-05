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

function clearAll() {
    expression = "";
    document.getElementById("process").innerText = "";
    document.getElementById("result").innerText = "0";
}

function calculate() {
    try {
        let result = eval(expression);
        document.getElementById("process").innerText = expression;
        document.getElementById("result").innerText = result;
        expression = result.toString();
    } catch {
        document.getElementById("result").innerText = "Error";
        expression = "";
    }
}

function updateDisplay() {
    document.getElementById("result").innerText = expression || "0";
}