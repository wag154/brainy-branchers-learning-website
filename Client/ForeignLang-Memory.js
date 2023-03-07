
const countdownTag = document.getElementById("countdownTag");
const memoryTag = document.getElementById("memoryTag");
const inputMemory = document.querySelector("#inputMemory form");
const examAnswer = document.getElementById("examAnswerSection");

let countdown;
memoryTag.style.display = "none";
inputMemory.style.display = "none";
examAnswer.style.display = "none";

const pTagText = document.querySelector("#spaText p");
const spaText = document.getElementById("spaText");
const engText = document.getElementById("engText");
const userText = document.getElementById("userText");
const correctList = document.getElementById("correctList");
const incorrectList = document.getElementById("incorrectList");
const pointTag = document.getElementById("pointTag");

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
    userInput.preventDefault();
    inputMemory.style.display = "none";
    fetchMemoryData(userInput);
}

async function fetchMemoryData(userInput) {
    const response = await fetch("http://localhost:3000/memorydata");
    if (response.status == 200) {
        const data = await response.json();
        console.log("data", data);
        showFeedback(data, userInput)
    }
}

const showFeedback = (respData, userInput) => {  
    let span = document.createElement("SPAN");
    span.setAttribute("class", "correctText");

    let pAppend = document.createElement("P");

    let spaWordArr = respData[0].spanishText.split(" ");
    let engWordArr = respData[0].englishText.split(" ");
    console.log("spaarr", spaWordArr)
    console.log("spaarr", engWordArr)
 
    highlightKeywordsInGreen(spaWordArr, respData[0].spanishKeywords, spaText);
    highlightKeywordsInGreen(engWordArr, respData[0].englishKeywords, engText);

    let engKeywordArr = [];
    engKeywordArr = processEnglishKeywords(engWordArr, respData[0].englishKeywords);
  
    //process user input
    let userInputValue = userInput.target.memoryTypeText.value;
    let userInputValueArr = userInputValue.split(" ");

    let points = 0;
    
    points += noteRightWrongAnswers(engKeywordArr, userInputValueArr, true, correctList, 3);
    points += noteRightWrongAnswers(userInputValueArr, engWordArr, false, incorrectList, -0.5);
    points += noteRightWrongAnswers(engWordArr, userInputValueArr, false, incorrectList, -1);

    alert(`3 points for each correct keyword. 
    -0.5 points for each incorrect minor.
    -1 points for each word not included within translation.`)

    displayPointsAndFeedback(points, userInputValue)
}

const highlightKeywordsInGreen = (wordArr, keywordIndexArr, appendTag) => {
    let append;
    for (let i = 0; i < wordArr.length; i++) {
        append = document.createElement("SPAN");
        if (keywordIndexArr.includes(i+1)) {
            append.setAttribute("class", "correctText");
        }
        append.innerHTML = wordArr[i] + " ";
        appendTag.appendChild(append);
    }
}

const processEnglishKeywords = (engWordArr, indexKeywordArr) => {
    let engKeywordArray = [];
    for (let i = 0; i < engWordArr.length; i++) {
        if (indexKeywordArr.includes(i+1)) {
            engKeywordArray.push(engWordArr[i]);
        }
    }
    return engKeywordArray;
}

const noteRightWrongAnswers = (inclusiveArr, comparedArr, boolComparison, htmlTagAppend, pointAdd) => {
    let points = 0;
    for (let i = 0; i < comparedArr.length; i++) {
        let elementCreation = document.createElement("li");
        if (inclusiveArr.includes(comparedArr[i]) == boolComparison) {
            elementCreation.textContent = comparedArr[i];
            htmlTagAppend.appendChild(elementCreation);
            points += pointAdd;
        }
    }
    return points;
}

const displayPointsAndFeedback = (pointsNumber, userInputValue) => {
    let pointCalculation = document.createElement("h3");
    pointCalculation.textContent = `Points: ${pointsNumber}`
    pointTag.appendChild(pointCalculation);

    userText.innerHTML = userInputValue;
    
    examAnswer.style.display = "block";
}

showCountdown();
