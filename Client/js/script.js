const HangmanDisplay = document.querySelector("#HangmanDis");
const lettersLeftDis = document.querySelector("#LettersLefts h1")
const EnteredLetter = document.querySelector("#Interaction form");
const ExampleWords = ["hello","world","put","bin","wheel","fool","drool","pool"]

let max = ExampleWords.length;
let min = 1;
let correct = 0;
let incorrect = 0;
let random = Math.floor(Math.random()*(max+min) - min)
let word =ExampleWords[random-1];

const LettersLeft = () =>{

  let left = max - correct;
  for (let i = 0; left > i ; i++){
    lettersLeftDis.textContent += "_ "
  }
}
const DisplayHang = () =>{
  LettersLeft();

}

const getLetter = (letter) =>{
  if (word.includes(letter) == true){
    correct ++;
  }
  else {
    incorrect ++
  }
  DisplayHang()
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
    getLetter(Letter)
  }
  e.target.UserInput.value = "";
}

EnteredLetter.addEventListener("submit",CheckLetter);