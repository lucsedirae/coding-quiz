var questionSpace = document.querySelector("#questionSpace");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var answerBtnA = document.querySelector("#answerBtnA");
var answerBtnB = document.querySelector("#answerBtnB");
var answerBtnC = document.querySelector("#answerBtnC");
var answerBtnD = document.querySelector("#answerBtnD");
var bodyEl = document.querySelector("#bodyEl");
var modal = document.querySelector("#gameOverModal");
var closeButton = document.querySelector("#closeButton");

var userName = "";
var timeLeft = 50;
var questionChange = 0;
var nameArray = JSON.parse(localStorage.getItem("nameArray"));
var scoreArray = JSON.parse(localStorage.getItem("scoreArray"));


startButton.addEventListener("click", quizTimer);


function quizTimer() {
    timeLeft = 50;
    shuffle(questions);
    quizQuestions(); 
    answerBtnA.addEventListener("click", checkAnswerA);
    answerBtnB.addEventListener("click", checkAnswerB);
    answerBtnC.addEventListener("click", checkAnswerC);
    answerBtnD.addEventListener("click", checkAnswerD);

    if (timeLeft > 0) {
        startButton.removeEventListener("click", quizTimer);
    }

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

function quizQuestions() {
    shuffle(questions[questionChange].choices);
    questionSpace.innerHTML = questions[questionChange].question;
    answerA.innerHTML = questions[questionChange].choices[0];
    answerB.innerHTML = questions[questionChange].choices[1];
    answerC.innerHTML = questions[questionChange].choices[2];
    answerD.innerHTML = questions[questionChange].choices[3];
    return;
  }
  
function gameOver() {
    questionSpace.innerHTML = "GAME OVER";
    clearAnswers();
    modal.style.display = "block";
    document.getElementById("yourScore").textContent = timeLeft;
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    document.getElementById("submitBtn").addEventListener("click", highScore);
    // window.addEventListener("click", function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // });
}

function highScore(){
    userName = document.getElementById("userName").value;
    nameArray.push(userName);
    scoreArray.push(timeLeft);
    console.log(nameArray);

    localStorage.setItem("nameArray", JSON.stringify(nameArray));
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
    // window.location.href = "highscores.html";
    window.location.assign("./highscores.html");
}

function clearAnswers(){
    answerA.innerHTML = "";
    answerB.innerHTML = "";
    answerC.innerHTML = "";
    answerD.innerHTML = "";
    return;
}

function bgChangerCorrect() {
    bodyEl.classList.add("correctAnswer");
    setTimeout(function() {
        bodyEl.classList.remove("correctAnswer"); 
    }, 1000);
    return;
}

function bgChangerWrong() {
    bodyEl.classList.add("wrongAnswer");
    setTimeout(function() {
        bodyEl.classList.remove("wrongAnswer");
    }, 1000);
    return;
}  

function checkAnswerA() {
    if (answerA.innerHTML === questions[questionChange].answer) {
    bgChangerCorrect();
    timeLeft = timeLeft + 15;
    ++questionChange;
    quizQuestions();
    return;
    } else if (answerA.innerHTML !== questions[questionChange].answer) {
    bgChangerWrong();
    timeLeft = timeLeft - 25;
    ++questionChange;
    quizQuestions();
    return;
    }
}

function checkAnswerB() {
    if (answerB.innerHTML === questions[questionChange].answer) {
        bgChangerCorrect();
        timeLeft = timeLeft + 15;
        ++questionChange;
        quizQuestions();
        return;
    } else if (answerB.innerHTML !== questions[questionChange].answer) {
        bgChangerWrong();
        timeLeft = timeLeft - 25;
        ++questionChange;
        quizQuestions();
        return;
    }
}

function checkAnswerC() {
    if (answerC.innerHTML === questions[questionChange].answer) {
        bgChangerCorrect();
        timeLeft = timeLeft + 15;
        ++questionChange;
        quizQuestions();
        return;
    } else if (answerC.innerHTML !== questions[questionChange].answer) {
        bgChangerWrong();
        timeLeft = timeLeft - 25;
        ++questionChange;
        quizQuestions();
        return;
    }
}

function checkAnswerD() {
    if (answerD.innerHTML === questions[questionChange].answer) {
        bgChangerCorrect();
        timeLeft = timeLeft + 15;
        ++questionChange;
        quizQuestions();
        return;
    } else if (answerD.innerHTML !== questions[questionChange].answer) {
        bgChangerWrong();
        timeLeft = timeLeft - 25;
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