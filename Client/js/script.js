const HangmanDisplay = document.querySelector("#HangmanDis");
const lettersLeftDis = document.querySelector("#LettersLefts h1");
const EnteredLetter = document.querySelector("#Interaction form");
const commentDis = document.querySelector("#Describe");
const LettersUsed = document.querySelector("#LettersUsed");

const ExampleWords = ["hello","world","put","bin","wheel","fool","drool","pool"]

let max = ExampleWords.length;
let min = 1;
let random = Math.floor(Math.random()*(max-min) + min)
let comment;
let word = ExampleWords[random-1];
max = word.length;
let correct = 0;
let incorrect;
let indexOfLetters = [];


const GetMax = (words) =>{
  let nMin = 1;
  let nMax = 6;
  random = Math.floor(Math.random()* (max-min) + min)
  word =words[`word${random}`]
  comment = words[`WordMeaning${random}`]
  max = word.length
  defineLetterArr()
  commentDis.textContent = comment;
  DisplayHang(" ")
}

async function getJSON() {

  const response = await fetch("http://127.0.0.1:3000/HangWords");
  const data = await response.json();
  GetMax(data)

}
const defineLetterArr = () =>{

  for (let i = 0; max > i; i++){
    indexOfLetters.push(" _")
  }
}

const newWord = () =>{
  correct = 0;
  indexOfLetters = [];
  getJSON();

}
const findLetter = (letter) => {

underscore = "";

  for (let i = 0; max > i ; i++){

   if (word[i] == letter){
   
    indexOfLetters[i] = letter;
    correct ++
  }
  else {
    incorrect ++;
  }
}

indexOfLetters.forEach((Letter) => {
 
  underscore+=Letter;

})

return underscore;
}

const DisplayHang = (letter) =>{
  const underscore = findLetter(letter);

lettersLeftDis.textContent = underscore;

if (correct == max){
  lettersLeftDis.textContent = "WELL DONE!"
  correct = 0;
  newWord();

}
else if (incorrect == 5){

  lettersLeftDis.textContent = "YOU RAN OUT OF TRIES!"

}}


const CheckLetter = (e) =>{

  e.preventDefault();

  let Letter = e.target.UserInput.value;

  numbers = "1234567890";

  if (numbers.includes(Letter)){

    alert("Please Enter A Letter, not anything else!")
  }

  else {

    DisplayHang(Letter);

  }

  e.target.UserInput.value = "";
}
defineLetterArr();
DisplayHang(" ");
EnteredLetter.addEventListener("submit",CheckLetter);