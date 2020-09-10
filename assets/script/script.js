var startButton = document.querySelector("#startButton"); 
var quizClock = document.querySelector("#quizClock");
var countdown = document.querySelector("#countdown");
var timeLeft;
var userScore;

startButton.addEventListener("click", startTimer);

function startTimer() {
    var startCount = 5;
    var intervalId = setInterval(function(){
        if(startCount <= 0) {
            clearInterval(intervalId);
            quizTimer();
        }
        countdown.innerHTML = startCount;
        startCount -=1;
    }, 1000);
    countdown.innerHTML = null;
    return;
}
    
function quizTimer() {
    countdown.innerHTML = null;
    timeLeft = 10;
    quizQuestions();

    var intervalId = setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(intervalId);
            gameOver();
        }
        quizClock.innerHTML = timeLeft;
        timeLeft -=1;
    }, 1000)
    return;
}

function gameOver() {
    countdown.innerHTML = null;
    document.getElementById("quizBox").innerHTML = "GAME OVER";
    return;
}

function quizQuestions() {
    countdown.innerHTML = null;
    var questionArray = [questionA, questionB, questionC];





    document.getElementById("quizBox").innerHTML = questionA.question;
    return;
}