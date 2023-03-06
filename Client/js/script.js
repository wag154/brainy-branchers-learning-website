const HangmanDisplay = document.querySelector("#HangmanDis");
const lettersLeftDis = document.querySelector("#LettersLefts h1")
const EnteredLetter = document.querySelector("#Interaction form");
const ExampleWords = ["hello","world","put","bin","wheel","fool","drool","pool"]

let max = ExampleWords.length;
let min = 1;
let random = Math.floor(Math.random()*(max+min) - min)
let word =ExampleWords[random-1];

const findLetter = (letter) => {
underscore = "";

  for (let i = 0; max > i ; i++){
   if (word[i] == letter){
     underscore += ` ${letter}`;
  }
  else {
    underscore += "_ "
  }
  return underscore
}}


const DisplayHang = (letter) =>{
console.log("Display")
const underscore =  findLetter(letter)
console.log(underscore)
lettersLeftDis.textContent = underscore;

}

const CheckLetter = (e) =>{
  e.preventDefault();
  let Letter = e.target.UserInput.value;

  numbers = "1234567890"

  if (numbers.includes(Letter)){

    console.log("Not a string")

    alert("Please Enter A Letter, Not A Number!")
  }
  else {
    DisplayHang(Letter)
  }
  e.target.UserInput.value = "";
}

EnteredLetter.addEventListener("submit",CheckLetter);