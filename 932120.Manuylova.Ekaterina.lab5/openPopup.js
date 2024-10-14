document.getElementById("button-popup1").addEventListener(
    "click",
    function() {
        let popup = document.getElementById("popup-new1");
        popup.classList.add("open");
        
        popup.addEventListener(
            "click",
            function() {
                popup.classList.remove("open");
            }
        )
    }
)

document.getElementById("button-popup2").addEventListener(
    "click",
    function() {
        let popup = document.getElementById("popup-new2");
        popup.classList.add("open");
        
        popup.addEventListener(
            "click",
            function() {
                popup.classList.remove("open");
            }
        )
    }
)

document.getElementById("button-popup3").addEventListener(
    "click",
    function() {
        let popup = document.getElementById("popup-new3");
        popup.classList.add("open");
        
        popup.addEventListener(
            "click",
            function() {
                popup.classList.remove("open");
            }
        )
    }
)