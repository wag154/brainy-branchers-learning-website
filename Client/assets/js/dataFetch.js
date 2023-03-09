// This is the URL of the JSON file that contains the messages
const url = "https://example.com/messages.json";
function fetch() {
    const data = [
        {
            messages: [
                {
                    text: "Hello, this is the first message.",
                },
                {
                    text: "Hi, this is the second message.",
                },
                {
                    text: "Hey, this is the third message.",
                },
                {
                    text: "Hey, this is the hird message.",
                },
                {
                    text: "Hey, this is the tird message.",
                },
                {
                    text: "Hey, this is the thrd message.",
                },
                {
                    text: "Hey, this is the third messge.",
                },
                {
                    text: "Hey, this is the third mesage.",
                },
                {
                    text: "Hey, this is the third mesage.",
                },
                {
                    text: "Hey, this is the third mesage.",
                },
                {
                    text: "Hey, this is the third messge.",
                },
                {
                    text: "Hey, this is the third mesage.",
                },
                {
                    text: "Hey, this is the third mesage.",
                },
                {
                    text: "Hey, this is the third messge.",
                },
                {
                    text: "Hey, this is the third messge.",
                },
                {
                    text: "Hey, this is the third mesage.",
                },
            ],
        },
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}
async function fetchAndDisplayMessages(elementID, dataURL) {
    const messageBox = document.getElementById(elementID);
    fetch(dataURL)
        // .then((response) => response.json()) // This converts the response to a JSON object
        .then((data) => {
            for (let message of data[0].messages) {
                let p = document.createElement("p");
                p.textContent = message.text;
                messageBox.appendChild(p);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

// This calls the function when the web page is loaded
window.onload = fetchAndDisplayMessages("due-box");
