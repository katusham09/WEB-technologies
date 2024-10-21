document.getElementById("circle-button").addEventListener(
    "click",
    function() {
        if (!checkInput()) {
            return;
        }

        for (let i = 0; i < document.getElementById("input").value; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            circle.classList.add("figure");
    
            circle.style.height = getRandomInt(0, 200) + "px";
            circle.style.width = circle.style.height;
            circle.style.top = getRandomInt(0, window.innerHeight - parseInt(circle.style.height)) + "px";
            circle.style.left = getRandomInt(0,window.innerWidth - parseInt(circle.style.width)) + "px";
    
            document.body.appendChild(circle);
    
            circle.addEventListener(
                "dblclick",
                function() {
                    document.body.removeChild(circle);
                }
            )

            circle.addEventListener(
                "click",
                function() {
                    let figures = document.querySelectorAll(".figure");
                    figures.forEach(element => {
                        element.style.borderBottomColor="";
                        element.style.backgroundColor="";
                    });

                    circle.style.backgroundColor = "yellow";
                }
            )
        }
    }
)