// console.log("Hello");
// //var age = prompt("what is your age?");
// //document.getElementById('someText').innerHTML = age;

// function greeting(yourName) {
//     var result = 'Hello ' + yourName;
//     console.log(result);
// }

// var name = prompt('Enter Name');
// greeting(name);

/*var age = 56;
//    prompt("What is your age?");
if ((age >= 18) && (age <= 35)) {
    status = "Target Demo";
    console.log(status);
}
else {
    status = "Not my Audience";
    console.log(status);
}

var num = prompt("Enter Number");
switch (num) {
    case 0:
        text = "Weekend";
        break;
    case 5:
        text = "Weekend";
        break;
    case 6:
        text = "Weekend";
        break;
    default:
        text = "Weekday";
}

console.log(text);
*/
let guesses = [];

let correctNumber = getRandomNumber();

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}
function playGame()
{
    let guessNumber = document.getElementById('number-guess').value;
    //console.log(correctNumber);
    displayResult(guessNumber);
    saveGuessHistory(guessNumber);
    displayHistory();
}



function getRandomNumber()
{
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}

function displayResult(guessNumber)
{
    if (guessNumber > correctNumber)
    {
        showNumberAbove();
    }
    else if (guessNumber < correctNumber)
    {
        showNumberBelow();
    }
    else {
        showYouWon();
    }

}

function getDialog(dialogType, text)
{
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class = 'alert alert-warning' role = 'alert'>";
            break;
        case "won":
            dialog = "<div class = 'alert alert-success' role = 'alert'>";
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon()
{
    const text = "Awesome job, you got it!";
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your Guess is too high!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your Guess is too low!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function saveGuessHistory(guess) {
    guesses.push(guess);
    // console.log(guesses);
}

function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";
    while (index >= 0)
    {
        list += "<li class= 'list-group-item'>" + " You Guessed " + guesses[index] + "</li>";
        index-=1;
    }
    list += '</ul>';
    document.getElementById("history").innerHTML = list;
}


function initGame()
{
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}