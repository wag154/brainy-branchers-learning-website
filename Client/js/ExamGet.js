const QuestionDis = document.querySelector("#questions h1");
const answerOptions = document.querySelector("#options");
const option1Dis = document.querySelector("#option1");
const option2Dis = document.querySelector("#option2");
const option3Dis = document.querySelector("#option3");

async function fetchJsonResponse() {
    const Response = await fetch("http://127.0.0.1:3000/Questions");
    if (response.status == 200) {
        const data = await response.json();

    }
}

const checkAnswer = (UserInput) => {
    console.log(UserInput);
}

answerOptions.addEventListener("click", checkAnswer);

