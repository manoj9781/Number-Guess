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

let correctNumber = getRandomNumber();

window.onload = function ()
{
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

function playGame()
{
    let guessNumber = document.getElementById('number-guess').value;
    console.log(correctNumber);
    displayResult(guessNumber);
}

function initGame()
{

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
        console.log("To high")
    }
    else if (guessNumber < correctNumber)
    {
        console.log("Too low");
    }
    else {
        console.log("is correct!!");
    }

}