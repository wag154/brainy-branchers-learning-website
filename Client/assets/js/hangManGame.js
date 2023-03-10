let HangmanDisplay;
let lettersLeftDis;
let EnteredLetter;
let commentDis;
let LettersUsed;

const ExampleWords = [
    "hello",
    "world",
    "put",
    "bin",
    "wheel",
    "fool",
    "drool",
    "pool",
];

let max = ExampleWords.length;
let min = 1;
let random = Math.floor(Math.random() * (max - min) + min);
let comment;
let word = ExampleWords[random - 1];
max = word.length;
let correct = 0;
let incorrect = 0;
let indexOfLetters = [];
listOfLetters = [];

const GetMax = (words) => {
    let nMin = 1;
    let nMax = 6;
    random = Math.floor(Math.random() * (max - min) + min);
    word = words[`word${random}`];
    comment = words[`WordMeaning${random}`];
    max = word.length;
    defineLetterArr();
    commentDis.textContent = comment;
    DisplayHang(" ");
};
async function getJSON() {
    const response = await fetch("http://127.0.0.1:3000/HangWords");
    const data = await response.json();
    GetMax(data);
}
const defineLetterArr = () => {
    for (let i = 0; max > i; i++) {
        indexOfLetters.push(" _");
    }
};

const newWord = () => {
    correct = 0;
    indexOfLetters = [];
    LettersUsed.textContent = "Letters Used : ";
    listOfLetters = [];
    getJSON();
};
const findLetter = (letter) => {
    underscore = "";
    let isCorrect = false;
    for (let i = 0; max > i; i++) {
        if (word[i] == letter) {
            console.log("Yes");
            indexOfLetters[i] = letter;
            correct++;
            isCorrect = true;
        }
    }
    if (isCorrect == false) {
        console.log(incorrect);
        incorrect++;
    }
    indexOfLetters.forEach((Letter) => {
        underscore += Letter;
    });

    return underscore;
};

const DisplayHang = (letter) => {
    const underscore = findLetter(letter);
    lettersLeftDis.textContent = underscore;
    if (correct == max) {
        lettersLeftDis.textContent = "WELL DONE!";
        correct = 0;
        newWord();
    } else if (incorrect == 5) {
        lettersLeftDis.textContent = `YOU RAN OUT OF TRIES! The word was :${word}`;
        const timer = setTimeout(newWord, 5000);
    }
};
const CheckLetter = (e) => {
    e.preventDefault();

    let Letter = e.target.UserInput.value;

    numbers = "1234567890";

    if (numbers.includes(Letter)) {
        alert("Please Enter A Letter, not anything else!");
    } else {
        if (listOfLetters.includes(Letter)) {
            alert("Letter already used!");
        } else {
            listOfLetters.push(Letter);
            LettersUsed.textContent += Letter + " , ";
            DisplayHang(Letter);
        }
    }
    e.target.UserInput.value = "";
};
const startHangManGame = () => {
    document.getElementById("hangManGame").innerHTML = `
    <section id = "Menu">

    <h1><strong>Hangman Game</strong></h1>

  </section>

  <section id = "MainDis">
    
    <section id = "Display-Hangman">
      <div id = "HangmanDis">
        
      </div>
      
      <section id = "DescribeDis">
        <h1 id = "Describe">No specific trend</h1>
      </section>
      
      <section id = "UsedLettersDis">
        <h1 id = "LettersUsed"></h1>
      </section>
      
      <div id = "LettersLefts"><h1></h1></div>
      
    </section>
    
    <section id= "Interaction">
      <form>
        <input class = "btn" type = "submit" value = "submit">
        <input class = "Input" id = "letter" type = "text" name = "UserInput" maxlength="1" placeholder="Enter a letter">
      </form>
    </section>
    <a><button id = "ReturnBtn"></button></a>
  </section>
    `;
    HangmanDisplay = document.querySelector("#HangmanDis");
    LettersUsed = document.querySelector("#LettersUsed");
    LettersUsed.textContent = "Letters Used : ";
    commentDis = document.querySelector("#Describe");
    EnteredLetter = document.querySelector("#Interaction form");
    lettersLeftDis = document.querySelector("#LettersLefts h1");
    defineLetterArr();
    DisplayHang(" ");
    EnteredLetter.addEventListener("submit", CheckLetter);
};
