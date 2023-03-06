
const countdownTag = document.getElementById("countdownTag");
const memoryTag = document.getElementById("memoryTag");
const inputMemory = document.querySelector("#inputMemory form");
const examAnswer = document.getElementById("examAnswerSection");

let countdown;
memoryTag.style.display = "none";
inputMemory.style.display = "none";
examAnswer.style.display = "none";

const pTagText = document.querySelector("#spaENGText p");
const spaEngText = document.getElementById("spaENGText");

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
    //console.log("called")
    userInput.preventDefault();
    inputMemory.style.display = "none";
    fetchMemoryData(userInput);
    
    //userInput.target.memoryTypeText.value = "";
}

async function fetchMemoryData(userInput) {
    console.log("asd")
    const response = await fetch("http://localhost:3000/memorydata");
    if (response.status == 200) {
        //console.log("response", response);
        //console.log(response.body, response.body.textContent);
        //console.log(response.json());
        const data = await response.json();
        console.log("data", data);
        showFeedback(data, userInput)
        //console.log(data, typeof data);
        //console.log(data[0].spanishText)
    }
}

const showFeedback = (respData, userInput) => {
    spaEngText.innerHTML = respData[0].spanishText + " " + respData[0].englishText;
    examAnswer.style.display = "block";
}

showCountdown();