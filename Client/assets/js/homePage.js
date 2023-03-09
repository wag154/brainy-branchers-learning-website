function scrollToOther() {
    window.scrollTo(0, window.innerHeight);
}
let box = document.querySelector("#due-box");

let mouseInBox = false;
box.addEventListener("mouseenter", function () {
    mouseInBox = true;
});
box.addEventListener("mouseleave", function () {
    mouseInBox = false;
});
function toggleList(list) {
    let toBeToggled = document.querySelector(list);
    if (toBeToggled.style.display === "none") {
        toBeToggled.style.display = "block";
    } else {
        toBeToggled.style.display = "none";
    }
}

window.addEventListener("wheel", function (e) {
    if(mouseInBox) return;
    if (e.deltaY > 0) window.scrollTo(0, window.innerHeight);
    else if (e.deltaY < 0) window.scrollTo(0, 0);
});

//New code 
let showing = true;
function DisplayLoginOptions(){

    const ArrowSwitchElement = document.querySelector("#studentArrow");
    const DisplayOptions = document.querySelector(".LoginChoice");

    if (showing == true){
        ArrowSwitchElement.style.transform = "rotate(0deg)";
        DisplayOptions.style.display = "flex"
        showing = false
    }
    else{
        ArrowSwitchElement.style.transform = "rotate(-90deg)"
        DisplayOptions.style.display = "none"
        showing = true;
    }
}
let first = true;
function DisplaySchedule () {
   
    const arrowElement = document.querySelector("#DisArrow");
    const boxElement = document.querySelector("#buttonRes");
    const contentElement = document.querySelector(".dropdown-content");
    if (first == true){

        arrowElement.style.transform = "rotate(0deg)"
        contentElement.style.display = "block"
        first = false;
    }
    else{
        arrowElement.style.transform = "rotate(-90deg)";
        contentElement.style.display = "none"
        first = true;
    }

}
