let columns = [document.getElementById("cat"), document.getElementById("dog")];
let images = [document.getElementById("cat_image"), document.getElementById("dog_image")]

document.getElementById("showLeftColumn").addEventListener(
    "click",
    function() {
        columns[0].style.width = "850px";
        columns[1].style.width = "44px";
        images[0].style.display = "block";
        images[1].style.display = "none";
        images[0].style.width = "auto";
    }
)

document.getElementById("showRightColumn").addEventListener(
    "click",
    function() {
        columns[0].style.width = "44px";
        columns[1].style.width = "850px";
        images[0].style.display = "none";
        images[1].style.display = "block";
        images[1].style.width = "auto";
    }
)

document.getElementById("showBothColumns").addEventListener(
    "click",
    function() {
        for(let i = 0; i < columns.length; i++) {
            columns[i].style.width="450px";
            images[i].style.display="block";
            images[i].style.width="410px";
        }
    }
)
