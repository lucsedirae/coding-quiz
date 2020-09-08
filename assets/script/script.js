var startButton = document.querySelector("#startButton"); 
var seconds = 10, $seconds = document.querySelector("#countdown");

function startTimer() {
    (function countdown() {
        $seconds.textContent = seconds;
        if(seconds --> 0) setTimeout(countdown, 1000);   
    })();
}

startButton.addEventListener("click", startTimer);

if (seconds === 0){
    startQuiz();
}
function startQuiz() {
    console.log("Quiz Underway");
}