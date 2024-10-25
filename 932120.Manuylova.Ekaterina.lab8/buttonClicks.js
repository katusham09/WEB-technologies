const list = document.getElementById("lines");

function newLine() {
    let figure = document.createElement('div');
    figure.className = "line";
    list.appendChild(figure);

    let tempElement = document.createElement('input');
    tempElement.className = "left";
    figure.appendChild(tempElement);

    tempElement = document.createElement('input');
    tempElement.className = "right";
    figure.appendChild(tempElement);

    tempElement = document.createElement('button');
    tempElement.className = "up";
    tempElement.innerHTML = "↑";
    tempElement.addEventListener(
        'click',
        function() {
            let currentElement = this.parentNode;
            let previousElement = currentElement.previousSibling;
            list.insertBefore(currentElement, previousElement);
        }
    )
    figure.appendChild(tempElement);

    tempElement = document.createElement('button');
    tempElement.className = "down";
    tempElement.innerHTML = "↓";
    tempElement.addEventListener(
        'click',
        function() {
            let currentElement = this.parentNode;
            let nextElement = currentElement.nextSibling;
            list.insertBefore(nextElement, currentElement);
        }
    )
    figure.appendChild(tempElement);

    tempElement = document.createElement('button');
    tempElement.className = "delete";
    tempElement.innerHTML = "x";
    tempElement.addEventListener(
        'click',
        function() {
            let currentElement = this.parentNode;
            list.removeChild(currentElement);
        }
    )
    figure.appendChild(tempElement);
}

function getList() {
    let listOnScreen = document.createElement('p');
    listOnScreen.id = "list";
    let tempString = "{";

    for (let i = 0; i< list.children.length; i++) {
        tempString += "\"" + list.children[i].children[0].value + "\":\"" + list.children[i].children[1].value + "\","
    }
    tempString = tempString.slice(0, -1);
    tempString += "}"

    let textNode = document.createTextNode(tempString);
    listOnScreen.append(textNode);

    if (document.body.contains(list)) document.body.replaceChild(listOnScreen, document.body.lastChild);
    else document.body.appendChild(listOnScreen);
    
}