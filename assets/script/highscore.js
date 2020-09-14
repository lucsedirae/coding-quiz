var nameList = document.querySelector("#nameList");
var scoreList = document.querySelector("#scoreList");

window.addEventListener("load", init);

function init() {
    var storedNames = JSON.parse(localStorage.getItem("userName"));
    if (storedNames !== null) {
        nameArray = storedNames;
    }

    var storedScores = JSON.parse(localStorage.getItem("timeLeft"));
    if (storedScores !== null) {
        scoreArray = storedScores;
    }
    printHighScores();
}



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

    console.log(nameArray);
}