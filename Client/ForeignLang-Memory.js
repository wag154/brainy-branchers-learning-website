
const countdownTag = document.getElementById("countdownTag");
const memoryTag = document.getElementById("memoryTag")
const inputMemory = document.querySelector("#inputMemory form");

let countdown;
memoryTag.style.display = "none";
inputMemory.style.display = "none";

const showCountdown = () => {
    let countdownTimer = 2;
    countdown = setInterval (() => {
        countdownTag.textContent = countdownTimer-1;
        countdownTimer--;
        if (countdownTimer == 0) {
            countdownTag.style.display = "none";
            showMemory();
        }
    }, 1000);
}

const showMemory = () => {
    memoryTag.style.display = "block";
    let countdownTimer = 1;
    countdown = setInterval(() => {
        if (countdownTimer == 0) {
            memoryTag.style.display = "none";
            showForm();
        }
        countdownTimer--;
    }, 1000);
}

const showForm = () => {
    inputMemory.style.display = "block";
    inputMemory.addEventListener("submit", acquireUserInput);
}

const acquireUserInput = (userInput) => {
    console.log("called")
    userInput.preventDefault();
    inputMemory.style.display = "none";
    fetchMemoryData()
    
    //userInput.target.memoryTypeText.value = "";
}

async function fetchMemoryData() {
    const response = await fetch("http://localhost:3000/memorydata");
    if (response.status == 200) {
        //console.log("response", response);
        //console.log(response.body, response.body.textContent);
        //console.log(response.json());
        const data = await response.json()
        //console.log(data, typeof data);
        //console.log(data[0].spanishText)
    }
}

showCountdown();