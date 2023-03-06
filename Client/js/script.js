const HangmanDisplay = document.querySelector("#Display-Hangman div");
const EnteredLetter = document.querySelector("#Interaction");

const CheckLetter = () =>{
  e.preventDefault();
  let letter = e.target.UserInput.value;

  if (typeof letter != "string"){
    alert("Please Enter A Letter, Not A Number!")
  }
}

const getLetter = (letter) =>{

}

EnteredLetter.addEventListener("submit",CheckLetter);