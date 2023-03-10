let correctAnswer = "Song Name"; // Replace with the correct song name
let answerInput;
let resultMessage;
let userAnswer;
function startGameNameThatSong() {
    fetchSongAndAnswer(1);
}
function init() {
    answerInput = document.getElementById("answerInput");
    resultMessage = document.getElementById("result");
    userAnswer = answerInput.value;
}
async function fetchSongAndAnswer(id) {
    try {
        // const response = await this.fetch();
        // correctAnswer = response.answer;
        let response =
            "http://www.hyperion-records.co.uk/audiotest/18%20MacCunn%20The%20Lay%20of%20the%20Last%20Minstrel%20-%20Part%202%20Final%20chorus%20O%20Caledonia!%20stern%20and%20wild.MP3";
        document.getElementById(
            "nameThatSong"
        ).innerHTML = `<section id = "header">
                
        <h1>Name That Tune!</h1>
        
        <p>Can <strong>YOU</strong> guess the name of this <strong>SONG</strong>?</p>
        
    </section>
    <section id = "DisplayBody">
        <section id = "DisplayMusic">

            <audio id="musicObject" src="http://www.hyperion-records.co.uk/audiotest/18%20MacCunn%20The%20Lay%20of%20the%20Last%20Minstrel%20-%20Part%202%20Final%20chorus%20O%20Caledonia!%20stern%20and%20wild.MP3"></audio>
            <div class = "resultContainer">
                <p id="result" style = "color: black;"><strong>Result appear here!</strong></p>
            </div>

            <input type="text" id="answerInput" placeholder="Enter your answer" />
            
            <button class = "btn" id="startOverBtn" onclick="startOverAudio()"><strong>Start Over</strong></button>
            <button class = "btn" id="playPauseBtn" onclick="playPauseAudio()"><strong>Play</strong></button>
            <button class = "btn" id = "CheckBtn" onclick="checkAnswer()"><strong>Answer</strong></button>
</section>
</section>`;
        // setSong(response);
    } catch (error) {
        console.log("fetch failed", error);
    }
}

function setSong(songURL) {
    const musicElement = document.querySelector("#musicObject");
    const input = document.getElementById("input").value;
    songURL = input;
    musicElement.setAttribute("src", songURL);
    alert("new song has been displayed!");
}

function checkAnswer() {
    if (!userAnswer) init();
    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase())
        resultMessage.innerText = "Correct! You guessed the song name.";
    else resultMessage.innerText = "Sorry, that's not the right answer.";
}

function playPauseAudio() {
    let myAudio = document.getElementById("musicObject");
    let playPauseBtn = document.getElementById("playPauseBtn");
    if (myAudio.paused) {
        myAudio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        myAudio.pause();
        playPauseBtn.textContent = "Play";
    }
}

function startOverAudio() {
    let myAudio = document.getElementById("musicObject");
    let playPauseBtn = document.getElementById("playPauseBtn");
    myAudio.currentTime = 0;
    myAudio.play();
    playPauseBtn.textContent = "Pause";
}
