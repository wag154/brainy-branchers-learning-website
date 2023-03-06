const HangmanDisplay = document.querySelector("#Display-Hangman div");
const EnteredLetter = document.querySelector("#Interaction form");

const CheckLetter = (e) =>{
  e.preventDefault();
  let Letter = e.target.UserInput.value;

  numbers = "1234567890"

  if (numbers.includes(Letter)){

    console.log("Not a string")

    alert("Please Enter A Letter, Not A Number!")
  }
  
  e.target.UserInput.value = "";
}

const getLetter = (letter) =>{

}

EnteredLetter.addEventListener("submit",CheckLetter);