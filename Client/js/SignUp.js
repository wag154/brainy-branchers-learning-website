const LoginDis = document.querySelector("#LoginDis form");


async function SignUp(username,password,name){

  try {
    const resp = await fetch (`http://127.0.0.1:3000/UserInfo/${username}&${password}&${name}`)
    if (resp.ok){
      data = await resp.json()
    }
    else {
      throw "HTTP ERROR CODE :" + resp.status;
      
    }
  }
catch {((e) => console.log(e))}
}

const getUserInfo = (e) =>{
  e.preventDefault;
  const userName = e.target.Username.value;
  const passWord = e.target.Password.value;
  const UserNickName =e.target.StudentName.value;

  for (let i =0 ; userName.length > i;i++){
   if (userName[i] == " "){
    userName[i] ="";
   }
   if (passWord[i] == " "){
      passWord[i] = "";
   }
   if (UserNickName[i] == " "){
    UserNickName[i] == "";
   }
  }

  if ( userName == "" ){
    alert ("Please Enter A Username")
  }
  else if (passWord == ""){
    alert("Please Enter A password")
  }
  else if (UserNickName == ""){
    alert("Please Enter A Name")
  }
  else {
    SignUp(userName,passWord,UserNickName)
  }

  e.target.userName.value = "";
  e.target.Password.value = "";
} 




LoginDis.addEventListener("submit",getUserInfo)