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
  var intervalId = setInterval(function () {
    if (startCount <= 0) {
      clearInterval(intervalId);
      quizTimer();
    }
    quizClock.innerHTML = startCount;
    startCount -= 1;
  }, 1000);
  return;
}

function quizTimer() {
  timeLeft = 10;

  var intervalId = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      gameOver();
    }
    quizClock.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
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
  var questionArray = [
    questionA.question,
    questionB.question,
    questionC.question,
  ];
  var badAnswerA = [
    questionA.badAnswerA,
    questionB.badAnswerA,
    questionC.badAnswerA,
  ];
  var badAnswerB = [
    questionA.badAnswerB,
    questionB.badAnswerB,
    questionC.badAnswerB,
  ];
  var badAnswerC = [
    questionA.badAnswerC,
    questionB.badAnswerC,
    questionC.badAnswerC,
  ];
  var goodAnswer = [
    questionA.goodAnswer,
    questionB.goodAnswer,
    questionC.goodAnswer,
  ];

  var arrayRandomizer = Math.floor(Math.random() * questionArray.length);
  // var answerArray = [badAnswerA[arrayRandomizer], badAnswerB[arrayRandomizer], badAnswerC[arrayRandomizer], goodAnswer[arrayRandomizer]]
  document.getElementById("question").innerHTML =
    questionArray[arrayRandomizer];

  for (let i = 4; i > 0; i--) {
    //Would like to store these as key:value pairs but not sure if that can be done inside
    //an array or if you can apply the splice to an object
    var answerArray = {
      answerA: badAnswerA[arrayRandomizer],
      answerB: badAnswerB[arrayRandomizer],
      answerC: badAnswerC[arrayRandomizer],
      answerD: goodAnswer[arrayRandomizer],
    };

    if (i === 4) {
      var buttonA = answerArray[Math.floor(Math.random() * answerArray.length)];
      delete answerArray.buttonA;
      document.getElementById("answerA").innerHTML = buttonA;
    } else if (i === 3) {
      var buttonB = answerArray[Math.floor(Math.random() * answerArray.length)];
      delete answerArray.buttonB;
      document.getElementById("answerB").innerHTML = buttonB;
    } else if (i === 2) {
      var buttonC = answerArray[Math.floor(Math.random() * answerArray.length)];
      delete answerArray.buttonC;
      document.getElementById("answerC").innerHTML = buttonC;
    } else if (i === 1) {
      var buttonD = answerArray[Math.floor(Math.random() * answerArray.length)];
      delete answerArray.buttonD;
      document.getElementById("answerD").innerHTML = buttonD;
    }
  }

  // var buttonA = answerArray[Math.floor(Math.random() * answerArray.length)];
  // var buttonB = answerArray[Math.floor(Math.random() * answerArray.length)];
  // var buttonC = answerArray[Math.floor(Math.random() * answerArray.length)];
  // var buttonD = answerArray[Math.floor(Math.random() * answerArray.length)];

  //This section prints the question and answers to the appropriate HTML elements
  // document.getElementById("question").innerHTML = questionArray[arrayRandomizer];
  // document.getElementById("answerA").innerHTML = buttonA;
  // document.getElementById("answerB").innerHTML = buttonB;
  // document.getElementById("answerC").innerHTML = buttonC;
  // document.getElementById("answerD").innerHTML = buttonD;

  answerA.addEventListener("click", checkAnswerA);
  answerB.addEventListener("click", checkAnswerB);
  answerC.addEventListener("click", checkAnswerC);
  answerD.addEventListener("click", checkAnswerD);

  return;
}

function checkAnswerA() {}
