const terms = document.querySelectorAll(".term");
const operations = document.querySelectorAll(".operation");

let currentOperation = null;
let hasDecimal = false;
const display = document.querySelector(".display");
const paragraphWithText = display.children[0];


// numbers
terms.forEach(term => {
    term.addEventListener("click", function() {
        let tempString = term.innerHTML;
        let existingText = paragraphWithText.innerHTML;

        // Проверяем, является ли нажатая кнопка точкой
        if (tempString === ".") {
            // Запрещаем добавление точки в начале или сразу после оператора
            if (hasDecimal || !/[\d]$/.test(existingText)) return; // Прерываем, если точка уже была введена
            hasDecimal = true;      // Отмечаем, что точка добавлена
        }

        // Обновляем текст на экране
        if (existingText === "0" && tempString !== ".") {
            paragraphWithText.innerHTML = tempString;
        } else {
            paragraphWithText.innerHTML += tempString;
        }
    });
});

operations.forEach(op => {
    op.addEventListener("click", function() {
        if (currentOperation === null) {
            currentOperation = op.innerHTML;
            paragraphWithText.innerHTML += currentOperation;
        } else {
            currentOperation = op.innerHTML;
            paragraphWithText.innerHTML = paragraphWithText.innerHTML.slice(0, -1) + currentOperation;
        }
        hasDecimal = false; // Сбрасываем флаг для новой операции
    });
});

// calculate
function calculate() {
    let expression = paragraphWithText.innerHTML.split(currentOperation);

    for (let i = 0; i < expression.length; i++) {
        expression[i] = Number(expression[i]);
    }

    switch (currentOperation) {
        case '+':
            paragraphWithText.innerHTML = expression[0] + expression[1];
            break;
        case '-':
            paragraphWithText.innerHTML = expression[0] - expression[1];
            break;
        case '*':
            paragraphWithText.innerHTML = expression[0] * expression[1];
            break;
        case '/':
            paragraphWithText.innerHTML = expression[1] === 0 ? "ERROR" : expression[0] / expression[1];
            break;
    }
    currentOperation = null;
    hasDecimal = false; // Сбрасываем флаг для следующего числа
}

// cleaners
function deleteAll() {
    display.children[0].innerHTML = "0";
    currentOperation = null;
    hasDecimal = false; // Сбрасываем флаг при очистке
}

function deleteOneChar() {
    let existingText = display.children[0].innerHTML;

    if (existingText.length === 1) {
        display.children[0].innerHTML = "0";
    } else {
        // Проверяем, удаляем ли мы точку
        if (existingText.slice(-1) === ".") {
            hasDecimal = false; // Сбрасываем флаг, если точка была удалена
        }
        display.children[0].innerHTML = existingText.slice(0, -1);
    }
}
