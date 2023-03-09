const express = require("express");
const cors = require ("cors");
const hangWords = require("./Hangman.json");
const app = express();
const EnglishLang = require("./HangmanInformation.json")

app.use(express.json());
app.use(cors());


app.use ("/HangWords", (req,res)=>{
  res.send(hangWords)
  })

app.use ("/lecture",(req,res)=>{
  res.send(EnglishLang)
})

module.exports = app;