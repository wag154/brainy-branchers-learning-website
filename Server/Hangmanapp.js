const express = require("express");
const cors = require ("cors");
const hangWords = require("./Hangman.json");
const app = express();
const EnglishLang = require("./HangmanInformation.json");
const getExamQuestions = require("./exam.json");

app.use(express.json());
app.use(cors());


app.use ("/HangWords", (req,res)=>{
  res.send(hangWords)
  });

app.use("/Questions/:subject", (req,res) =>{
 // res.send("Hello worlds")
  res.send(getExamQuestions[req.params.subject])
});

app.use ("/lecture",(req,res)=>{

  res.send(EnglishLang)

})


module.exports = app;