function getCookie(name) {
    let cookieName = name + "=";
    let allCookies = document.cookie;
    let cookiesArray = allCookies.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length); // return the cookie value
        }
    }
    return "";
}
let id = getCookie("id");
let nameOfStudent = getCookie("name");
if (!id || !nameOfStudent) window.location.replace("./signUp.html");

document.getElementById("#studentName").innerHTML = nameOfStudent;
