const LoginDis = document.querySelector("#LoginDis form");
const DisNameLabel = document.querySelector("#NameLabel");
const dIsNameInput = document.querySelector("#NameInput");
const BtnSwitch = document.querySelector("#LoginBtn");
const HeadDis = document.querySelector("#Displayer");
const signUpOption = true;

const check = (data) => {
    if (data.includes(true)) {
        HeadDis.textContent = "LOGIN SUCCESSFUL!";
        // add link
    }
};
async function Login(userName, password) {
    try {
        const resp = await fetch(
            `http://127.0.0.1:3000/Login/${userName}&${password}`
        );
        if (resp.ok) {
            let data = await resp.json();
            check(data);
        } else {
            throw "HTTP ERROR CODE:" + resp.status;
        }
    } catch {
        (e) => console.log(e);
    }
}

async function SignUp(username, password, name) {
    try {
        const resp = await fetch(
            `http://127.0.0.1:3000/UserInfo/${username}&${password}&${name}`
        );
        if (resp.ok) {
            let data = await resp.json();
        } else {
            throw "HTTP ERROR CODE :" + resp.status;
        }
    } catch {
        (e) => console.log(e);
    }
}

const getUserInfo = (e) => {
    e.preventDefault;
    const userName = e.target.Username.value;
    const passWord = e.target.Password.value;
    const UserNickName = e.target.StudentName.value;

    for (let i = 0; userName.length > i; i++) {
        if (userName[i] == " ") {
            userName[i] = "";
        }
        if (passWord[i] == " ") {
            passWord[i] = "";
        }
        if (UserNickName[i] == " ") {
            UserNickName[i] == "";
        }
    }

    if (userName == "") {
        alert("Please Enter A Username");
    } else if (passWord == "") {
        alert("Please Enter A password");
    } else if (UserNickName == "") {
        alert("Please Enter A Name");
    } else {
        if (signUpOption == true) {
            SignUp(userName, passWord, UserNickName);
        } else {
            Login(userName, passWord);
        }
    }

    e.target.userName.value = "";
    e.target.Password.value = "";
};

function LoginBtn() {
    if (BtnSwitch.textContent == "Sign Up") {
        DisNameLabel.style.display = "block";
        dIsNameInput.style.display = "block";
        BtnSwitch.textContent = "Login";
        HeadDis.textContent = "Sign Up";
        signUpOption = false;
    } else {
        DisNameLabel.style.display = "none";
        dIsNameInput.style.display = "none";
        BtnSwitch.textContent = "Sign Up";
        HeadDis.textContent = "Login";
        signUpOption = true;
    }
}

LoginDis.addEventListener("submit", getUserInfo);
