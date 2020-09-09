var startButton = document.querySelector("#startButton"); 
var time = document.querySelector("#time");
var countdown = document.querySelector("#countdown");
var timeLeft 

startButton.addEventListener("click", startTimer);

function startTimer() {
    var startCount = 5;
    setInterval(function(){
        if(startCount <= 0) {
            clearInterval(startCount=0);
            startQuiz();
        }
        countdown.innerHTML = startCount;
        startCount -=1;
    }, 1000);
    return;
}
    
function startQuiz() {
    timeLeft = 10;
    setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(timeLeft=0);
            gameOver();
        }
        time.innerHTML = timeLeft;
        timeLeft -=1;
    }, 1000)
    return;
}

function gameOver() {
    document.getElementById("quizQuestion").innerHTML = "GAME OVER";
}