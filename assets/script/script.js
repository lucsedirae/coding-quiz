//Global variables linking js to DOM
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

//Operational global variables
var userName = "";
var timeLeft = 50;
var questionChange = 0;
var nameArray = [];
var scoreArray = [];
//Temporary arrays that retrieve local storage and parses it to an array after active array is cleared and before new name is pushed
var tempNameArray = JSON.parse(localStorage.getItem("names"));
var tempScoreArray = JSON.parse(localStorage.getItem("scores"));


//Event buttons that start quiz or check high score page
startButton.addEventListener("click", quizTimer);
document.getElementById("checkScoresBtn").addEventListener("click", function(){
    window.location.href = "highscores.html";
})

//This fuction sets initial quiz time, shuffles questions, listens for user input and then counts time down
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

//This function shuffles the order in which question answer choices appear then prints array of question objects to page
function quizQuestions() {
    shuffle(questions[questionChange].choices);
    questionSpace.innerHTML = questions[questionChange].question;
    answerA.innerHTML = questions[questionChange].choices[0];
    answerB.innerHTML = questions[questionChange].choices[1];
    answerC.innerHTML = questions[questionChange].choices[2];
    answerD.innerHTML = questions[questionChange].choices[3];
    return;
  }

  //Clears game page and calls a modal that displays final score and offers user option to store name and score
function gameOver() {
    
    questionSpace.innerHTML = "GAME OVER";
    clearAnswers();
    modal.style.display = "block";
    document.getElementById("yourScore").textContent = timeLeft;
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    document.getElementById("submitBtn").addEventListener("click", highScore);
}

//Converts arrays and records high score to local storage then calls high score page
function highScore(){
    userName = document.getElementById("userName").value;
    if (tempNameArray === null) {
        nameArray.push(userName);
    }else{
        nameArray = tempNameArray;
        nameArray.push(userName);
    }

    if (tempScoreArray === null) {
        scoreArray.push(timeLeft);
    }else{
        scoreArray = tempScoreArray;
        scoreArray.push(timeLeft);
    }

    localStorage.setItem("names", JSON.stringify(nameArray));
    localStorage.setItem("scores", JSON.stringify(scoreArray));

    window.location.href = "highscores.html";
    console.log(window.location.href);
}
//Clears the answer fields
function clearAnswers(){
    answerA.innerHTML = "";
    answerB.innerHTML = "";
    answerC.innerHTML = "";
    answerD.innerHTML = "";
    return;
}
//Changes background color blue if answer is correct
function bgChangerCorrect() {
    bodyEl.classList.add("correctAnswer");
    setTimeout(function() {
        bodyEl.classList.remove("correctAnswer"); 
    }, 1000);
    return;
}
//Changes background color red if answer is incorrect
function bgChangerWrong() {
    bodyEl.classList.add("wrongAnswer");
    setTimeout(function() {
        bodyEl.classList.remove("wrongAnswer");
    }, 1000);
    return;
}  
//The following 4 functions check the user input actions against the correct answer and either award or deduct time accordingly
//These functions are tagged to be consolidated in future release to consolidate code and make it easier to read
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
//This function is inspired by the Fisher-Yates (Knuth) Shuffle method
//It takes an array argument and randomizes the order by executing a sequence of
//replacement variable value changes. The result is a new array order allowing a 
//randomization of question and choice order. For reference please see:
//https://exceptionnotfound.net/understanding-the-fisher-yates-card-shuffling-algorithm/
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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