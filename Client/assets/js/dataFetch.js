// This is the URL of the JSON file that contains the messages
const url = "https://example.com/messages.json";
let userID = 2;
async function fetchStats(userID) {
    const statsBox = document.getElementById("user-stats");
    fetch(`http:127.0.0.1:3000/userData/messages${userID}`)
        .then((data) => {
            for (let stat of data[0].stats) {
                let statName = document.createElement("p");
                statName.textContent = stat.name;
                statsBox.appendChild(statName);
                let statResult = document.createElement("p");
                statResult.textContent = stat.percent;
                statsBox.appendChild(statResult)
            }
        })
        .catch((error) => {
            console.error(error);
        });
}
async function fetchAndDisplayMessages(elementID, dataURL) {
    const messageBox = document.getElementById(elementID);
    fetch(`http://127.0.0.1:3000/userData/messages${userID}`)
        .then((response)=>response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let p = document.createElement("p");
                p.textContent = data[i].text;
                messageBox.appendChild(p);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

// This calls the function when the web page is loaded
window.onload = fetchAndDisplayMessages("due-box");
window.onload = fetchAndDisplayMessages("due-box1");