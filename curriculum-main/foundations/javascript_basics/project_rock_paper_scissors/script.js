/*
Project: Rock, Paper, Scissors
Written by: Yasin Zahir
*/

console.log("Project: Rock, Paper, Scissors");

/*
Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: 
“rock”, “paper” or “scissors”.
*/

function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3) + 1;
   if(choice == 1){
    return "Rock";
  }
  else if(choice == 2){
    return "Paper";
  }
  else if (choice == 3){
    return "Scissors";
  }
  else{
    return undefined;
  }
}

//console.log(getComputerChoice());


/*
Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. 
For now, just assume the user will always enter a valid choice.
Test what your function returns by using console.log.

*/

function getHumanChoice(){
  let choice = prompt("Please enter rock, paper, or scissors)");
  choice = choice.toLowerCase();
  choice = choice.replace(choice.charAt(0), choice.charAt(0).toUpperCase());
  return choice;
} 
//console.log(getHumanChoice());


/*
Step 4: Declare the players score variables
Your game will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.
*/

let humanWins = 0;
let computerWins = 0;


/*
Step 5: Write the logic to play a single round
Your game will be played round by round. 
You will write a function that takes the human and computer player choices as arguments,
 plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. 
Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, 
such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.
*/

function round(humanChoice, computerChoice){
  // humanChoice == Rock
  if(humanChoice == "Rock" && computerChoice == "Rock"){
    return "Tie!";
  }
  else if(humanChoice == "Rock" && computerChoice == "Paper"){
    return "Computer wins!";
  }
  else if(humanChoice == "Rock" && computerChoice == "Scissors"){
    return "Human wins!";
  }

  // humanChoice == Paper
  if(humanChoice == "Paper" && computerChoice == "Rock"){
    return "Human wins!";
  }
  else if(humanChoice == "Paper" && computerChoice == "Paper"){
    return "Tie!";
  }
  else if(humanChoice == "Paper" && computerChoice == "Scissors"){
    return "Computer wins!";
  }

  // humanChoice == Scissors
  if(humanChoice == "Scissors" && computerChoice == "Rock"){
    return "Computer wins!";
  }
  else if(humanChoice == "Scissors" && computerChoice == "Paper"){
    return "Human wins!";
  }
  else if(humanChoice == "Scissors" && computerChoice == "Scissors"){
    return "Tie!";
  }
}



let currentRound = undefined;

for(let i = 0; i< 5; i++){
  console.log("-------------------------Welcome to round: " + (i+1) + " of Rock, Paper, Scissors!-------------------------");
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  currentRound = round(humanChoice, computerChoice);
  console.log(currentRound);
  if(currentRound === "Computer wins!"){
    computerWins++;
  }
  else if(currentRound === "Human wins!"){
    humanWins++;
  }
  else{
    continue;
  }
  console.log("Human Choice: " + humanChoice);
  console.log("Computer Choice: " + computerChoice);
}

console.log("Human score: " + humanWins);
console.log("Computer score: " + computerWins);

 console.log("-------------------------End of Program-------------------------");

