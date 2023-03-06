const express = require("express");
const cors = require ("cors");
const hangWords = require("./Hangman.json");
const app = express();
app.use(express.json());
app.use(cors());


app.use ("/HangWords", (req,res)=>{

let min = 1;
let max = 6;
let random = Math.floor(Math.random()*(max-min)+min)

//res.send(hangWords[`word${random}`])
res.send(hangWords)
})

module.exports = app;