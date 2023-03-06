
const countdown = document.getElementById("countdown");
const inputMemory = document.querySelector("#inputMemory form");

inputMemory.style.display = "none";

for (let i = 4; i >= 0; i--) {
    console.log(i);
    setTimeout(() => {
        countdown.textContent = i;
    }, 1500);
}

console.log(countdown);
countdown.textContent = "bob";
/*setTimeout(() => {
    for (let i = 4; i >= 0; i--) {
        console.log(i);
        countdown.textContent = i;
    }
}, 1500);*/
countdown.style.display = "none";

setTimeout(() => {
    inputMemory.style.display = "block";
}, 3000);
