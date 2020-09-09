var startButton = document.querySelector("#startButton"); 
var time = document.querySelector("#time");
var countdown = document.querySelector("#countdown");
var timeLeft;
var userScore;

var questionA = {
    question: "What does 'const' mean?",
    badAnswerA: "'const' is a function that cannot be changed after being declared.",
    badAnswerB: "'const' is an abbreviation of constant and is a method that cannot be changed.",
    goodAnswer: "'const' is a variable that cannot be changed once defined."
};

startButton.addEventListener("click", startTimer);

function startTimer() {
    var startCount = 5;
    var intervalId = setInterval(function(){
        if(startCount <= 0) {
            clearInterval(intervalId);
            startQuiz();
        }
        countdown.innerHTML = startCount;
        startCount -=1;
    }, 1000);
    return;
}
    
function startQuiz() {
    timeLeft = 10;
    quizQuestions();

    var intervalId = setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(intervalId);
            gameOver();
        }
        time.innerHTML = timeLeft;
        timeLeft -=1;
    }, 1000)
    return;
}

function gameOver() {
    document.getElementById("quizQuestion").innerHTML = "GAME OVER";
    return;
}

function quizQuestions() {
    document.getElementById("quizQuestion").innerHTML = questionA.question;
    return;
}