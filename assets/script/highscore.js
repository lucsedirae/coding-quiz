//Global variables linking script to the DOM
var nameList = document.querySelector("#nameList");
var scoreList = document.querySelector("#scoreList");
var clearScoreBtn = document.querySelector("#clearScoresBtn");
//An event listener that runs init function when page loads
window.addEventListener("load", init);
//Event listener to clear and reload local storage and high scores
clearScoreBtn.addEventListener("click", function(){
    window.localStorage.clear();
    window.location.reload();
});
//Event listener that returns user to quiz screen
document.getElementById("tryAgainBtn").addEventListener("click", function(){
    window.location.href = "index.html";
})
//This function initializes the action of the page pulling high score and name data from local storage
function init() {
    var storedNames = JSON.parse(localStorage.getItem("names"));
    if (storedNames !== null) {
        nameArray = storedNames;
    }
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        scoreArray = storedScores;
    }
    printHighScores();
}

//Writes names and scores to DOM
function printHighScores() {
    nameList.innerHTML = "";
    scoreList.innerHTML = "";

    for (var i = 0; i < nameArray.length; i++) {
        var name = nameArray[i];

        var li = document.createElement("li");
        li.textContent = name;
        li.setAttribute("data-index", i);
        nameList.appendChild(li);
    }
    for (var j = 0; j < scoreArray.length; j++) {
        var score = scoreArray[j];

        var scoreLi = document.createElement("li");
        scoreLi.textContent = score;
        scoreLi.setAttribute("data-index", j);
        scoreList.appendChild(scoreLi);
    }
}