const express = require("express");
const cors = require ("cors");
const app = express();
const loginInfo = require("./LoginInfo.json")
app.use(express.json());
app.use(cors());

var userObject = {};

const addObject = (username,password,name) =>{
  userObject = {
     UserInfo : {}
  };
  userObject["UserInfo"]["Username"] = username;
  userObject["UserInfo"]["Password"] = password;
  userObject["UserInfo"]["Name"] = name;

  return userObject;

}
app.get("/UserInfo/:Username&:Password&:Name", (req,res)=>{
  userObject.newUser = {};
  const NewObj = addObject(req.params.Username,req.params.Password,req.params.Name);
  console.log(NewObj)
})

module.exports = app;
