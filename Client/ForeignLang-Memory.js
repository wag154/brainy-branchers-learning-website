
const countdownTag = document.getElementById("countdownTag");
const memoryTag = document.getElementById("memoryTag")
const inputMemory = document.querySelector("#inputMemory form");

let countdown;
memoryTag.style.display = "none";
inputMemory.style.display = "none";

const showCountdown = () => {
    let countdownTimer = 5;
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
    let countdownTimer = 3;
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
    userInput.preventDefault();
    //userInput.target.memoryTypeText.value = "";
}

showCountdown();