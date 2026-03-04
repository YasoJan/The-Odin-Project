/*
Project: Rock, Paper, Scissors!
*/

console.log("Let the games begin!");

/*
Step 2: Write the logic to get the computer choice
1. Create a new function named getComputerChoice.
2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
*/

function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3);
  if(choice== 0){
    return "rock";
  }
  else if (choice == 1){
    return "paper";
  }
  else if (choice == 2){
    return "scissors";
  }
  else{
    return "ERROR! NUMBER OUT OF BOUNDS!";
  }
}
/*
3. Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
*/

// console.log(getComputerChoice());


/*
Step 3: Write the logic to get the human choice
1. Create a new function named getHumanChoice.
2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
*/

function getHumanChoice(){
  let choice = "";
  do {
  choice = prompt("Enter rock, paper, or scissors: ");
  choice = choice.toLowerCase();
  }while(choice != "rock" && choice!= "paper" && choice!= "scissors");
  return choice;
}


/*
3. Test what your function returns by using console.log.
*/

// console.log(getHumanChoice());

/*
Step 4: Declare the players score variables
1. Create two new variables named humanScore and computerScore in the global scope.
2. Initialize those variables with the value of 0.
*/

let humanScore = 0;
let computerScore = 0;

/*
Step 5: Write the logic to play a single round
1. Create a new function named playRound.
2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
*/

function playRound(humanChoice, computerChoice){
  if(humanChoice == "rock"){
    if(computerChoice == "rock"){
      return "tie!";
    }
    else if(computerChoice == "paper"){
      computerScore+=1;
      return "Computer wins!";
    }
    else if(computerChoice == "scissors"){
      humanScore+=1;
      return "Human wins!";
    }
  }
  else if(humanChoice == "paper"){
    if(computerChoice == "rock"){
      humanScore+=1;
      return "Human wins!";
    }
    else if(computerChoice == "paper"){
      return "Tie!";
    }
    else if(computerChoice == "scissors"){
      computerScore+=1;
      return "Computer wins!";
    }
  }
  else if(humanChoice == "scissors"){
    if(computerChoice == "rock"){
      computerScore+=1;
      return "Computer Wins!";
    }
    else if(computerChoice == "paper"){
      humanScore+=1;
      return "Human wins!";
    }
    else if(computerChoice == "scissors"){
      return "Tie!";
    }
  }
}

/*
Step 6: Write the logic to play the entire game
1. Create a new function named playGame.
2. Move your playRound function and score variables so that they’re declared inside of the new playGame function
*/

function playGame(){
  for(let i = 0; i < 5; i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    prompt(playRound(humanChoice, computerChoice));
    prompt("Human Choice: " + humanChoice);
    prompt("Computer Choice: " + computerChoice);
    prompt("Human score: " + humanScore);
    prompt("Computer Score: " + computerScore);
  }
}

playGame();