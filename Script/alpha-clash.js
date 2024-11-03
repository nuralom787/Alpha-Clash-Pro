function play() {
    const home = document.getElementById("home");
    home.classList.add("hidden");
    const playGround = document.getElementById("play-ground");
    playGround.classList.remove("hidden");
    const getAlphabet = getARandomAlphabet();
    const display = document.getElementById("display-alphabet");
    display.innerText = getAlphabet;
    const alphabetBtn = document.getElementById(getAlphabet);
    alphabetBtn.style.backgroundColor = "yellow";
    alphabetBtn.style.color = "black";
}

function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;
};

function onKeyPress(event) {
    const display = document.getElementById("display-alphabet");
    const displayText = display.innerText.toLowerCase();
    const key = event.key;
    if (key === displayText) {
        console.log("WOW, Great!");
        play()
        const alphabetBtn = document.getElementById(displayText);
        alphabetBtn.style.backgroundColor = "#191e24"
        alphabetBtn.style.color = "white"
        const score = document.getElementById("new-score");
        const scoreText = score.innerText;
        const scoreNumber = parseFloat(scoreText);
        const newScore = scoreNumber + 1;
        score.innerText = newScore;
    } else {
        const life = document.getElementById("life");
        const lifeText = life.innerText;
        const lifeNumber = parseFloat(lifeText);
        const newLife = lifeNumber - 1;
        life.innerText = newLife;
        if (newLife === 0) {
            const newScore = document.getElementById("new-score");
            const scoreText = newScore.innerText;
            const scoreNumber = parseFloat(scoreText);
            const finalScore = document.getElementById("final-score");
            finalScore.innerText = scoreNumber;
            const playGround = document.getElementById("play-ground");
            playGround.classList.add("hidden");
            const score = document.getElementById("score");
            score.classList.remove("hidden");
        }
    }
}

document.addEventListener("keyup", onKeyPress)