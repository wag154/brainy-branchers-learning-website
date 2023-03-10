
async function getData1() {
    try {
        await fetch("http://127.0.0.1:3000/userData/schedule1")
        .then((response) => response.json())
        .then((data)=>appendEvents(data));
    } catch (error) {
        console.log("fetch failed", error);
    }
}
function appendEvents(data) {
    let days = document.querySelectorAll(".day");
    let rowHeight = 20; 
    let gap = 10; 
    for (let i = 0; i < data.length; i++) {
        let event = document.createElement("div");
        event.classList.add("event");
        event.textContent = data[i].name;
        let start = parseInt(data[i].start.split(":")[0]);
        let end = parseInt(data[i].end.split(":")[0]);
        let top = (start - 7) * (rowHeight + gap) + gap;
        let height = (end - start) * (rowHeight + gap) - gap;
        event.style.top = top + "px";
        event.style.height = height + "px";
        event.addEventListener("click", function () {
            alert("More details about " + this.textContent);
        });
        let column = data[i].column - 1;
        days[column].appendChild(event);
    }
}

// call the function when the window is loaded
window.addEventListener("load", function () {
    getData1()
});