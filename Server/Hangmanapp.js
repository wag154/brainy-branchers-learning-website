const express = require("express");
const cors = require ("cors");
const hangWords = require("./Hangman.json");
const app = express();
app.use(express.json());
app.use(cors());


app.use ("/HangWords", (req,res)=>{
app.use ("/lecture",(req,res)=>{

  

}
)
res.send(hangWords)
})

module.exports = app;