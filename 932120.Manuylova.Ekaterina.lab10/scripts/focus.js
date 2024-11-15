function focus() {
    rabbit.classList.toggle("inTheHat");
    rabbit.classList.toggle("outOfHat");
    pigeon.classList.toggle("inTheHat");
    pigeon.classList.toggle("outOfHat");
}

pigeon.addEventListener("click", focus);
rabbit.addEventListener("click", focus);
