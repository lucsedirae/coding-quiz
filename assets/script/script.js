var startButton = document.querySelector("#startButton"); 
var time = document.querySelector("#time");
var timeLeft = 5;

startButton.addEventListener("click", startTimer);

function startTimer() {
  setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(timeLeft=0);
            startQuiz();
        }
      time.innerHTML = timeLeft;
    timeLeft -=1;
  }, 1000)
}
    


function startQuiz() {
    timeLeft = 60;
    document.getElementById("quizQuestion").innerHTML = "What is the sum of 2 + 2?";
}