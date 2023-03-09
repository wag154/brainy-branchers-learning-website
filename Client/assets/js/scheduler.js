var data = [
    {
        name: "Meeting",
        start: "9:00",
        end: "10:00",
        column: 1, // first day
    },
    {
        name: "Lunch",
        start: "12:00",
        end: "13:00",
        column: 2, // second day
    },
    {
        name: "Workshop",
        start: "14:00",
        end: "16:00",
        column: 3, // third day
    },
];

// function to create and append event elements
function appendEvents(data) {
    var days = document.querySelectorAll(".day");
    var rowHeight = 20; 
    var gap = 10; 
    for (var i = 0; i < data.length; i++) {
        var event = document.createElement("div");
        event.classList.add("event");
        event.textContent = data[i].name;
        var start = parseInt(data[i].start.split(":")[0]);
        var end = parseInt(data[i].end.split(":")[0]);
        var top = (start - 7) * (rowHeight + gap) + gap;
        var height = (end - start) * (rowHeight + gap) - gap;
        event.style.top = top + "px";
        event.style.height = height + "px";
        event.addEventListener("click", function () {
            alert("More details about " + this.textContent);
        });
        var column = data[i].column - 1;
        days[column].appendChild(event);
    }
}

// call the function when the window is loaded
window.addEventListener("load", function () {
    appendEvents(data);
});