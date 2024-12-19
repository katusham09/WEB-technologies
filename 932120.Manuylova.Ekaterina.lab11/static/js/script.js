function getRandomValue() {
    return Math.floor(Math.random() * 10);
}

var firstValue = getRandomValue();
var secondValue = getRandomValue();
 
function updateElements(selector, value) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = value;
    }
}

updateElements(".value1", firstValue);
updateElements(".value2", secondValue);

var sumResult = firstValue + secondValue;
var subResult = firstValue - secondValue;
var multResult = firstValue * secondValue;

document.querySelector(".sum_res").textContent = sumResult;
document.querySelector(".sub_res").textContent = subResult;
document.querySelector(".mult_res").textContent = multResult;

var divResultElement = document.querySelector(".div_res");
if (secondValue !== 0) {
    divResultElement.textContent = Math.floor(firstValue / secondValue);
} else {
    divResultElement.textContent = "Division by 0";
}