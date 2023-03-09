let countdownTagHeader;
let countdownTagNumber;
let memoryTag;
let inputMemory;
let examAnswer;
let countdown;

let pTagText;
let spaText;
let engText;
let userText;
let correctList;
let incorrectList;
let pointTag;

let randomData = 0;

const showCountdown = () => {
    let countdownTimer = 2;
    countdown = setInterval(() => {
        countdownTagNumber.textContent = countdownTimer - 1;
        countdownTimer--;
        if (countdownTimer == 0) {
            countdownTagHeader.style.display = "none";
            countdownTagNumber.style.display = "none";
            showMemory();
        }
    }, 1000);
};

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
};

const showForm = () => {
    inputMemory.style.display = "block";
    inputMemory.addEventListener("submit", acquireUserInput);
};

const acquireUserInput = (userInput) => {
    userInput.preventDefault();
    if (
        !userInput.target.memoryTypeText.value ||
        userInput.target.memoryTypeText.value == " "
    ) {
        alert("Cannot accept blank values");
        userInput.target.memoryTypeText.value = "";
        showForm();
    } else {
        inputMemory.style.display = "none";
        fetchMemoryData(userInput);
    }
};


async function fetchMemoryData(userInput) {
    const response = await fetch("http://localhost:3000/memorydata");
    if (response.status == 200) {
        let data = await response.json();
        if (randomData != true) {
            data = generateRandomData(data);
        }
        showFeedback(data, userInput);
    }
}

const generateRandomData = (data) => {
    if (randomData == true) {
        let random = Math.floor(Math.random() * 5);
        return data[random];
    } else {
        return data[randomData];
    }
};

const showFeedback = (respData, userInput) => {
    let span = document.createElement("SPAN");
    span.setAttribute("class", "correctText");

    let spaWordArr = respData.spanishText.split(" ");
    let engWordArr = respData.englishText.split(" ");

    highlightKeywordsInGreen(spaWordArr, respData.spanishKeywords, spaText);
    highlightKeywordsInGreen(engWordArr, respData.englishKeywords, engText);

    let engKeywordArr = [];
    engKeywordArr = processEnglishKeywords(
        engWordArr,
        respData.englishKeywords
    );

    //process user input
    let userInputValue = userInput.target.memoryTypeText.value;
    let userInputValueArr = userInputValue.split(" ");

    let points = 0;

    points += noteRightWrongAnswers(
        engKeywordArr,
        userInputValueArr,
        true,
        correctList,
        3
    );
    points += noteRightWrongAnswers(
        userInputValueArr,
        engWordArr,
        false,
        incorrectList,
        -0.5
    );
    points += noteRightWrongAnswers(
        engWordArr,
        userInputValueArr,
        false,
        incorrectList,
        -1
    );

    alert(`+3 points for each correct keyword. 
    -0.5 points for each incorrect minor.
    -1 points for each word not included within translation.`);

    displayPointsAndFeedback(points, userInputValue);
};

const highlightKeywordsInGreen = (wordArr, keywordIndexArr, appendTag) => {
    let append;
    for (let i = 0; i < wordArr.length; i++) {
        append = document.createElement("SPAN");
        if (keywordIndexArr.includes(i + 1)) {
            append.setAttribute("class", "correctText");
        }
        append.innerHTML = wordArr[i] + " ";
        appendTag.appendChild(append);
    }
};

const processEnglishKeywords = (engWordArr, indexKeywordArr) => {
    let engKeywordArray = [];
    for (let i = 0; i < engWordArr.length; i++) {
        if (indexKeywordArr.includes(i + 1)) {
            engKeywordArray.push(engWordArr[i]);
        }
    }
    return engKeywordArray;
};

const noteRightWrongAnswers = (
    inclusiveArr,
    comparedArr,
    boolComparison,
    htmlTagAppend,
    pointAdd
) => {
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
};

const displayPointsAndFeedback = (pointsNumber, userInputValue) => {
    let pointCalculation = document.createElement("h3");
    pointCalculation.textContent = `Points: ${pointsNumber}`;
    pointTag.appendChild(pointCalculation);

    userText.innerHTML = userInputValue;

    examAnswer.style.display = "block";
};

const startMemoryGame = () => {
    document.getElementById("memoryGame").innerHTML = `
    <h1>Test Your Memory in Foreign Languages</h1>
    <h2>Memorize the Sentences and Write what you See</h2>
    <h3 id="countdownTagHeader">countdown</h3>
    <h3 id="countdownTagNumber">5</h;p[-3>
    <img src="./resources/testImage.jpg" id="memoryTag">

    <section id="inputMemory">
        <form>
            <label>Repeat what you say in English</label>
            <input type="text" id="memoryTypeText", placeholder="Your Sentence">
            <input type="submit" value="submit">
        </form>
    </section>
    <section id="examAnswerSection">
        <h3>What was in Spanish</h3>
        <p id="spaText"></p>
        <h3>English Translation</h3>
        <p id="engText"></p>
        <h3>What you wrote</h3>
        <p id="userText"></p>
        <h3>Keywords you got correct</h3>
        <ol id="correctList"></ol>
        <h3>Words you got incorrect or added</h3>
        <ol id="incorrectList"></ol>
        <h3 id="pointTag"></h3>
    </section>
    `;
    countdownTagHeader = document.getElementById("countdownTagHeader");
    countdownTagNumber = document.getElementById("countdownTagNumber");
    memoryTag = document.getElementById("memoryTag");
    inputMemory = document.querySelector("#inputMemory form");
    examAnswer = document.getElementById("examAnswerSection");

    memoryTag.style.display = "none";
    inputMemory.style.display = "none";
    examAnswer.style.display = "none";

    pTagText = document.querySelector("#spaText p");
    spaText = document.getElementById("spaText");
    engText = document.getElementById("engText");
    userText = document.getElementById("userText");
    correctList = document.getElementById("correctList");
    incorrectList = document.getElementById("incorrectList");
    pointTag = document.getElementById("pointTag");

    showCountdown();
};

