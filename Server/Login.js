const express = require("express");
const cors = require ("cors");
const jsonFile = require("jsonfile")
const app = express();
const loginInfo = require("./LoginInfo")
app.use(express.json());
app.use(cors());
var PushJson = undefined;
var userObject = {};

const getMax = ()=>{
  const names = loginInfo.map((User) => User.Username)
  return Math.max (...names)
}

const addObject = (username,password,name) =>{
  const min = 1;
  const max = 1000000000000000000000;
  const random = Math.floor(Math.random()*(max-min)+min)
 // userObject[`User`] = {}
  userObject["ID"] = random 
  userObject["Username"] = username;
  userObject["Password"] = password;
  userObject["Name"] = name;

  return userObject;

}

const findUsername = (username) =>{
  return loginInfo.find((Username) => Username.User.Name ==username)
}
app.use("/UserInfo/:Username&:Password&:Name", (req,res)=>{

  userObject.newUser = {};

  const NewObj = addObject(req.params.Username,req.params.Password,req.params.Name)
  req.body = NewObj;

  jsonFile.writeFileSync('LoginInfo.json',NewObj,{flag :"a",spaces:2,finalEOL : false})
})

app.post ((req,res)=>{

})

module.exports = app;
