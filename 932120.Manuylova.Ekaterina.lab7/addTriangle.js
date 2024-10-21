document.getElementById("triangle-button").addEventListener(
    "click",
    function() {
        if (!checkInput()) {
            return;
        }

        for (let i = 0; i < document.getElementById("input").value; i++) {
            const triangle = document.createElement("div");
            triangle.classList.add("triangle");
            triangle.classList.add("figure");
    
            triangle.style.height = 0;
            triangle.style.width = 0;

            triangle.style.borderLeft = getRandomInt(0, 200) + "px solid transparent";
            triangle.style.borderRight = triangle.style.borderLeft;
            triangle.style.borderBottom = parseInt(triangle.style.borderLeft) + "px solid blue";

            triangle.style.top = getRandomInt(0, window.innerHeight - parseInt(triangle.style.borderBottom)) + "px";
            triangle.style.left = getRandomInt(0, window.innerWidth - parseInt(triangle.style.borderLeft)*2) + "px";
    
            document.body.appendChild(triangle);
    
            triangle.addEventListener(
                "dblclick",
                function() {
                    document.body.removeChild(triangle);
                }
            )

            triangle.addEventListener(
                "click",
                function() {
                    let figures = document.querySelectorAll(".figure");
                    figures.forEach(element => {
                        element.style.borderBottomColor="";
                        element.style.backgroundColor="";
                    });

                    triangle.style.borderBottomColor = "yellow";
                }
            )
        }
    }
)