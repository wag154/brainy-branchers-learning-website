const QuestionDis = document.querySelector("#questions h1");
const answerOptions = document.querySelector("#options");
const option1Dis = document.querySelector("#option1");
const option2Dis = document.querySelector("#option2");
const option3Dis = document.querySelector("#option3");

let data;

let random = Math.floor(Math.random()*3);
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
    if (response.status == 200) {
        data = await response.json();
        console.log(data);
        answerOptions.addEventListener("click", checkAnswer);
    }
}

const checkAnswer = (UserInput) => {
    console.log(UserInput)
}

fetchJsonResponse();
