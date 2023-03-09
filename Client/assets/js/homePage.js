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
