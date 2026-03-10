
function createDivs(){
  const container = document.querySelector(".container");
  for(let i =0; i < (16 * 16); i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("style", "height: 6.25%; width: 6.25%; display: flex; flex-wrap: wrap; border: 2px solid black;");
    container.appendChild(div);
    div.addEventListener("mouseenter",  event => {
      let color1 = Math.floor(Math.random() * 255);
      let color2 = Math.floor(Math.random() * 255);
      let color3 = Math.floor(Math.random() * 255);
      div.style.backgroundColor = "rgb(" +color1 + ", " + color2 + ", " + color3 + ")";
});
  }
}
/*
Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) 
so that you’ve got a new sketch pad.
*/


function resetGrid(){
  const container = document.querySelector(".container");
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  let num_squares = 0;
  do {
  num_squares = prompt("Enter the number of squares per side for the new grid");
  }while(num_squares < 0 || num_squares > 100);
  for(let i = 0; i< num_squares * num_squares; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("style", "display: flex; flex-wrap: wrap; border: 2px solid black;");
    div.style.height = (100/num_squares) + "%";
    div.style.width = (100/num_squares) + "%";
    container.appendChild(div);
    div.addEventListener("mouseenter",  event => {
      let color1 = Math.floor(Math.random() * 255);
      let color2 = Math.floor(Math.random() * 255);
      let color3 = Math.floor(Math.random() * 255);
      div.style.backgroundColor = "rgb(" +color1 + ", " + color2 + ", " + color3 + ")";
});
  }
}


createDivs();
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetGrid);


/*
Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
*/

