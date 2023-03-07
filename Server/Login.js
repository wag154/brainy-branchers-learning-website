const express = require("express");
const cors = require ("cors");
const app = express();
const loginInfo = require("./LoginInfo.json")
app.use(express.json());
app.use(cors());

var userObject = {};

const addObject = (username,password) =>{
  userObject = {
     UserInfo : {}
  };
  userObject["UserInfo"]["Username"] = username;
  userObject["UserInfo"]["Password"] = password;

  return userObject;

}
app.post("/UserInfo/:Username&:Password", (req,res)=>{
  userObject.newUser = {};

  userObject.newUser["Username"] = req.params.Username;
  userObject.newUser["Password"] =req.params.Password;
  
  loginInfo.push(userObject.newUser)
})

module.exports = {app,addObject};
