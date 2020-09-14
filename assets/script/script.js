var startButton = document.querySelector("#startButton");
var quizClock = document.querySelector("#quizClock");
var countdown = document.querySelector("#countdown");
var questionSpace = document.querySelector("#questionSpace");
var quizBox = document.querySelector("#quizBox");
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
// var storedName = localStorage.getItem()


// var storedNameNode = document.createElement("li");
// var storedScoreNode = document.createElement("li");

// userNameNode.innerHTML = userName;
// document.getElementById("highScoreName").appendChild(storedNameNode);

// scoreNode.innerHTML = timeLeft;
// document.getElementById("highScore").appendChild(storedScoreNode);
alert("Welcome to the JavaScript edition of the Quizmaster 3000. Click start to begin the quiz. Match the correct answer with the matching answer button. Wrong answers will turn the screen red while correct answers will turn the screen blue.")


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
      if (timeLeft <= 0 || questionChange === (questions.length)) {
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
  userName = prompt("Game over! You scored " + timeLeft + " points! Enter your name to log your high score.");
  highScore();
  var playAgain = confirm ("Would you like to play again?");
  if (playAgain = true) {
    location.reload();
  } else
  {
  alert("Thanks for playing! Time to go study!");
  window.open("http://w3schools.com");
  }
  return;
}

function highScore(){
  localStorage.setItem(userName, timeLeft);

  var userNameNode = document.createElement("li");
  var scoreNode = document.createElement("li");

  userNameNode.innerHTML = userName;
  document.getElementById("highScoreName").appendChild(userNameNode);
  
  scoreNode.innerHTML = timeLeft;
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

function bgChangerCorrect() {
  quizBox.classList.add("correctAnswer");
  setTimeout(function() {
    quizBox.classList.remove("correctAnswer"); 
  }, 1000);
  return;
}

function bgChangerWrong() {
  quizBox.classList.add("wrongAnswer");
  setTimeout(function() {
    quizBox.classList.remove("wrongAnswer");
  }, 1000);
  return;
}

function checkAnswerA() {
  if (answerA.innerHTML === questions[questionChange].answer) {
    bgChangerCorrect();
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
    return;
  } else if (answerA.innerHTML !== questions[questionChange].answer) {
    bgChangerWrong();
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
    return;
  }
}

function checkAnswerB() {
  if (answerB.innerHTML === questions[questionChange].answer) {
    bgChangerCorrect();
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
    return;
  } else if (answerB.innerHTML !== questions[questionChange].answer) {
    bgChangerWrong();
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
    return;
  }
}

function checkAnswerC() {
  if (answerC.innerHTML === questions[questionChange].answer) {
    bgChangerCorrect();
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
    return;
  } else if (answerC.innerHTML !== questions[questionChange].answer) {
    bgChangerWrong();
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
    return;
  }
}

function checkAnswerD() {
  if (answerD.innerHTML === questions[questionChange].answer) {
    bgChangerCorrect();
    timeLeft = timeLeft + 5;
    ++questionChange;
    quizQuestions();
    return;
  } else if (answerD.innerHTML !== questions[questionChange].answer) {
    bgChangerWrong();
    timeLeft = timeLeft - 5;
    ++questionChange;
    quizQuestions();
    return;
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