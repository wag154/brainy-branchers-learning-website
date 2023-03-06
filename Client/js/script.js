const HangmanDisplay = document.querySelector("#HangmanDis");
const lettersLeftDis = document.querySelector("#LettersLefts h1")
const EnteredLetter = document.querySelector("#Interaction form");
const ExampleWords = ["hello","world","put","bin","wheel","fool","drool","pool"]

let max = ExampleWords.length;
let min = 1;
let random = Math.floor(Math.random()*(max+min) - min)

let word = ExampleWords[random-1];
max = word.length;
let correct = 0;

let indexOfLetters = [];


const defineLetterArr = () =>{

  for (let i = 0; max > i; i++){
    indexOfLetters.push(" _")
  }
}

const newWord = () =>{
  correct = 0;
  indexOfLetters = [];

}
const findLetter = (letter) => {

underscore = "";

  for (let i = 0; max > i ; i++){

   if (word[i] == letter){
   
    indexOfLetters[i] = letter;
    correct ++
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
  newWord();

}}


const CheckLetter = (e) =>{

  e.preventDefault();

  let Letter = e.target.UserInput.value;

  numbers = "1234567890";

  if (numbers.includes(Letter)){

    console.log("Not a string")

    alert("Please Enter A Letter, Not A Number!")
  }

  else {

    DisplayHang(Letter);

  }

  e.target.UserInput.value = "";
}
defineLetterArr();
DisplayHang(" ");
EnteredLetter.addEventListener("submit",CheckLetter);