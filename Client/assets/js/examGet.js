const QuestionDis = document.querySelector("#questions h1");
const answerOptions = document.querySelector("#options");
const option1Dis = document.querySelector("#option1");
const option2Dis = document.querySelector("#option2");
const option3Dis = document.querySelector("#option3");

let data;

let random = Math.floor(Math.random() * 3);
let subject;
if (random == 0) {
    subject = "English-lang";
} else if (random == 1) {
    subject = "Music";
} else {
    subject = "Foreign-Lang";
}

async function fetchJsonResponse() {
    const response = await fetch(`http://127.0.0.1:3000/Questions/${subject}`);
    if (response.ok) {
        data = await response.json();
        console.log(data);
        setupQuestionAnswers(data);
    }
}

const setupQuestionAnswers = (data) => {
    printQuestionAnswer(data.Question, QuestionDis);
    let randomNumber;
    let randomArray = [
        ["option1", "option2", "option3"],
        [option1Dis, option2Dis, option3Dis],
        [],
    ];
    while (randomArray[2].length != 3) {
        randomNumber = Math.floor(Math.random() * 3);
        if (!randomArray[2].includes(randomNumber)) {
            randomArray[2].push(randomNumber);
            printQuestionAnswer(
                data[randomArray[0][randomNumber]],
                randomArray[1][randomArray[2].length - 1]
            );
        }
    }
};

const printQuestionAnswer = (dataKey, sourceAppend) => {
    let append = document.createElement("h1");
    append.textContent = dataKey;
    sourceAppend.appendChild(append);
};

const checkAnswer = (userInput) => {
    let optionArr = [option1Dis, option2Dis, option3Dis];
    let append = document.createElement("h1");
    if (userInput.target.textContent == data.option1) {
        append.textContent = "You have chosen the correct answer";
    } else {
        append.textContent = "Wrong answer";
    }
    answerOptions.appendChild(append);
};
answerOptions.addEventListener("click", checkAnswer);

// main
fetchJsonResponse();
answerOptions.addEventListener("click", checkAnswer);
