/*
Project: Tic-Tac-Toe
By: Yasin Zahir
*/

const car = (function(){
  let brand = "";
  let speed = 0;

  function accelerate(){
    speed+=10;
  }
  function brake(){
    speed-=5;
  }
  function getSpeed(){
    return speed;
  }
  return{
    accelerate, brake, getSpeed
  };
})();