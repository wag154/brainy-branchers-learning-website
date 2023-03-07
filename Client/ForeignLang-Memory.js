
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
    let span = document.createElement("SPAN");
    span.setAttribute("class", "correctText");

    //spaEngText.innerHTML = "";
    let pAppend = document.createElement("P");

    let spaWordArr = respData[0].spanishText.split(" ");
    let engWordArr = respData[0].englishText.split(" ");
    //console.log("spaarr", spaArr)
    //console.log("keyword", respData[0].spanishKeywords)
    /*for (let i = 0; i < spaArr.length; i++) {

        if (respData[0].spanishKeywords.includes(i+1)) {
            console.log("spaarr inc", spaArr[i])
            span = document.createElement("SPAN");
            span.setAttribute("class", "correctText");
            span.innerHTML = spaArr[i] + " ";
            spaEngText.appendChild(span);
        } else {
            console.log("spaarr notinc", spaArr[i])
            pAppend = document.createElement("P");
            pAppend.innerHTML = spaArr[i] + " ";
            spaEngText.appendChild(pAppend);
        }
    }*/
    let append;
    for (let i = 0; i < spaWordArr.length; i++) {
        append = document.createElement("SPAN");
        if (respData[0].spanishKeywords.includes(i+1)) {
            //console.log("spaarr inc", spaKeywordArr[i])
            append.setAttribute("class", "correctText");
        }
        append.innerHTML = spaWordArr[i] + " ";
        //append.setAttribute("display", "flex");
        //append.setAttribute("justify-content", "space-between");
        spaText.appendChild(append);
    }

    //spaEngText.innerHTML = respData[0].spanishText + " " + respData[0].englishText;
    
    for (let i = 0; i < engWordArr.length; i++) {
        append = document.createElement("SPAN");
        if (respData[0].englishKeywords.includes(i+1)) {
            //console.log("spaarr inc", engKeywordArr[i])
            append.setAttribute("class", "correctText");
        }
        append.innerHTML = engWordArr[i] + " ";
        //append.setAttribute("display", "flex");
        //append.setAttribute("justify-content", "space-between");
        engText.appendChild(append);
    }
    
    //span.setAttribute("style", "color:blue");
    //span.innerHTML = "inner HTML text";
    //span.innerText = "inner texxt";
    
    //console.log("span", span.getAttribute("class"));
    //spaEngText.appendChild(span);

    let = engKeywordArr = []
    for (let i = 0; i < engWordArr.length; i++) {
        if (respData[0].englishKeywords.includes(i+1)) {
            engKeywordArr.push(engWordArr[i]);
        }
    }
    //console.log("engkeywordarr", engKeywordArr)

    //let addCorrectKeyword = document.createElement("li");

    let userInputValue = userInput.target.memoryTypeText.value;
    let userInputValueArr = userInputValue.split(" ");
    for (let i = 0; i < userInputValueArr.length; i++) {
        let addCorrectKeyword = document.createElement("li");
        if (engKeywordArr.includes(userInputValueArr[i])) {
            addCorrectKeyword.textContent = userInputValueArr[i];
            correctList.appendChild(addCorrectKeyword);
            console.log("log", userInputValueArr[i])
        }
    }

    userText.innerHTML = userInput.target.memoryTypeText.value;
    
    examAnswer.style.display = "block";
}

showCountdown();
