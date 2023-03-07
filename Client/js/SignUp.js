const LoginDis = document.querySelector("#LoginDis form");


async function SignUp(username,password){

  try {
    const resp = await fetch (`http://127.0.0.1:3000/UserInfo/${username}&${password}`)
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

  if (userName.split(" ") == "" ){
    alert ("Please Enter A Username")
  }
  else if (passWord.split(" ") == ""){
    alert("Please Enter A password")
  }
  else {
    SignUp(userName,passWord)
  }
  e.target.userName.value = "";
  e.target.Password.value = "";
} 




LoginDis.addEventListener("submit",getUserInfo)