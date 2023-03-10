const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;
const hangWords = require("./assets/hangman/guessWords.json");
const memoryData = require("./assets/memoryGame/memoryData.json");
const userStats = require("./assets/dataBase/userStats.json");
const userMessages = require("./assets/dataBase/userMessages.json");
const userDue = require("./assets/dataBase/userDue.json");
const userSchedule = require("./assets/dataBase/userSchedule.json");
const lectureData = require("./assets/dataBase/lectureData.json");
// const englishLanguage = require("./HangmanInformation.json");
const loginDataBase = require("./assets/dataBase/loginInfo.json");
function filterById(jsonObject, givenID) {
    for (let i = 0; i< jsonObject.length; i++) {
        if(jsonObject[i].id == givenID) return jsonObject[i];
    }
}
app.use(express.json());
app.use(cors());

app.get("/HangWords", (req, res) => {
    res.send(hangWords);
});

app.get("/memorydata", (req, res) => {
    res.send(memoryData);
});
app.get("/userData/stats?:userID", (req, res) => {
    let userID = req.params.userID;
    if (!userID || userID.length == 0) return;
    let responseData = filterById(userStats, userID);
    if (!responseData || responseData.length == 0) return res.send(res.status(404));
    res.send(responseData.stats);
});
app.get("/userData/due?:userID", (req, res) => {
    let userID = req.params.userID;
    if (!userID || userID.length == 0) return;
    let responseData = filterById(userDue, userID);
    if (!responseData || responseData.length == 0) return res.send(res.status(404));
    res.send(responseData.due);
});
app.get("/userData/schedule?:userID", (req, res) => {
    let userID = req.params.userID;
    if (!userID || userID.length == 0) return;
    let responseData = filterById(userSchedule, userID);

    if (!responseData || responseData.length == 0) return res.send(res.status(404));
    res.send(responseData.schedule);
});
app.get("/userData/messages?:userID", (req, res) => {
    let userID = req.params.userID;
    console.log(userID);
    if (!userID || userID.length == 0) return res.send(res.status(404));
    let responseData = filterById(userMessages, userID);
    if (!responseData || responseData.length == 0) return res.send(res.status(404));
    res.send(responseData.messages);
});

app.use("/lecture/?:lectureID", (req, res) => {
    let lectureID = req.params.lectureID;
    if (!lectureID || lectureID == 0) return;
    let responseData = filterById(lectureData, lectureID);
    if (!responseData || responseData.length == 0) return res.send(res.status(404));
    res.send(responseData.lectureInfo);
});

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
    loginDataBase.map((User) => {
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
