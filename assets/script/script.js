var startButton = document.querySelector("#startButton");
var quizClock = document.querySelector("#quizClock");
var countdown = document.querySelector("#countdown");
var questionSpace = document.querySelector("#questionSpace");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var answerBtnA = document.querySelector("#answerBtnA");
var answerBtnB = document.querySelector("#answerBtnB");
var answerBtnC = document.querySelector("#answerBtnC");
var answerBtnD = document.querySelector("#answerBtnD");
var timeLeft;
var questionChange = 0;
var userName = "";

startButton.addEventListener("click", quizTimer);
answerBtnA.addEventListener("click", checkAnswerA);
answerBtnB.addEventListener("click", checkAnswerB);
answerBtnC.addEventListener("click", checkAnswerC);
answerBtnD.addEventListener("click", checkAnswerD);



  function quizTimer() {
    timeLeft = 50;
    shuffle(questions);
    quizQuestions(); 
    var intervalId = setInterval(function () {
      if (questionChange === (questions.length)) {
        clearInterval(intervalId);
        gameOver();
      }  
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        gameOver();
      }
      quizClock.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
    return;
  }

function gameOver() {
  questionSpace.innerHTML = "GAME OVER";
  answerA.innerHTML = "";
  answerB.innerHTML = "";
  answerC.innerHTML = "";
  answerD.innerHTML = "";
  userName = prompt("Game over! You scored " + timeLeft + " points! Enter your name to log your high score.")
  highScore();
  return;
}

function highScore(){
  localStorage.setItem(userName, timeLeft);

  var userNameNode = document.createElement("li");
  var scoreNode = document.createElement("li");

  userNameNode.appendChild(userName);
  document.getElementById("highScoreName").appendChild(userNameNode);
  scoreNode.appendChild(timeLeft);
  document.getElementById("highScore").appendChild(scoreNode);
  
}

function quizQuestions() {
  shuffle(questions[questionChange].choices);
  questionSpace.innerHTML = questions[questionChange].question;
  answerA.innerHTML = questions[questionChange].choices[0];
  answerB.innerHTML = questions[questionChange].choices[1];
  answerC.innerHTML = questions[questionChange].choices[2];
  answerD.innerHTML = questions[questionChange].choices[3];
  return;
}

function checkAnswerA() {
  if (answerA.innerHTML === questions[questionChange].answer) {
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
  } else if (answerA.innerHTML !== questions[questionChange].answer) {
    console.log("wrong");
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
  }
}
function checkAnswerB() {
  if (answerB.innerHTML === questions[questionChange].answer) {
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
  } else if (answerB.innerHTML !== questions[questionChange].answer) {
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
  }
}
function checkAnswerC() {
  if (answerC.innerHTML === questions[questionChange].answer) {
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
  } else if (answerC.innerHTML !== questions[questionChange].answer) {
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
  }
}
function checkAnswerD() {
  if (answerD.innerHTML === questions[questionChange].answer) {
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
  } else if (answerD.innerHTML !== questions[questionChange].answer) {
    console.log("wrong");
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    tempValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}
