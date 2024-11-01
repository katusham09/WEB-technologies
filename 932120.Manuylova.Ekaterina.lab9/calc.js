const terms = document.querySelectorAll(".term");
const operations = document.querySelectorAll(".operation");

let currentOperation = null;
const display = document.querySelector(".display");
const paragraphWithText = display.children[0];


// numbers
terms.forEach(term => {
    term.addEventListener(
        "click",
        function() {            
            let tempString = term.innerHTML;
            let existingText = paragraphWithText.innerHTML;
            if (existingText == "0") {
                paragraphWithText.innerHTML = tempString;
            }
            else {
                paragraphWithText.innerHTML += tempString;
            }
        }
    )
});

operations.forEach(op => {
    op.addEventListener(
        "click",
        function() {
            if (currentOperation == null) {
                currentOperation = op.innerHTML;

                paragraphWithText.innerHTML += currentOperation;
            }
            else {
                currentOperation = op.innerHTML;

                paragraphWithText.innerHTML = paragraphWithText.innerHTML.substring(0, paragraphWithText.innerHTML.length - 1) + currentOperation;
            }
        }
    )
});

// calculate
function calculate() {
    let expression = paragraphWithText.innerHTML.split(currentOperation);

    for (let i = 0; i < expression.length; i++) {
        expression[i] = Number(expression[i]);
    }

    switch(currentOperation) {
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
            if (expression[1] == '0') 
                paragraphWithText.innerHTML = "ERROR";
            else
                paragraphWithText.innerHTML = expression[0] / expression[1];
            break;
    }
    currentOperation = null;
}

// cleaners
function deleteAll() {
    display.children[0].innerHTML = "0";
    currentOperation = null;
}

function deleteOneChar() {
    let existingText = display.children[0].innerHTML;

    if (existingText.length==1) {
        display.children[0].innerHTML = 0;
    }
    else {
        display.children[0].innerHTML = existingText.replace(
            existingText[existingText.length-1],
            ""
        )
    }
}