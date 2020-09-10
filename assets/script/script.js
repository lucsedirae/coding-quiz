var startButton = document.querySelector("#startButton"); 
var quizClock = document.querySelector("#quizClock");
var countdown = document.querySelector("#countdown");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
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
    return;
}
    
function quizTimer() {
    timeLeft = 10;

    var intervalId = setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(intervalId);
            gameOver();
        }
        quizClock.innerHTML = timeLeft;
        timeLeft -=1;
    }, 1000)
    quizQuestions();
    return;
}

function gameOver() {
    document.getElementById("question").innerHTML = "GAME OVER";
    document.getElementById("answerA").innerHTML = "";
    document.getElementById("answerB").innerHTML = "";
    document.getElementById("answerC").innerHTML = "";
    document.getElementById("answerD").innerHTML = "";


    return;
}

function quizQuestions() {
    var questionArray = [questionA.question, questionB.question, questionC.question];
    var badAnswerA = [questionA.badAnswerA, questionB.badAnswerA, questionC.badAnswerA];
    var badAnswerB = [questionA.badAnswerB, questionB.badAnswerB, questionC.badAnswerB];
    var badAnswerC = [questionA.badAnswerC, questionB.badAnswerC, questionC.badAnswerC];
    var goodAnswer = [questionA.goodAnswer, questionB.goodAnswer, questionC.goodAnswer];

    var arrayRandomizer = Math.floor(Math.random() * questionArray.length);
    document.getElementById("question").innerHTML = questionArray[arrayRandomizer];
    document.getElementById("answerA").innerHTML = badAnswerA[arrayRandomizer];
    document.getElementById("answerB").innerHTML = badAnswerB[arrayRandomizer];
    document.getElementById("answerC").innerHTML = badAnswerC[arrayRandomizer];
    document.getElementById("answerD").innerHTML = goodAnswer[arrayRandomizer];



    answerA.addEventListener("click", checkAnswerA);
    answerB.addEventListener("click", checkAnswerB);
    answerC.addEventListener("click", checkAnswerC);
    answerD.addEventListener("click", checkAnswerD);
    
    // document.getElementById("quizBox").innerHTML = questionA.question;
    return;
}

function checkAnswerA() {

}