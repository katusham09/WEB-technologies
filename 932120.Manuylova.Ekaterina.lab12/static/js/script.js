function getResult(first_digit, second_digit, sign) {
    document.querySelector('.demonstration').innerHTML = 'Result:';
    document.querySelector('.center').style = 'display:none;';
    let result = document.createElement('div');

    result.innerHTML = first_digit + sign + second_digit + '=';
    result.innerHTML += eval(first_digit + sign + second_digit);
    document.querySelector('.demonstration').innerHTML = '';
    document.querySelector('.demonstration').append(result);
}

document.querySelector('.submit').onclick = function() {
    let first_digit = document.querySelector('.first_digit').value;
    let second_digit = document.querySelector('.second_digit').value;
    let sign = document.querySelector('.sign').value;

    let numericSecondDigit = parseFloat(second_digit);

    if (isNaN(numericSecondDigit))
        alert('Введите корректное число');
    else if (numericSecondDigit === 0 && sign === '/')
        alert('Ошибка деления на ноль');
    else if (first_digit.length !== 0 && second_digit.length !== 0)
        getResult(first_digit, second_digit, sign);
    else
        alert('Введите число');
};