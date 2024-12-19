function checkInput() {
    let amountOfFigures = document.getElementById("input").value;

    if (amountOfFigures < 0) {
        alert('Количество фигур не может быть отрицательным');
        return false;
    }
    else return true;
}