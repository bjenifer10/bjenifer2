alert("I'm thinking of a number between 1 and 10. What's my number? You have 5 guesses.");

var answer = 7;
var guess = prompt("What's your guess?");

for (i=0;i<5;i++){
    if (answer == guess) {
        alert("You are correct!");
        break;
    }
    else{
        alert("Sorry. Try Again.");
        guess = prompt("Please Try Again.");
    }
}