document.getElementById("square-button").addEventListener(
    "click",
    function() {
        if (!checkInput()) {
            return;
        }

        for (let i = 0; i < document.getElementById("input").value; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("figure");
    
            square.style.height = getRandomInt(0, 200) + "px";
            square.style.width = square.style.height;
            square.style.top = getRandomInt(0, window.innerHeight - parseInt(square.style.height)) + "px";
            square.style.left = getRandomInt(0,window.innerWidth - parseInt(square.style.width)) + "px";
    
            document.body.appendChild(square);
    
            square.addEventListener(
                "dblclick",
                function() {
                    document.body.removeChild(square);
                }
            )

            square.addEventListener(
                "click",
                function() {
                    let figures = document.querySelectorAll(".figure");
                    figures.forEach(element => {
                        element.style.borderBottomColor="";
                        element.style.backgroundColor="";
                    });

                    square.style.backgroundColor = "yellow";
                }
            )
        }
    }
)