const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;
const hangWords = require("./assets/hangman/guessWords.json");
const memoryData = require("./assets/memoryGame/memoryData.json");
// const englishLanguage = require("./HangmanInformation.json");
// const loginDataBase = require("./assets/dataBase/loginInfo.json");
app.use(express.json());
app.use(cors());


app.get("/HangWords", (req, res) => {
    res.send(hangWords);
});

app.get("/memorydata", (req, res) => {
    res.send(memoryData);
});
//   app.use ("/lecture",(req,res)=>{
//     res.send(englishLanguage)
//   })

const addObject = (username, password, name) => {
    const min = 1;
    const max = Number.MAX_SAFE_INTEGER;
    const random = Math.floor(Math.random() * (max - min) + min);
    userObject["id"] = random;
    userObject["username"] = username;
    userObject["password"] = password;
    userObject["name"] = name;
    return userObject;
};

app.get("/login/:username&:password", (req, res) => {
    loginInfo.map((User) => {
        if (
            User.username == req.params.username &&
            User.password == req.params.password
        )
            res.send(true);
    });
});

app.post("/userInfo/:username&:password&:name", (req, res) => {
    let userObject = {};
    const min = 1;
    const max = Number.MAX_SAFE_INTEGER;
    const random = Math.floor(Math.random() * (max - min) + min);

    userObject["id"] = random;
    userObject["username"] = req.params.username;
    userObject["password"] = req.params.password;
    userObject["name"] = req.params.name;
    req.body = userObject;

    fs.appendFile(
        "./assets/dataBase/loginInfo.json",
        JSON.stringify(userObject),
        (err) => {
            if (err) {
                res.status(500).send("Something went wrong");
                console.error(err);
            } else {
                res.status(200).send("JSON saved successfully");
                console.log(userObject);
            }
        }
    );
    res.send("Successful");
});
app.get("/Questions/:subject", (req, res) => {
    res.send(getExamQuestions[req.params.subject]);
});


app.get("/memorydata", (req, res) => {
    res.send(memoryData)
})
app.post("/save", (req, res) => {
    const json = req.body;
    if (Object.keys(json).length == 0) return;
    fs.appendFile("file.json", JSON.stringify(json), (err) => {
        if (err) {
            res.status(500).send("Something went wrong");
            console.error(err);
        } else {
            res.status(200).send("JSON saved successfully");
            console.log(json);
        }
    });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = app;
