/*
Project: Tic Tac Toe
By: Yasin Zahir
*/

/*
You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
Your players are also going to be stored in objects, 
and you’re probably going to want an object to control the flow of the game itself.
*/



const gameboard = (()=>{
  let board = ["", "", "", "", "", "", "","", ""];
  return{
    board,
    markSpot(selection, mark){
        board[selection-1] = mark;
        const cell = document.querySelector(`.q${selection}`);
        cell.textContent = mark;

    },
    checkWin(){
      let playerWon = (
        (board[0] === "X" && board[3] == "X" && board[6] == "X") || 
        (board[0] === "X" && board[1] === "X "&& board[2] === "X") || 
        (board[2] === "X" && board[5] === "X" && board[8] === "X") || 
        (board[6] === "X" && board[7] === "X" && board[8] === "X") || 
        (board[2] === "X" && board[4] === "X" && board[6] === "X")
    );

      let botWon = (
        (board[0] === "O" && board[3] == "O" && board[6] == "O") || 
        (board[0] === "O" && board[1] === "O "&& board[2] === "O") || 
        (board[2] === "O" && board[5] === "O" && board[8] === "O") || 
        (board[6] === "O" && board[7] === "O" && board[8] === "O") || 
        (board[2] === "O" && board[4] === "O" && board[6] === "O")
    );
    
      if(playerWon){
        alert("CONGRATULATIONS! YOU WIN!");
        return true;
      }
      else if(botWon){
        alert("OOPS! YOU LOOSE!");
        return true;
      }
      else{
        return false;
      }
    },
    checkBoard(selection){
      if(board[selection-1] === ""){
        this.markSpot(selection);
        return true;
      }
      else{
        console.log("ERROR! SPOT MARKED!");
        return false;
      }
    }
  };
})();


const playRound = (() =>{
  return{
    playerPlays(){
      gameboard.checkWin();
      let check = false;
      let selection = "";
      do{
        selection = prompt("Enter your sqauare (1-9): ");
        check = gameboard.checkBoard(selection);
        gameboard.markSpot(selection, "X");
      }while(check === false);
      console.log(`Player plays: ${selection}`);
    },
    botPlays(){
      gameboard.checkWin();
      let check = false;
      let selection = "";
      do{
        selection = Math.floor(Math.random() * 10 + 1);
        check = gameboard.checkBoard(selection)
        gameboard.markSpot(selection, "O");
      }while(check === false);
      console.log(`Bot plays: ${selection}`);
    }
  }
})();


const main = () => {
  console.log("Welcome to the game!");
  let check = false;
  while(check === false){
    check = gameboard.checkWin();
    if(check === true){
      return;
    }
    playRound.playerPlays();
    check = gameboard.checkWin();
    if(check === true){
      return;
    }
    playRound.botPlays();
    check = gameboard.checkWin();
  }
  return;
};

main();



























/*
Learn C++ and JAVA

C++ Graphical User Interfaces - Microsoft foundation Classes an older technology but its part of the .net framework as well 
Some gui in java as well 

look into java guis and see what they use 
REST/RESTFUL apis

sending data from one point to another like network client server architecture 
*/





